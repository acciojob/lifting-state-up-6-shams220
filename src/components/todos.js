import React, { useState } from "react";

const Todos = ({ tasks, setTodos }) => {
  // const [isComplete,setIsComplete] = useState(false);
  const clicked = (index) => {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, isComplete: true } : todo
      )
    );
  };

  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {tasks.map((value, index) => (
          <li key={tasks.id}>
            <p>{value.text}</p>
{
  !value.isComplete && 
            <button onClick={()=>clicked(index)}>complete</button>

}          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
