import React from "react";

interface TodoProps {
  todo: object;
}

function Todo({ todo }: TodoProps) {
  return (
    <div className="todos_wrapper">
      <div className="todo_left">
        <input className="todos_checkbox" type="checkbox" />
        <div className="todos_text">{todo}</div>
      </div>
      <button className="todo_delete">DEL</button>
    </div>
  );
}

export default Todo;
