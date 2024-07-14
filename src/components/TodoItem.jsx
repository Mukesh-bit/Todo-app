// TodoItem.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, updateTodo, deleteTodo } from "../../store/todoSlice";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleUpdateTodo = () => {
    if (editedText.trim() !== "") {
      dispatch(updateTodo({ id: todo.id, text: editedText.trim() }));
      setIsEditing(false);
    }
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="">
      {isEditing ? (
        <div className="flex items-center justify-between space-x-3 my-3">
          <input
            className="border rounded p-1"
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div className="space-x-2">
            <button className="bg-blue-300 p-1 rounded font-medium hover:bg-blue-400 transition-all duration-300" onClick={handleUpdateTodo}>Save</button>
            <button className="bg-red-400 p-1 rounded font-medium hover:bg-red-500 transition-all duration-300"  onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between my-4 bg-white p-1 rounded">
          <span
            className="text-xl font-medium"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <input className="mx-2" type="checkbox" name="" id="" onClick={handleToggleTodo}/>
            {todo.text}
          </span>
          <div className="space-x-2">
            <button onClick={() => setIsEditing(true)}><i class="ri-edit-2-line text-yellow-400 text-xl cursor-pointer"></i></button>
            <button onClick={handleDeleteTodo}><i class="ri-delete-bin-5-line text-red-600 text-xl cursor-pointer"></i></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
