import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todolist from "./AddTodo";
import { ReactComponent as CheckImg } from "./tick.svg";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([{ todo: "Hii There" }],);

  const [note, setNote] = useState("");


  const isActive = todo => {
    setTodos(
      todos.map(item => {
        if (item.todo === todo) {
          return { ...item, active: !item.active };
        }
        return item;
      })
    );
    // console.log(item);
  };


  const allActive = () => {
    setTodos(
      todos.map(item => {
        return { ...item, active: true };
      })
    );
  };

  //update note
  const updateNote = e => {
    setNote(e.target.value);
    console.log(e.target.value);
  };

  //add note
  const addNote = e => {
    let textNote = e.target.value;

    if (!textNote) {
      return;
    }

    textNote = textNote.trim();

    if (!textNote) {
      return;
    }

    if (e.key === "Enter") {
      setTodos(newTodos => [{ todo: note, active: false }, ...newTodos]);
      setNote("");
      console.log("enter press here! ");
    }
  };

  const delNote = del => {
    setTodos(todos.filter(item => item.todo !== del));
    console.log(del);
  };

  return (
    <div className="App">
      <div className="header">
        <CheckImg alt="Check All" onClick={allActive} />
        <input
          type="text"
          placeholder="Add new note"
          value={note}
          onChange={updateNote}
          onKeyPress={addNote}
        />
      </div>
      {todos.length > 0 &&
        todos.map((item, i) => (
          <Todolist
            key={i}
            value={todos}
            onChange={() => isActive(item.todo)}
            delNote={() => delNote(item.todo)}
            {...item}
          />
        ))}
      {todos.length === 0 && "No List Found"}
    </div>
  );
}

export default App;
