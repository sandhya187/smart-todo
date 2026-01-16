import React from "react";

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
