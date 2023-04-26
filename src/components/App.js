import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleDelete(task) {
    const updatedTasks = tasks.filter((t) => t.text !== task);
    setTasks(updatedTasks)
  }

  const categorySort = [...tasks].filter((task) => {
    if (category === "All") {
      return tasks
    } else {
      return task.category === category
    }
  })

  function handleFormSubmit(taskData) {
    const updatedTasks = [...tasks, taskData]
    setTasks(updatedTasks)
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={setCategory} selectedCategory={category}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleFormSubmit}/>
      <TaskList tasks={categorySort} onTaskDelete={handleDelete}/>
    </div>
  );
}

export default App;
