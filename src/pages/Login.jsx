import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";

const Login = () => {
  const dispatch = useDispatch(); // Redux dispatch function
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Check if user is logged in

  return (
    <div className="auth">
      {isAuthenticated ? (
        <>
          {/* If user is logged in, display welcome message and logout button */}
          <h3>Welcome!</h3>
          <button className="logout-btn" onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        /* If user is not logged in, show login button */
        <button className="login-btn" onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
};

export default Login;
