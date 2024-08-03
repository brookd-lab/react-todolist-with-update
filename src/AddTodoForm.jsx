const AddTodoForm = ({addTodo, currentTodoText, setCurrentTodoText}) => {
    return (
        <form onSubmit={addTodo}>
        <input
          type="text"
          value={currentTodoText}
          onChange={(e) => setCurrentTodoText(e.target.value)}
          placeholder="Enter todos here"
        />
        <button type="submit">Add Todo</button>
      </form>
    )
}

export default AddTodoForm;