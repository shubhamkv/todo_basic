import { useEffect, useState } from "react";
import { TaskList } from "./TaskList";

export const AddTask = () => {
  const [addTask, setAddTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTasks = () => {
    if (addTask.trim() == "") return;

    const newTask = {
      id: Date.now(),
      task: addTask,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setAddTask("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);

  return (
    <>
      <div className="flex gap-5 mb-6">
        <input
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          type="text"
          placeholder="Enter your task"
          value={addTask}
          onChange={(e) => setAddTask(e.target.value)}
        ></input>

        <button
          onClick={addTasks}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition duration-200 cursor-pointer"
        >
          Add Task
        </button>
      </div>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
};
