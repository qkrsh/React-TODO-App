import React from "react";
import { useState} from 'react';
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

export default function App(){

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      let newTodo ={
        id:Date.now(),
        title:value,
        completed:false,
      };
      setTodoData((prev)=>[...prev, newTodo]);
      setValue("");
    }

    const handleRemoveClick=()=>{
      setTodoData([]);
        }

  return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일목록</h1>
            <button onClick={handleRemoveClick} style={{height:"50px"}}>Delete All</button>
          </div>
         <Lists todoData={todoData} setTodoData={setTodoData} />
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        </div>
      </div>
  )
}