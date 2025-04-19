import { AddTask } from "./components/AddTask";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <h2
          className="text-3xl
          font-semibold
          text-center
          mb-6
          text-gray-800
          dark:text-white"
        >
          Daily Task
        </h2>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
