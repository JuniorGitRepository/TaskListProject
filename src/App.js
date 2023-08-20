import React,{useState} from "react";
import "./styles.css";
import Navbar from "./componentes/NavBar/Navbar";
import TaskList from "./componentes/TaskList/TaskList";

const task = {
  id:0,
  title:'Nova Tarefa',
  state:'pendente'
}

let idAcc = 0;
const generateId = () =>{
  idAcc = idAcc + 1;
  return idAcc;
}

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) =>{
    console.log("função sendo chamada em App")
    const newTask = {
      id:generateId(),
      title,
      state
    };

    setTasks((listTasks)=>{
        return[...listTasks,newTask];
    });
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pendente" onAddTask={addTask} />
        
      </div>
    </div>
  );
}
