// TaskList.js

import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
