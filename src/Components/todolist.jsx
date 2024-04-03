import React, { useState } from "react";
import Styles from './todolist.module.css';
export default function Todolist() {
  const [tasks, setTasks] = useState(["This is testing"]); // State variables for managing tasks and new task input......
  const [newtasks, setNewtasks] = useState("");

  function handleInputtasks(e) { // Function to update newtasks state as user types in the input field
    setNewtasks(e.target.value);
  }

  function addTasks(e) { //  Function to add a new task to the tasks array
    if (newtasks.trim() !== "") {  /// Check if the input is not empty
      setTasks(t => [...t, newtasks]);
      setNewtasks(""); // Clear the input field and update .
    }
  }

  function handleRemove(idx) {
    setTasks(tasks.filter((task, index) => index !== idx));
  }

  function handleUpward(idx) { // Function to move a task downwards in the tasks array
    if (idx > 0) {
      const updatedtasks = [...tasks];
      [updatedtasks[idx], updatedtasks[idx - 1]] = [updatedtasks[idx - 1], updatedtasks[idx]];
      setTasks(updatedtasks);
    }
  }

  function handleDownward(idx) { // Function to move a task downwards in the tasks array
    if (idx < tasks.length - 1) {
      const updatedtasks = [...tasks];
      [updatedtasks[idx], updatedtasks[idx + 1]] = [updatedtasks[idx + 1], updatedtasks[idx]];
      setTasks(updatedtasks); // Update the tasks array
    }
  }
  return (
    <div className={Styles.Todolist}>
      <div>
        <h1>To - Do - List</h1>

        <input
          type="text"
          onChange={handleInputtasks}
          placeholder="Enter Your Tasks.."
          value={newtasks}
        />
        <button onClick={addTasks} className={Styles.addBtn}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, idx) => (
          <li key={idx}>
            <span className={Styles.text}>{task}  </span>
            <button className={Styles.deleteBtn} onClick={() => handleRemove(idx)}>
              Delete
            </button>
            <button className={Styles.upBtn} onClick={() => handleUpward(idx)}>
              ☝️
            </button>
            <button className={Styles.downBtn} onClick={() => handleDownward(idx)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

