import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", marginBottom: "20px" }}>
  <input
    type="text"
    value={title}
    placeholder="Enter todo"
    onChange={(e) => setTitle(e.target.value)}
    style={{
      flex: 1,
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px"
    }}
  />
  <button
    type="submit"
    style={{
      padding: "10px 15px",
      marginLeft: "10px",
      borderRadius: "4px",
      border: "none",
      background: "#4CAF50",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    Add
  </button>
</form>

  );
};

export default AddTodo;
