import React, { useState } from "react";

const url = "http://localhost:3000";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function addTodo() {
    const data = {
      title,
      description,
    };
    const response = await fetch(`${url}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setTitle("");
    setDescription("");

    if (response.success) {
      //   getTodos();
    }
  }

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="todo title"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={() => {
          addTodo();
        }}
      >
        Mark as Completed
      </button>
    </div>
  );
}

export default CreateTodo;
