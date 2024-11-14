// TaskItem.js

import React from "react";

function TaskItem({ task, deleteTask, toggleComplete }) {
  const priorityClass =
    task.priority === 3 ? "high" : task.priority === 2 ? "medium" : "low";

  return (
    <li className={`task-item ${priorityClass}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
