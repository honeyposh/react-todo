import Header from "./components/Header";
import React from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
function App() {
  const [list, setList] = React.useState([]);

  function addList(todo) {
    setList([...list, todo]);
    console.log(todo);
  }

  return (
    <div>
      <Header />
      <Input addList={addList} />
      <TodoList list={list} setList={setList} />
    </div>
  );
}
export default App;
