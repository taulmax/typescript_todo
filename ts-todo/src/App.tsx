import React from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <div className="wrapper">
      <div className="todo_wrapper">
        <div className="todo_header">
          <input className="todo_input" type="text" placeholder="Input your todo!" />
          <button className="todo_add">ADD</button>
        </div>
        <div className="todo_todos">
          <Todo todo={{ text: "test", complete: true }} />
        </div>
      </div>
    </div>
  );
}

export default App;
