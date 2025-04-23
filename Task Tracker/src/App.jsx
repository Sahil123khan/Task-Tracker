import "./App.css";
import React, { useState } from "react";
import TaskInput from "./Component/TaskInput";
import TaskList from "./Component/Tasklist";

function App() {
  const [tasks, settask] = useState([])

  const addtask =(task) =>{
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    }
    settask([...tasks, newTask])
  }

  const handleDelete=(id)=>{
    const updatedTasks = tasks.filter(task => task.id !== id)
    settask(updatedTasks)
  }

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    settask(updatedTasks);
  };
   
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-orange-500 to-indigo-600  flex items-center justify-center ">
        <div className=" w-[40%] h-[50%] justify-center flex overflow-auto ">
          <div >
            <h1 className="text-2xl font-bold italic">📝 Task Tracker</h1>
            <TaskInput onAdd={addtask}/>
            <TaskList tasks={tasks} ondelete={handleDelete} onToggle={toggleComplete} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
