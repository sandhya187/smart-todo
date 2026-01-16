import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import AddTodo from "./Components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  // Load from LocalStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodos(savedTodos);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
      },
    ]);
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Smart Todo</h1>

      <AddTodo addTodo={addTodo} />

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default App;
