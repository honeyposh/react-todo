import classes from "./Input.module.css";
import React from "react";
function Input(props) {
  const [todo, setTodo] = React.useState("");
  function handleChange(event) {
    setTodo(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // setTodo(todo);
    console.log(todo);
    props.addList(todo);
    setTodo("");
  }
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What do you have planned?"
          onChange={handleChange}
          name="todo"
          value={todo}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}
export default Input;
