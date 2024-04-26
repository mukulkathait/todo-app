import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

const url = "http://localhost:3000";

function App() {
  const [todos, setTodos] = useState([]);
  // const [newTodoTitle, setNewTodoTitle] = useState("");
  // const [newTodoDescription, setNewTodoDescription] = useState("");

  useEffect(() => {
    setInterval(getTodos, 10000);
    // getTodos();
  }, []);

  async function getTodos() {
    let response = await fetch(`${url}/todos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    response = await response.json();

    if (response.success) {
      const data = response.message;
      setTodos(data);
    }
  }

  /* async function addTodo() {
    console.log("INSIDE addTodos()");
    const data = {
      title: newTodoTitle,
      description: newTodoDescription,
    };
    const response = await fetch(`${url}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setNewTodoTitle("");
    setNewTodoDescription("");

    if (response.success) {
      getTodos();
    }
  } */

  return (
    <>
      {/* <AddTodo
        newTodoTitle={newTodoTitle}
        setNewTodoTitle={setNewTodoTitle}
        newTodoDescription={newTodoDescription}
        setNewTodoDescription={setNewTodoDescription}
        addTodo={addTodo}
      />

      {todos.map((todo) => {
        return (
          <Todos
            key={todo._id}
            title={todo.title}
            description={todo.description}
          />
        );
      })} */}

      <CreateTodo />
      <Todos todos={todos} />
    </>
  );

  /*   function AddTodo({
    newTodoTitle,
    setNewTodoTitle,
    newTodoDescription,
    setNewTodoDescription,
    addTodo,
  }) {
    return (
      <>
        <input
          type="text"
          placeholder="todo title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="todo description"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />{" "}
        <br />
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  }

  function Todos(props) {
    return (
      <>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
        <button>Mark as Done</button>
      </>
    );
  } */
}

export default App;
