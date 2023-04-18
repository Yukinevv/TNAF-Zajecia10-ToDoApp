import './App.css';
import AddToDoButton from './components/AddToDoButton/AddToDoButton';
import './components/ToDoList/ToDoList'
import './components/AddToDoButton/AddToDoButton'
import { getToDoItemsFromLocalStorage } from './services/getToDoItems';
import { saveTodoItemsToLocalStorage } from './services/saveToDoItems';

const items = [
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
  return (
    <div>
      <AddToDoButton />
      <ToDoList toDoItems={items} />
    </div>
  );
}

export default App;
