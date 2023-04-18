import React from "react";

const Item = (task) => {
  return (
    <div>
      <h3>
        {task.id}, {task.content}, {task.complete}
      </h3>
      <button onClick={() => task.onDeleteToDo()}>Usun zadanie</button>
    </div>
  );
};

export default Item;
