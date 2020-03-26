import React, { useState } from "react";
import Todo from "./Todo";
import "../styles/Todolist.css";
import "../styles/Todo.css";

export default function TodoList() {
  const [arrayOfData, setData] = useState([
    {
      value: "Finish group work assignment",
      date: new Date().toLocaleDateString(),
      description: "Work on UI and do data manipulation",
      isDone: false
    },
    {
      value: "Buy toilet paper",
      date: new Date().toLocaleDateString(),
      description: "Try at least 3 stores...Germans love to eat toilet paper!",
      isDone: false
    },
    {
      value: "Take the dog to the vet",
      date: new Date().toLocaleDateString(),
      description: "",
      isDone: false
    }
  ]);

  const [newTitle, setTitle] = useState('');
  const [newDescription, setDescription] = useState('');

  function handleNewTitle (event) {
    setTitle(event.target.value);
  }
  function handleNewDescription (event) {
    setDescription(event.target.value);
  }

  function openTodoModal() {
    document.getElementById('addTodo').classList.add('enabled');
  }

  function cancelTodo(event) {
    event.preventDefault();
    document.getElementById('addTodo').classList.remove('enabled');
  }

  function addTodo (event) {
    event.preventDefault();
    console.log('Add new Todo');
    setData([...arrayOfData,
      {
        value: newTitle,
        date: new Date().toLocaleDateString(),
        description: newDescription,
        isDone: false
      }]);
      console.log(arrayOfData);
    document.getElementById('addTodo').classList.remove('enabled');
  }

  const getToDoList = arrayOfData.map((element, index) => {
    // Map returns an array at then
    return (
      <Todo
        key={index}
        value={element.value}
        id={index}
        dateProperty={element.date}
        descriptionProperty={element.description}
        doneProperty={element.isDone}
      />
    );
  });

  return (
    <div>
      <div className="header-menu-wrapper">
        <div className="header-menu">
          <h1>To Do List</h1>
          <button
            onClick={openTodoModal}
            type="button"
            className="btn btn-secondary button-todo"
          ><i className="fa fa-plus"></i>
            Add new To Do
          </button>
        </div>
      </div>
      <div id="todoList">{getToDoList}</div>
      <div id="addTodo">
        <form onSubmit={addTodo}>
          <button id="cancelButton" onClick={cancelTodo}><i className="fa fa-remove fa-2x"></i></button>
          <input type="text" required placeholder="Todo Title" value={newTitle} onChange={handleNewTitle} />
          <textarea placeholder="Todo Desciption" value={newDescription} onChange={handleNewDescription} />
          <button className="btn btn-lg btn-success" type="submit">Add Todo</button>
        </form>
      </div>
    </div>
  );
}
