
import React,{useState} from "react";
import './../styles/App.css';
import Todos from "./todos";

const App = () => {

  const [todos,setTodos] = useState([ 
    {id:1,text:"learn React",isComplete:false},
    {id:2,text:"Build a React App",isComplete:false},
    {id:3,text:"Deploy the React app",isComplete:false}
  ]);
 
  console.log(todos)

  return (
    <div>
      <h1>Parent Component</h1>
        {/* Do not remove the main div */}
   
<Todos tasks={todos} setTodos= {setTodos} />
    </div>
  )
}

export default App
