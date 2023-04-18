import React from "react";
import PropTypes from "prop-types";
import Item from "../Item/Item";

const ToDoList = ({ toDoItems, onDeleteToDo }) => {

  return (
      <ul>
          {toDoItems.map(({id, content, complete}) => (
              <Item id={id} content={content} complete={complete} onDeleteToDo={onDeleteToDo}/>
          ))}
      </ul>
  );
}

ToDoList.propTypes = {
  toDoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
      onDeleteToDo: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default ToDoList;
