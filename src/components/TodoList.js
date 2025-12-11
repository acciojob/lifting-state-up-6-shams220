import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <p
              style={{
                textDecoration: todo.isComplete ? "line-through" : "none"
              }}
            >
              {todo.text}
            </p>

            {!todo.isComplete && (
              <button onClick={() => handleComplete(index)}>complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
