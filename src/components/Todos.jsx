import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import TodoCard from "./TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState("");

  useEffect(() => {
    axios.get(`http://jsonplaceholder.typicode.com/todos`).then((res) => {
      const response = res.data;
      setTodos(response);
    });
  }, []);

  console.log(todos);

  return (
    <>
      {todos ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {todos.slice(0, 10).map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
