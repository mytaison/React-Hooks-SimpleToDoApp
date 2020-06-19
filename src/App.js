import React, { useState } from 'react';
import './App.css';

//functional Component
function Todo({todo,index,completeTodo,removeTodo}){
  return (
    <div style={{textDecoration: todo.isCompleted? 'line-through':''}} className="todo">
      {todo.text}
      <div>
        <button onClick={()=>completeTodo(index)}>Complete</button>
        <button onClick={()=>removeTodo(index)}>Remove</button>
      </div>
    </div>
  )
}
function TodoForm({addTodo}){
  const [value,setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add To-Do" onChange={e => setValue(e.target.value)}></input>
    </form>
  )
}
function App() {

  const[todos,setTodos] = useState([
    {
      text: "Learning React",
      isCompleted: false
    }
  ]);    

  const addTodo = text => {
    const newToDos = [...todos, { text }];
    setTodos(newToDos);
  }

  const completeTodo = index =>{
    const newToDos = [...todos];
    newToDos[index].isCompleted = true;
    setTodos(newToDos);
  }

  const removeTodo = index =>{
    const newToDos = [...todos];
    newToDos.splice(index,1);
    setTodos(newToDos);
  }

  // To Do 
  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo , index) =>  
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
          )
        }
        <TodoForm addTodo={addTodo} /> 
      </div>
    </div>
  );
}

export default App;
