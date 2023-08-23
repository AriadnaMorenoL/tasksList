import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";

const App = () => {
  //*Get saved task from localStorage
  const savedTask = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  //*Set task status
  const [tasks, changeTask] = useState(savedTask);

  //*Saved status in localStorage
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  //*

  let configShowCompleted = "";
  if (localStorage.getItem("showCompleted") === null) {
    configShowCompleted = true;
  } else {
    configShowCompleted = localStorage.getItem("showCompleted") === true;
  }

  //* showCompleted status
  const [showCompleted, changeShowCompleted] = useState(configShowCompleted);

  useEffect(() => {
    localStorage.setItem("showCompleted", showCompleted.toString());
  }, [showCompleted]);

  return (
    <div className="container">
      <Header
        showCompleted={showCompleted}
        changeShowCompleted={changeShowCompleted}
      />
      <TasksForm tasks={tasks} changeTask={changeTask} />
      <TasksList
        tasks={tasks}
        changeTask={changeTask}
        showCompleted={showCompleted}
      />
    </div>
  );
};

export default App;
