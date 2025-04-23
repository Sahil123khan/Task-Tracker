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
    <div className="mt-4 p-4">
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        className="bg-gray-300 w-64 px-4 py-2  rounded"
        onChange={(e)=>setInput(e.target.value)}
      />
      <button onClick={handleaddtask} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add
      </button>
    </div>
  );
};

export default TaskInput;
