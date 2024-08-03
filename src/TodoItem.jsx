import React from "react";

function TodoItem({ todoItem, deleteTodo, handleEditTodo }) {
  return (
    <div>
      <div key={todoItem.id} className="todoWrapper">
        {todoItem.text}
        <button onClick={() => deleteTodo(todoItem)}>Delete todo</button>
        <button onClick={() => handleEditTodo(todoItem)}>Edit todo</button>
      </div>
    </div>
  );
}

export default TodoItem;
