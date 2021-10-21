import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  console.log(todoDetails);

  return <div>{`This is the Todo and Todo ID is : ${id}`}</div>;
};

export default Todo;
