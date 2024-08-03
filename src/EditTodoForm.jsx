const EditTodoForm = ({updateTodo, currentTodoText, setCurrentTodoText, setIsEditing}) => {
    return (
        <form onSubmit={updateTodo}>
        <input
          type="text"
          value={currentTodoText}
          onChange={(e) => setCurrentTodoText(e.target.value)}
          placeholder="Edit todos here"
        />
        <button type="submit">Save Todo</button>
        <button onClick={() => {
              setIsEditing(false);
              setCurrentTodoText("");
        }}>Cancel</button>
      </form>
    )
}

export default EditTodoForm;