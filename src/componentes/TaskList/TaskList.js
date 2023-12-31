import React, {useState} from "react";
import "./TaskList.css";
import PropTypes from "prop-types";

export default function TaskList({ title }) {
  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount((currentCount)=>{
      return currentCount + 1;
    });
  }

  return (
    <div className="tasklist">
      <span className="title">{title}</span>
      <div className="content">{count}
        <button onClick={increment}>
          incrementar
        </button>  
      </div>
    </div>
  );
}
TaskList.propTypes = {
  title: PropTypes.string.isRequired
};
