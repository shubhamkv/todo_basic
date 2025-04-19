export const TaskList = ({ tasks, setTasks }) => {
  const updateTask = (id) => {
    const currentTask = tasks.find((t) => t.id == id);
    if (currentTask.completed) {
      alert("You have completed this task! Please undo to update");
      return;
    }
    const updatedTask = prompt("Update your task :", currentTask.task);

    if (updatedTask.trim() == "") return;
    setTasks(tasks.map((t) => (t.id == id ? { ...t, task: updatedTask } : t)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id != id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id == id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="max-h-116 overflow-y-auto flex flex-col items-center space-y-4">
      {tasks.map((t) => (
        <div
          key={t.id}
          className="flex items-center gap-3 w-full max-w-2xl px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md min-h-[80px]"
        >
          <div
            className={`flex-1 break-words ${
              t.completed
                ? "line-through text-gray-400"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {t.task}
          </div>

          <button
            onClick={() => toggleTask(t.id)}
            className="bg-green-500 hover:bg-green-600 text-white h-10 px-4 py-2 rounded-lg font-medium transition duration-200 cursor-pointer"
          >
            {t.completed ? "Undo" : "Done"}
          </button>

          <button
            onClick={() => updateTask(t.id)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white h-10 px-4 py-2 rounded-lg font-medium transition duration-200 cursor-pointer"
          >
            Update
          </button>

          <button
            onClick={() => removeTask(t.id)}
            className="bg-red-500 hover:bg-red-600 text-white h-10 px-4 py-2 rounded-lg font-medium transition duration-200 cursor-pointer"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
