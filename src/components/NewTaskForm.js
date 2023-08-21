import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("")

  function handleTextChange(event) {
    setText(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (text && category) {
      const newTask = {
        text: text,
        category: category,
      }
      onTaskFormSubmit(newTask)

      setText("")
      setCategory("")
      console.log("this should clear the fields")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          <option>Select a Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
