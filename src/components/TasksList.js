import React from "react";
import Task from "./Task";

const TasksList = ({ tasks, changeTask, showCompleted }) => {
  const toggleCompleted = (id) => {
    changeTask(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const editTask = (id, newText) => {
    changeTask(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    changeTask(
      tasks.filter((task) => {
        if (task.id !== id) {
          return task;
        }
        return;
      })
    );
  };

  return (
    <ul className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => {
          if (showCompleted) {
            return (
              <Task
                key={task.id}
                task={task}
                toggleCompleted={toggleCompleted}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            );
          } else if (!task.completed) {
            return (
              <Task
                key={task.id}
                task={task}
                toggleCompleted={toggleCompleted}
                editTask={editTask}
                deleteTask={deleteTask}
              />
            );
          }
          return;
        })
      ) : (
        <div className="task-list__message"> ~ No tasks added ~ </div>
      )}
    </ul>
  );
};

export default TasksList;
