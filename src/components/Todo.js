import React, {useEffect} from 'react';
import PropsTypes from 'prop-types';

import {connect} from 'react-redux';

import {
    GET_TODOS_REQUESTED,
    DELETE_TODO_REQUESTED,
} from '../redux/actions/todo-actions';


import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const Todo = ({
    todo: {loading, todos},
    getTodos,
    deleteTodo,
}) => {
    useEffect(() => {
        getTodos()
    }, [])

    return (
        <>
            <TodoForm />
            {loading && 'Loading...'}
            {todos && todos.map((todo,index) => (
                <TodoItem todo={todo} key={index} deleteTodo={deleteTodo} />
            ))}
        </>
    );
}; 


Todo.propTypes = {
    loading: PropsTypes.bool,
    todos: PropsTypes.array,
    getTodos: PropsTypes.func.isRequired,
    deleteTodo: PropsTypes.func.isRequired,
}

// Get dispatch / function to props

const mapStateToProps = (state) => ({
    todo: state.todo
});

const mapDispatchToProps = (dispatch) => ({
    getTodos: () => dispatch({type: GET_TODOS_REQUESTED}),
    deleteTodo: () => dispatch({type: DELETE_TODO_REQUESTED, payload: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
