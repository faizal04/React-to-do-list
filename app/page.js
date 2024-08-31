"use client";
import React, { useState } from "react";

const Page = function () {
  const [task, setTask] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  let [hidden, setHidden] = useState(true);

  const del = function (index) {
    setTask(task.filter((_, i) => i !== index));
  };

  let addTask = function () {
    if (taskTitle && taskDescription) {
      setTask([...task, { title: taskTitle, description: taskDescription }]);
      setTaskTitle("");
      setTaskDescription("");
      setHidden(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="h-20 bg-gray-300 flex justify-center items-center">
          <h1 className="capitalize text-3xl md:text-4xl font-bold text-gray-700">To-Do-List</h1>
        </div>

        <div className="flex flex-col md:flex-row m-10 justify-center gap-4">
          <input
            type="text"
            placeholder="Task"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="bg-gray-50 h-16 w-full md:w-1/3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />

          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Description"
            className="bg-gray-50 h-16 w-full md:w-1/3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <button
            onClick={addTask}
            type="button"
            className="h-16 w-full md:w-1/3 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Add Task
          </button>
        </div>

        <div className={hidden ? "hidden" : "flex flex-col items-center gap-4 p-6"}>
          {task.map((task, index) => (
            <div
              key={index}
              className="hover:scale-105 duration-300 w-full max-w-md bg-white shadow-lg rounded-lg p-4 mb-4 flex flex-col items-start"
            >
              <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{task.title}</h1>
              <h2 className="text-sm md:text-md text-gray-600 mb-4">{task.description}</h2>
              <button
                onClick={() => del(index)}
                type="button"
                className="self-center h-10 w-full md:w-32 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2"
              >
                Delete Task
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
