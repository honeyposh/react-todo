import React from "react";
import classes from "./TodoList.module.css";
function TodoList({ list, setList }) {
  const deleteTodo = (index) => {
    // alert(index);
    let newList = list;
    newList.splice(index, 1);
    setList([...newList]);
  };
  return (
    <div className={classes.todo}>
      <h1>Tasks</h1>

      {list.map((todo, index) => {
        return (
          <div className={classes.list}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default TodoList;
