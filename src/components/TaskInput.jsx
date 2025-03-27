import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TaskInput = () => {
  // State to store the task name
  const [task, setTask] = useState('');
  
  // State to store the selected priority, default is "Medium"
  const [priority, setPriority] = useState('Medium');

  const dispatch = useDispatch(); // Redux dispatch function

  const handleAddTask = () => {
    if (task.trim() !== '') { // Ensure task is not empty
      dispatch(addTask({ task, priority })); // Dispatch action to add task
      setTask(''); // Clear input field
      setPriority('Medium'); // Reset priority to default after adding task
    }
  };

  return (
    <div className="task-input">
      {/* Task input field */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />

      {/* Dropdown for selecting priority */}
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* Button to add task */}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
