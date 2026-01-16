import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const TodoList = () => {
  // Step 1: localStorage se todos load karo
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Step 2: todos update hone par localStorage me save karo
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Smart Todo App</h2>
      <AddTodo addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
