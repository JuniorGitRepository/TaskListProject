import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
export default function TaskList({ title,taskState, onAddTask, tasks, onTaskUpdate}) {
  const addTask = () => {
    onAddTask("Nova Tarefa",taskState);
  };

  return (
    <div className="tasklist">
      <span className="title">{title}</span>
      <div className="content">
        {tasks.map((task) =>{
          return <TaskItem 
                    key={task.id}
                    id={task.id} 
                    title={task.title}
                    taskState={task.state}
                    onTaskUpdate={onTaskUpdate}/>
        })}
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    </div>
  );
}
TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks:PropTypes.array.isRequired
};
