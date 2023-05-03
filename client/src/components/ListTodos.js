import React, { useState, useEffect } from "react";
import EditTodos from "./EditTodos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  // Delete todo function
  async function deleteTodo(id) {
    try {
      await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }
  // Get todos function
  async function getTodos() {
    const res = await fetch("http://localhost:4000/todos");

    const todoArray = await res.json();

    setTodos(todoArray);
  }
  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodos todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodos;
