// TaskApp.js

import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import SearchBar from "./SearchBar";
import "./styles.css";

function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("priority");
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, priority) => {
    const newTask = { id: Date.now(), title, completed: false, priority };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks based on search term and sort them by priority or title
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "priority") {
        return a.priority - b.priority;
      } else if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      } else {
        return 0;
      }
    });

  return (
    <div className="task-app">
      <h1>Task Manager</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TaskInput addTask={addTask} />
      <div className="sort-controls">
        <label>Sort by: </label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default TaskApp;
