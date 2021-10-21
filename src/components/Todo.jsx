import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const Todo = () => {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState("");

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/todos/${id}`) //
      .then((res) => {
        const responseTodo = res.data;
        setTodoDetails(responseTodo);
      });
  }, []);

  const { id: todoId, userId, title, completed } = todoDetails || {};

  return (
    <div>
      {todoDetails ? (
        <div>
          <h1>{`Todo ID is : ${todoId}`}</h1>
          <h1>{`User ID is : ${userId}`}</h1>
          <h1>{`Title is : ${title}`}</h1>
          <h1>{`Completed is : ${completed}`}</h1>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todo;
