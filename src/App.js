import React from "react";
import { useState} from 'react';
import "./App.css";
export default function App(){

    const [todoData, setTodoData] = useState([]);
    const [value, setValue] = useState("");


    const btnStyle={
      color:"#fff",
      border: "none",
      padding:"5px 9px",
      borderRadius: "50%",
      cursor: "pointer",
      float:"right"
    }

    const getStyle = (completed)=>{
      return{
        padding:"10px",
        borderBottom:"1px #ccc dotted",
        textDecoration: completed ? "line-through" : "none",
        marginTop:"5px",
        marginBottom:"5px"
      }
    }

    const handleClick = (id)=>{
      let newTodoData = todoData.filter(data=>data.id !==id);
      setTodoData(newTodoData);
    }    

    const handleChange =(e)=>{
      setValue(e.target.value);
    }

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

    const handleCompleteChange=(id)=>{
      let newTodoData = todoData.map(data=>{
        if(data.id ===id){
          data.completed =!data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
    }

  return (
      <div classsName="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일목록</h1>
          </div>
          {todoData.map((data)=>(
            <div style={getStyle(data.completed)} key={data.id}>
          <input type="checkbox" defaultChecked={false} onChange={()=> handleCompleteChange(data.id)}/>
            {data.title}
          <button style={btnStyle} onClick={()=> handleClick(data.id)}>X</button>
            </div>
          ))}
          
        <form style={{display:'flex', marginTop:'15px'}} onSubmit={handleSubmit}>
          <input type="text" name="value" style={{flex:'10', padding:'5px',}}
           placeholder="해야 할 일을 입력하세요."
           value={value}
           onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{flex:'1'}}
          />
        </form>
        </div>
      </div>
  )
}