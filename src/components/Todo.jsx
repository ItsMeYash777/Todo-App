import React, { useState } from "react";
import "../components/Todo.css";


const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    if(todo.trim()===""){
      return
    }
    setTodos([...todos, todo]);
    setTodo("");
  }

  function handleDelete(index){
    const newTodos = todos.filter((_, i)=> i !== index)
    setTodos(newTodos)
  }

  return (
    <div className="todo-container">
      <video autoPlay loop muted className="todo-video">
        <source src="./video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col items-center todo-content">
        <h1 className="text-3xl font-bold my-4 ">Todo-App</h1>

        <form
          className="bg-slate p-4 rounded-lg shadow-lg"
          onSubmit={handleChange}
        >
          <input
            className="border-white my-3 mx-4 p-2 rounded"
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            value={todo}
            placeholder="Add a new todo"
          />
          <button className="text-2xl mx-3 border-2 px-3 text-white rounded-xl my-3 cursor-pointer bg-black hover:text-slate-400 ...">
            Add
          </button>
        </form>

        <div className="bg-white p-4 mt-4 rounded-lg shadow-lg w-full">
          {todos.map((item, index) => (
            <li className="my-2" key={index}>
              {item}
              <button onClick={()=>handleDelete(index)} className="bg-black ml-28 px-4 font-bold text-white hover:bg-zinc-900 rounded-lg">X</button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
