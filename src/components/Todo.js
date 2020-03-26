import React, { useState } from "react";
import "../styles/Todo.css";
import "../Fork-Awesome-1.1.7/css/fork-awesome.min.css";
import TodoList from "./TodoList";

export default function Todo({
  value,
  id,
  dateProperty,
  descriptionProperty,
  doneProperty
}) {
  const [todoDetails, setDetails] = useState({
    todoValue: value,
    todoDescription: descriptionProperty
  });

  const [editMode, setEdit] = useState(false);
  const [editIcon, setEditIcon] = useState("fa fa-pencil fa-fw");

  const [doneState, setDone] = useState(doneProperty);

  function toggleEdit(el, id) {
    setEdit(editMode ? false : true);
    setEditIcon(editMode ? "fa fa-pencil fa-fw" : "fa fa-check fa-fw");

    const valueProp = document.getElementById(id);
    valueProp.disabled = editMode;
  }
  function editTodo(value, element) {
    console.log("Clicked on edit");
    setDetails({ element: value.trim() });
    console.log(todoDetails);
  }
  function markDone() {
    doneState ? setDone(false) : setDone(true);
    // alert("Clicked on Mark Done: " + value + " " + doneState);
  }

  function deleteTodo() {
    // arrayOfData.splice(index, 1);
  }
  return (
    <div id={"todo" + id} className="todo-wrapper">
      <div className="todo-title-date">
        <input type="checkbox" id={"check" + id} onClick={markDone} />
        <label htmlFor={"check" + id} />
        <h5>
          <input
            type="text"
            defaultValue={todoDetails.todoValue} 
            id={"title" + id}
            className={doneState ? "done" : ""}
            onChange={el => editTodo(el.target.value, 'todoValue')}
            disabled 
          />
          <i
            className={editIcon}
            onClick={el => toggleEdit(el.target, "title" + id)}
          />
        </h5>
        <span>Created on: {dateProperty}</span>
      </div>
      <div className="description-wrapper">
        <div className="todo-description">
          <input
            type="text"
            defaultValue={todoDetails.todoDescription}
            id={"description" + id}
            className={doneState ? "done" : ""}
            onChange={el => editTodo(el.target.value, 'todoDescription')}
            disabled
          />
          <i
            className={editIcon}
            onClick={el => toggleEdit(el.target, "description" + id)}
          />
        </div>
        <div className="function-buttons">
          <button
            onClick={deleteTodo}
            type="button"
            className="btn btn-secondary button-todo btn btn-danger"
          >
            <i className="fa fa-trash-o fa-lg" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}
