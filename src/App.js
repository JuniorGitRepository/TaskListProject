import "./styles.css";
import Navbar from "./componentes/NavBar/Navbar";
import TaskList from "./componentes/TaskList/TaskList";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Pendente" />
        <TaskList title="Fazendo" />
        <TaskList title="Completa" />
      </div>
    </div>
  );
}
