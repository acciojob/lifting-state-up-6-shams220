import React, { useState } from "react";

const Todos = ({ todos, handleComplete }) => {
  // const [isComplete,setIsComplete] = useState(false);
  

  return (
    <div >
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={todos.id}>
            <p>{todo.text}</p>
{
  !todo.isComplete && 
            <button onClick={()=>handleComplete(index)}>complete</button>

}          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
