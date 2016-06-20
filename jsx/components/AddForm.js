import React from 'react';

const AddTodoForm = ({addTodo}) => {
    let input;

    return (
    <form onSubmit={e => {
    e.preventDefault();
    addTodo(input.value);
    input.value = '';
    }
    }>
        <input ref={node => {
        input = node
        }} type="text"/>
        <input type="submit" value="ajouter"/>
    </form>
    )
};

export default AddTodoForm;