import React from "react";
import Task from "../Task/Task";
import "./Column.css";

const Column = ({ tasks, moveTask }) => {
  return (
    <div className="column">
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          id={task.id}
          index={index}
          title={task.title}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
};

export default Column;




