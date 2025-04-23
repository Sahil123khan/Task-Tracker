const TaskList = ({tasks, ondelete, onToggle}) => {
  return (
    <div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li className="bg-slate-300 border border-black rounded p-2 flex items-center gap-2" key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="h-4 w-4"
            />
            <span className={`flex-grow ${task.completed ? "line-through text-gray-500" : ""}`}>
              {task.text}
            </span>
            <button 
              onClick={() => ondelete(task.id)} 
              className="px-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
  