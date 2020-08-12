import React, { useState } from "react";
import "../styles/Todo.css";
import TodoList from "./TodoList";

export default function Todo({
  value,
  id,
  dateProperty,
  descriptionProperty,
  doneProperty,
  deleteTodo
}) {
  const [todoDetails, setDetails] = useState({
    todoValue: value,
    todoDescription: descriptionProperty
  });

  const [editMode, setEdit] = useState(
    {
      title: false,
      descr: false
    }
  );
  const [editIcon, setEditIcon] = useState(
    {
      title: "fa fa-pencil fa-fw",
      descr: "fa fa-pencil fa-fw"
    }
  );

  const [doneState, setDone] = useState(doneProperty);

  function toggleEdit(e, id, elT) {
    e.preventDefault();

    let editModeState = {...editMode};
    let editIconState = {...editIcon};

    editModeState[elT] = !editMode[elT];
    editIconState[elT] = editMode[elT] ? "fa fa-pencil fa-fw" : "fa fa-check fa-fw";

    setEdit(editModeState);
    setEditIcon(editIconState)

    console.log(editMode);
    console.log(editIcon);

    const valueProp = document.getElementById(id);
    valueProp.disabled = editMode[elT];
  }
  function editTodo(value, element) {
    console.log("Clicked on edit");
    if (value.trim() === '') console.log("Empty title not allowed");
    setDetails({ element: value.trim() });
    console.log(todoDetails);
  }
  function markDone() {
    doneState ? setDone(false) : setDone(true);
    // alert("Clicked on Mark Done: " + value + " " + doneState);
  }

  return (
    <div id={"todo" + id} className="todo-wrapper">
      <div className="todo-title-date">
        <input type="checkbox" id={"check" + id} onClick={markDone} />
        <label htmlFor={"check" + id} />
        <h5>
        <form onSubmit={el => toggleEdit(el, "title" +
         id, 'title')}>
          <input
            type="text"
            defaultValue={todoDetails.todoValue}
            id={"title" + id}
            className={doneState ? "done" : ""}
            onChange={el => editTodo(el.target.value, 'todoValue')}
            disabled required
          />
          <button type="submit">
          <i className={editIcon.title} />
          </button>
        </form>
        </h5>
        <span>Created on: {dateProperty}</span>
      </div>
      <div className="description-wrapper">
        <div className="todo-description">
          <form onSubmit={el => toggleEdit(el, "description" + id, 'descr')}>
          <input
            type="text"
            defaultValue={todoDetails.todoDescription}
            id={"description" + id}
            className={doneState ? "done" : ""}
            onChange={el => editTodo(el.target.value, 'todoDescription')}
            disabled
          />
          <button type="submit">
            <i className={editIcon.descr} />
           </button>
          </form>
        </div>
        <div className="function-buttons">
          <button
            onClick={() => {deleteTodo(id)}}
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
