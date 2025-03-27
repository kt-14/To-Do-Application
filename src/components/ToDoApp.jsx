import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/authSlice'; // Import login & logout actions
import Weather from './Weather';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const ToDoApp = () => {
  const dispatch = useDispatch(); // Redux dispatch function
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated ?? false); // Get authentication status from Redux store
  const [showWeather, setShowWeather] = useState(false); // State to toggle weather visibility

  // Function to handle login
  const handleLogin = () => dispatch(login());

  // Function to handle logout
  const handleLogout = () => dispatch(logout());

  return (
    <div className="todo-container">
      <h1>To-Do Application</h1>

      {/* Check if user is authenticated */}
      {isAuthenticated ? (
        <>
          {/* Welcome message and Logout button */}
          <h3>Welcome!</h3>
          <button className='logout-btn' onClick={handleLogout}>Logout</button>

          {/* Task Input Component */}
          <TaskInput />

          {/* Task List Component */}
          <TaskList />

          {/* Toggle Weather Visibility Button */}
          <button
            className="toggle-weather-btn"
            onClick={() => setShowWeather(!showWeather)}
          >
            {showWeather ? "Hide Weather" : "Check Weather"}
          </button>

          {/* Show weather only when requested */}
          {showWeather && <Weather />}
        </>
      ) : (
        <>
          {/* Message for unauthenticated users */}
          <p>Please log in to access your tasks.</p>

          {/* Login button to authenticate user */}
          <button className='login-btn' onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default ToDoApp;
