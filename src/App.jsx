import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompletedTodos } from "./components/IncompletedTodos";
import { CompletedTodos } from "./components/CompletedTodos";

export const App = () => {
  const [todoText, setTodoText] = useState();
  const [incompletedTodos, setIncompletedTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompletedTodos, todoText];
    setIncompletedTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompletedTodos];
    newTodos.splice(index, 1);
    setIncompletedTodos(newTodos);
  };

  const onClickComplete = (index) => {
    // Add into completed list
    const completedTaskText = incompletedTodos[index];
    const newCompletedTodos = [...completedTodos, completedTaskText];
    setCompletedTodos(newCompletedTodos);

    // Remove from incompleted list
    const newTodos = [...incompletedTodos];
    newTodos.splice(index, 1);
    setIncompletedTodos(newTodos);
  };

  const onClickRevert = (index) => {
    const revertTask = completedTodos[index];
    const newTodos = [...incompletedTodos, revertTask];
    setIncompletedTodos(newTodos);

    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(index, 1);
    setCompletedTodos(newCompletedTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompletedTodos.length >= 5}
      />
      {incompletedTodos.length >= 5 && (
        <p style={{ color: "red", fontSize: "20px" }}>You hit maximum todos!</p>
      )}
      <IncompletedTodos
        todos={incompletedTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompletedTodos todos={completedTodos} onClickRevert={onClickRevert} />
    </>
  );
};
