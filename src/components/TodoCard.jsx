import React from "react";
import { useHistory } from "react-router-dom";

const TodoCard = ({ todo }) => {
  const { title, completed, id } = todo;

  const history = useHistory();

  return (
    <div
      style={{
        backgroundColor: "lightGrey",
        padding: "1rem",
        margin: "10px",
        width: "150px",
      }}
      onClick={() => history.push(`/todo/${id}`)}
    >
      <h4>{title}</h4>
      <h6>{`completed :  ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
