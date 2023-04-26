import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("");
  const [cat, setCat] = useState("Code")

  function handleChange(event) {
    event.preventDefault()
    onTaskFormSubmit({
      text: details,
      category: cat
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleChange}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e) => setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={cat} onChange={(e) => setCat(e.target.value)}>
          {categories.map((category) => {
            if (category !== "All") {
              return <option key={category}>{category}</option>
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
