import React, { useState, useEffect } from "react";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  // load from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text }
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ width: "600px", margin: "40px auto" }}>
      <h1>Smart Todo</h1>

      {/* 👇 INPUT */}
      <AddTodo addTodo={addTodo} />

      {/* 👇 LIST */}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default App;
