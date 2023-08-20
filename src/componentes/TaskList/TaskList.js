import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask}) {
  const addTask = () => {
    console.log("chamada dentro do tasklist")
    onAddTask("Nova Tarefa","Pendente");
  };

  return (
    <div className="tasklist">
      <span className="title">{title}</span>
      <div className="content">
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    </div>
  );
}
TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired
};
