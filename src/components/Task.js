import React from "react";

function Task({text, category ,onTaskDelete}) {
  function handleClick() {
    onTaskDelete(text)
  }

  return (
    <div className="task" onClick={handleClick}>
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
