import React from "react";
import PropTypes from "prop-types";

const ToDoList = ({ toDoItems }) => {
  return (
    <ul>
      {toDoItems.map(({ id, content, complete }) => (
        //<Item id={id} content={content} complete={complete} />
        <div></div>
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  toDoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ToDoList;
