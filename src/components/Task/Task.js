import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import "./Task.css";

const ItemType = "TASK";

const Task = ({ id, index, title, moveTask }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item) {
      if (item.index === index) return;

      moveTask(item.index, index);
      item.index = index;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="task"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <span>{title}</span>
    </div>
  );
};

export default Task;




