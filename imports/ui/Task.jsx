import React from "react";

const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readonly
      />
      {task.text} &nbsp;
      <button onClick={() => onDeleteClick(task)}>&times;</button>
    </li>
  );
};

export default Task;
