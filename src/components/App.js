import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function handleSelectedCategory(category) {
    setSelectedCategory(category)
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])

  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectedCategory={handleSelectedCategory} />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={tasks}
        selectedCategory={selectedCategory}
        setTasks={setTasks} />

    </div>
  );
}

export default App;
