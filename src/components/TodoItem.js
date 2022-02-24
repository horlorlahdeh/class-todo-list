import React from 'react';

const TodoItem = ({ todo: { id, task, complete }, deleteTodo }) => {
  return (
    <div className='d-flex justify-content-between todo-item mb-1 border p-2'>
      <h1>{task}</h1>
      <button className='btn btn-sm btn-danger' onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
