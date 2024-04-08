import React from "react";
import "./style.css";
import React,{useState} from 'react';

function TodoApp(){
  const [todos,setTodos]=useState([]);
  const [inputValue, setInputValue]= useState('');
  const handleInputChange=(e)=>{
setInputValue(e.target.value);
};
const handleAddTodo=()=>{
  if (inputValue.trim() !==""){
setTodos([...todos,inputValue]);
setInputValue('');
  }
  };
  return(
    <div>
<h1> todo list</h1>
<input type='text'
value={inputValue}
onChange={handleInputChange}
placeholder="enter todo"/>
<button onClick={handleAddTodo}>add todo</button>
<ul> {todos.map((todo,index)=>( <li key={index}>
      {todo}
      </li>
      ))}
      
      </ul>
  


   </div>
   
   )

}
export default TodoApp;