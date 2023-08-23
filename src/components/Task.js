import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, toggleCompleted, editTask, deleteTask }) => {
  const [editingTask, changeEditTask] = useState(false);
  const [newTask, changeNewTask] = useState(task.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, newTask);
    changeEditTask(false);
  };

  return (
    <li className="task-list__task">
      <FontAwesomeIcon
        icon={task.completed ? faCheckSquare : faSquare}
        className="task-list__icon task-list__icon-check "
        onClick={() => {
          toggleCompleted(task.id);
        }}
      />
      <div className="task-list__text">
        {editingTask ? (
          <form action="" className="form-edit-task" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-edit-task__input"
              value={newTask}
              onChange={(e) => changeNewTask(e.target.value)}
            />
            <button type="submit" className="form-edit-task__btn">
              Update
            </button>
          </form>
        ) : (
          task.text
        )}
      </div>
      <div className="task-list__container-btns">
        <FontAwesomeIcon
          icon={faEdit}
          className="task-list__icon task-list__icon-action "
          onClick={() => {
            changeEditTask(!editingTask);
          }}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="task-list__icon task-list__icon-action "
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      </div>
    </li>
  );
};

export default Task;
