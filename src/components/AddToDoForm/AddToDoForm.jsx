import { useCallback } from "react";

const handleAddToDo = useCallback(
  (item) => {
    console.log("addToDoForm test");

    const items = [
      {
        id: item.id,
        content: item.content,
        complete: item.complete,
      },
      ...todoItems,
    ];
    setTodoItems(items);
    saveTodoItemsToLocalStorage("item", items);
  },
  [todoItems]
);

export default handleAddToDo;
