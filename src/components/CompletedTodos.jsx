import React from "react";

export const CompletedTodos = (props) => {
  const { todos, onClickRevert } = props;
  return (
    <div className="complete-area">
      <p className="title">Completed Tasks</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickRevert(index)}>Revert</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
