import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {
    SET_TODO_TITLE_REQUESTED,
    CREATE_TODO_REQUESTED,
} from '../redux/actions/todo-actions';


const TodoForm = ({
    title,
    setTodoTitle,
    createTodo,
}) => {
    const onChange = (e) => {
        setTodoTitle.(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="What needs to be done..."
                onChange={onChange}
                value={title}
            />
            <button type="submit">Submit</button>
        </form>    
    );
}

TodoForm.propTypes = {
    title: PropTypes.string;
    setTodoTitle:
}
