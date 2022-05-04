import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const App = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo)=>{
        setTodos([todo, ...todos])
    }
    useEffect(()=>{
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storageTodos) {
            setTodos(storageTodos)
        }
    },[])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);
    
    const toggleComplete = (id)=>{
        setTodos(todos.map(todo=>{
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        }))
    }
    const removeTodo = (id)=>{
        setTodos(todos.filter(todo=>todo.id !== id ))
    }
    
    return (
        <div className='App'>
            <header className='App-header'>
                <h2>Add Todo Tasks</h2>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
            </header>
        </div>
    );
}

export default App;
