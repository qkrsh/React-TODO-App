import React from 'react'

export default function Lists({todoData, setTodoData}) {

    const btnStyle={
        color:"#fff",
        border: "none",
        padding:"5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float:"right"
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

      const handleClick = (id)=>{
        let newTodoData = todoData.filter(data=>data.id !==id);
        setTodoData(newTodoData);
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

  return (
    <div> 
    {todoData.map((data)=>(
        <div style={getStyle(data.completed)} key={data.id}>
      <input type="checkbox" defaultChecked={false} onChange={()=> handleCompleteChange(data.id)}/>
        {data.title}
      <button style={btnStyle} onClick={()=> handleClick(data.id)}>X</button>
        </div>
      ))}
      </div>
  )
}