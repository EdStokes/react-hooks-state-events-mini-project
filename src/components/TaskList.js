import React from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";


function TaskList({tasks, selectedCategory, setTasks}) {
  // console.log("received tasks: ", tasks)
  // console.log("number of tasks: ", tasks.length)


  const taskToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All" || selectedCategory === undefined) return true;
    return task.category === selectedCategory;
  });

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => 
      task.text !== taskId);
      setTasks(updatedTasks)
      


    }
  

  return (
    <div className="tasks">
      {taskToDisplay.map((task) => (
        <Task 
        key={task.text} 
        text={task.text} 
        category={task.category} 
        onDelete ={() => handleDeleteTask(task.text)}
        />
      ))}

    </div>
  );

}


export default TaskList;

