import { useState } from 'react';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import todosData from './data';

import './App.css';

function App() {
  const [todos, setTodos] = useState(todosData);

  const handleDeleteTodoItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='container'>
      {/* @TODO: Use Class Component To Create NavBar and Add Todo Input */}
      <Header
        title='REACT TODO WORK APP'
        description='This is an application to track all my daily routine'
      />
      <TodoItems todos={todos} todoDeleteHandler={handleDeleteTodoItem} />
    </div>
  );
}

export default App;
