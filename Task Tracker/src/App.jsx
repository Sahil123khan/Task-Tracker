import "./App.css";
import React, { useEffect, useState } from "react";
import TaskInput from "./Component/TaskInput";
import TaskList from "./Component/Tasklist";

function App() {
  const [tasks, settask] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks);
        return Array.isArray(parsedTasks) ? parsedTasks : [];
      } catch (error) {
        console.error("Failed to parse tasks from localStorage or data is invalid:", error);
        return [];
      }
    }
    return [];
  });
  const [filter, setFilter] = useState('all');

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

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <>
      <div className="w-screen min-h-screen bg-gradient-to-r from-orange-500 to-indigo-600 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl min-h-[50vh] bg-white/30 backdrop-blur-sm rounded-lg shadow-lg p-6 justify-center flex flex-col overflow-auto">
          <div className="flex-grow">
            <h1 className="text-2xl font-bold italic text-center mb-4">📝 Task Tracker</h1>
            <TaskInput onAdd={addtask}/>
            <div className="my-4 flex justify-center items-center flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded transition-colors duration-150 ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-blue-200 hover:bg-blue-300 text-blue-800'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-3 py-1 rounded transition-colors duration-150 ${filter === 'completed' ? 'bg-green-600 text-white' : 'bg-green-200 hover:bg-green-300 text-green-800'}`}
              >
                Completed
              </button>
              <button
                onClick={() => setFilter('incomplete')}
                className={`px-3 py-1 rounded transition-colors duration-150 ${filter === 'incomplete' ? 'bg-yellow-600 text-white' : 'bg-yellow-200 hover:bg-yellow-300 text-yellow-800'}`}
              >
                Incomplete
              </button>
            </div>
            <div className="overflow-y-auto max-h-[40vh]">
              <TaskList tasks={filteredTasks} ondelete={handleDelete} onToggle={toggleComplete} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
