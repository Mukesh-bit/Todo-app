// TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';

const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue.trim()));
      setInputValue('');
    }
  };

  return (
    <div>
      <input className='border outline-none p-2 rounded' type="text" value={inputValue} onChange={handleInputChange} />
      <button className='bg-blue-300 font-semibold p-2 rounded mx-2 hover:bg-blue-400 transition-all duration-300 ' onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;