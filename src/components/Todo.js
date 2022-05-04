import React from 'react'
import '../module/Todo.module.css'

function Todo({todo,toggleComplete,removeTodo}) {

  const handleCheckboxClick = ()=>{
    toggleComplete(todo.id)
  }
  const handleRemoveClick = ()=>{
    removeTodo(todo.id)
  }

  return (
    <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
        <input type='checkbox' onClick={handleCheckboxClick}
           style={{
             width: '25px',
             height: '25px',
             marginRight: '10px'
           }}
        />
        <li style={{ textDecoration: todo.completed ? "line-through" : null, listStyle: 'none', color: 'White', fontFamily: " -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", fontSize: '25px',marginRight: '10px'}}>{todo.task}</li>
        <button onClick={handleRemoveClick} style={{
          width: '30px',
          height: '30px',
          padding: '0px',
          margin: '0px',
          borderRadius: '5px'
        }}>X</button>
    </div>
  )
}

export default Todo