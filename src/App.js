import React, { useState } from "react";
import "./styles/styles.css";
import "./App.css";
import TodoList from "./components/TodoList";
export default function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}
