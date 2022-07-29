import React, { useState, useEffect } from 'react';
import './App.css';
//importing component
import Form from './component/Form';
import TodoList from './component/TodoList';

export default function App() {


  //state stuff
  const [inputText, setInputext] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //UseEffect 
  useEffect(() => {
    filteredHandler();

  }, [todos, status]);
  useEffect(() => {
    getLocalTodos();
  }, []
  )
  useEffect(() => {
    saveLocalTodos();
  }, []
  )
  //functions

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }

  };
  //save to local storage

  const saveLocalTodos = () => {

    localStorage.setItem("todos", JSON.stringify(todos));

  };
  const getLocalTodos = () => {

    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos}
        setInputext={setInputext}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div >
  );
};


