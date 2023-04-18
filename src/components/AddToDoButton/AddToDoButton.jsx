import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const AddToDoButton = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const addToDoItem = (e) => {
    e.preventDefault();

    const item = {
      id: uuidv4(),
      content: inputValue,
      complete: false,
    };

    onAddToDo(item);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={addToDoItem}>
        <input
          onChange={handleChange}
          value={inputValue}
          placeholder="Podaj zadanie"
        />
        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

AddToDoButton.propTypes = {
  onAddToDo: PropTypes.func.isRequired,
};

export default AddToDoButton;
