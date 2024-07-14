import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="w-full h-screen bg-gray-200 flex items-center flex-col">
      <h1 className="text-red-500 mt-[5rem] mb-3 font-bold text-4xl">
        Todo List
      </h1>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
