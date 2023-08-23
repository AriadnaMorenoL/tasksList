import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const TasksForm = ({ tasks, changeTask }) => {
  const [inputTask, changeInputTask] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    changeInputTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeTask([
      ...tasks,
      {
        id: uuidv4(),
        text: inputTask,
        completed: false,
      },
    ]);
    changeInputTask("");
  };
  return (
    <form action="" className="form-task" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-task__input"
        placeholder="Type a Task"
        value={inputTask}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="form-task__btn">
        <FontAwesomeIcon icon={faPlusSquare} className="form-task__icon-btn" />
      </button>
    </form>
  );
};

export default TasksForm;
