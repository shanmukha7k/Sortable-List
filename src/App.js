import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./components/Column/Column";
import Input from "./components/Input/Input";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "First Sorted list" },
    { id: 2, title: "Second Sorted list" },
    { id: 3, title: "Third Sorted List" },
  ]);

  const [order, setOrder] = useState(tasks.map(task => task.id));

  useEffect(() => {
    setOrder(tasks.map(task => task.id));
  }, [tasks]);

  const addTask = (title) => {
    setTasks((tasks) => [
      ...tasks,
      { id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1, title }
    ]);
  };

  const moveTask = (dragIndex, hoverIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(dragIndex, 1);
    updatedTasks.splice(hoverIndex, 0, movedTask);
    setTasks(updatedTasks);

    // Update the order of task IDs
    const updatedOrder = [...order];
    const [movedId] = updatedOrder.splice(dragIndex, 1);
    updatedOrder.splice(hoverIndex, 0, movedId);
    setOrder(updatedOrder);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1> Sortable List✅</h1>
        <Input onSubmit={addTask} />
        <Column tasks={tasks} moveTask={moveTask} />
        <div className="task-count">
          {tasks.length} task{tasks.length !== 1 ? "s" : ""}
        </div>
        <div className="task-order">
          Current Order: {order.join(", ")}
        </div>
      </div>
    </DndProvider>
  );
}





