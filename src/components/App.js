
import React,{useState} from "react";
import './../styles/App.css';
import Todos from "./TodoList";

const App = () => {

  const [todos,setTodos] = useState([ 
    {id:1,text:"learn React",isComplete:false},
    {id:2,text:"Build a React App",isComplete:false},
    {id:3,text:"Deploy the React app",isComplete:false}
  ]);
 
  // console.log(todos)

const handleComplete = (index)=>{
  setTodos(prev=>prev.map((todo,i)=>
  i === index ? {...todo,isComplete:true} : todo
  ))
}
  return (
    <div className="parent">
      <h1>Parent Component</h1>
        {/* Do not remove the main div */}
   
<Todos todos={todos} handleComplete= {handleComplete} />
    </div>
  )
}

export default App
