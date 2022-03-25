import React,{Component} from "react";
import './Todo.css'

function Todo ({user, name, done, description}){
  return (
    <>
          <div id="asd">
            <h3 className="container">name: {name}</h3>
            <h4>done: {done? "finished": "ongoing"}</h4>
            <p>description: {description}</p>
            <h2>{user}</h2>
            </div>
    </>
)

  }
  
  export default Todo;
