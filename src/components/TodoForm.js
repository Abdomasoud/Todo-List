import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../module/TodoForm.module.css'

function TodoForm({addTodo}) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    const handleTaskInputChange= (e)=>{
        setTodo({...todo, task: e.target.value})
    }

    const handleSubmit = (e, index)=>{
        e.preventDefault()
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task: "" });
        }
    }

  return (
      <form onSubmit={handleSubmit}>
          <input name='task' type="text" value={todo.task} onChange={handleTaskInputChange}/>
          <button type='submit'>Add Todo</button>
      </form>
  )
}

export default TodoForm