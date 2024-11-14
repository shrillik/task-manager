// TaskInput.js

import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1); // Default priority level

  const handleAddTask = () => {
    if (title.trim()) {
      addTask(title, priority);
      setTitle("");
      setPriority(1); // Reset priority
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(parseInt(e.target.value))}
      >
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
