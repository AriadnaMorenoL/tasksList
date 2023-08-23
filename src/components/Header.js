import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Header = ({ showCompleted, changeShowCompleted }) => {
  const toggleClompleted = () => {
    changeShowCompleted(!showCompleted);
  };

  return (
    <header className="header">
      <h1 className="header__title">Task List</h1>
      {showCompleted ? (
        <button className="header__button" onClick={toggleClompleted}>
          Don't show completed tasks
          <FontAwesomeIcon icon={faEyeSlash} className="header__icon-btn" />
        </button>
      ) : (
        <button className="header__button" onClick={toggleClompleted}>
          Show completed tasks
          <FontAwesomeIcon icon={faEye} className="header__icon-btn" />
        </button>
      )}
    </header>
  );
};

export default Header;
