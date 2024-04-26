import React from "react";

function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h3>{todo.title}</h3>
            <h4>{todo.description}</h4>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
