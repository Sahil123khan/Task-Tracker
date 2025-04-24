import { useState } from "react";

const TaskInput = ({onAdd}) => {
  const [input, setInput] = useState("");

  const handleaddtask = ( ) =>{
    if(input.trim()){
    onAdd(input);
    setInput("");
    }
  }

  
  
  return (
    <div className="mt-4 flex gap-2 items-center">
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        className="bg-gray-200 flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e)=>setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleaddtask()}
      />
      <button onClick={handleaddtask} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-150 flex-shrink-0">
        Add
      </button>
    </div>
  );
};

export default TaskInput;
