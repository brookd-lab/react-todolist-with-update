import { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./TodoItem.jsx";
import AddTodoForm from "./AddTodoForm.jsx";
import EditTodoForm from "./EditTodoForm.jsx";

function App() {
  // {id: 1, text: "First Todo" }
  const [todos, setTodos] = useState([]);
  const [currentTodoText, setCurrentTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);

  useEffect(() => {
    let todosFromLocalStorage = JSON.parse(
      window.localStorage.getItem("todos")
    );

    if (todosFromLocalStorage) {
      setTodos(todosFromLocalStorage);
    }
    // else {
    //   setTodos([]);
    // }
  }, []);

  function addTodo(e) {
    e.preventDefault();
    let id = new Date().getTime();
    let todoText = currentTodoText;
    if (todoText === "") {
      alert("Please add some text");
      return;
    }
    // setTodos([...todos, { id: id, text: todoText }]);
    setTodos((prevTodos) => {
      let updatedTodos = [...todos, { id: id, text: todoText }];
      window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });

    setCurrentTodoText("");
  }

  function deleteTodo(todoItem) {
    var updatedTodos = todos.filter((item) => item.id !== todoItem.id);
    setTodos(updatedTodos);
    // setTodos(prevTodos => {
    //   var updatedTodos = todos.filter(item => item.id !== todoItem.id);
    //   window.localStorage.setItem('todos', JSON.stringify(updatedTodos));
    //   return updatedTodos;
    // });
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function handleEditTodo(todoItem) {
    setIsEditing(true);
    setCurrentTodoText(todoItem.text);
    setCurrentTodoIndex(todoItem.id);
  }

  function updateTodo(e) {
    e.preventDefault();
    let updatedToDoText = currentTodoText;
    let updatedTodos = todos.map((item) => {
      if (item.id === currentTodoIndex) {
        item.text = updatedToDoText;
      }
      return item;
    });
    setTodos(updatedTodos);
    window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setIsEditing(false);
    setCurrentTodoText("");

    // setTodos(prevTodo => {
    //   var todo = todos.find(todoItem => todoItem.id === currentTodoIndex);
    //   todo.text = currentTodoText;
    //   return todo;
    // });
  }

  return (
    <>
      <div>
        <h1>React Todo App with Edit and LocalStorage</h1>

        {!isEditing && (
          <AddTodoForm
            addTodo={addTodo}
            currentTodoText={currentTodoText}
            setCurrentTodoText={setCurrentTodoText}
          />
        )}

        {isEditing && (
          <EditTodoForm
            updateTodo={updateTodo}            
            currentTodoText={currentTodoText}
            setCurrentTodoText={setCurrentTodoText}
            setIsEditing={setIsEditing}
          />
        )}

        {todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              deleteTodo={deleteTodo}
              handleEditTodo={handleEditTodo}
              todoItem={item}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
