import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Get tasks from Redux store
  const dispatch = useDispatch(); // Redux dispatch function

  return (
    <div className="task-list">
      <h3>Task List</h3>

      {/* Display message when no tasks are present */}
      {tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        // Map through tasks and display them
        tasks.map((taskObj, index) => (
          <div key={index} className={`task-item ${taskObj.priority.toLowerCase()}`}>
            {/* Display task name */}
            <span>{taskObj.task}</span>

            {/* Display task priority */}
            <span className="priority">[{taskObj.priority}]</span>

            {/* Delete button to remove task from Redux store */}
            <button onClick={() => dispatch(removeTask(index))}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
