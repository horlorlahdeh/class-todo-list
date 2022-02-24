import React, { Fragment } from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ todos, todoDeleteHandler }) => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-8 offset-md-1'>
          <div className='card py-2 px-3'>
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                deleteTodo={todoDeleteHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TodoItems;
