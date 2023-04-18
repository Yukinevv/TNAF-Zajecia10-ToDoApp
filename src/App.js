import './App.css';
import AddToDoButton from './components/AddToDoButton/AddToDoButton';
import './components/ToDoList/ToDoList'
import './components/AddToDoButton/AddToDoButton'
import { getToDoItemsFromLocalStorage } from './services/getToDoItems';
import { saveTodoItemsToLocalStorage } from './services/saveToDoItems';
import { useCallback, useState } from 'react';
import AddToDoForm from './components/AddToDoForm/AddToDoForm'
import handleAddToDo from './components/AddToDoForm/AddToDoForm';
import ToDoList from './components/ToDoList/ToDoList';

const toDoItems = [
  {
    id: 1,
    content: "Test Content",
    complete: false
  },
  {
    id: 2,
    content: "Test Content 2",
    complete: false
  }
]

function App() {
  const [todoItems, setTodoItems] = useState(getToDoItemsFromLocalStorage('item') || []);

  const handleOnDelete = useCallback(
    (id) => {
      const newTodoItems = todoItems.filter((item) => item.id !== id);
      setTodoItems(newTodoItems);
      saveTodoItemsToLocalStorage("item", newTodoItems);
    },
    [todoItems]
  );

  return (
    <>
      <AddToDoForm onAddToDo={handleAddToDo} />
      <AddToDoButton />
      <ToDoList toDoItems={toDoItems} onDeleteToDo={handleOnDelete} />
    </>
  );
}

export default App;
