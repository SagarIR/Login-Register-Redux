import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <div className="navbar-nav">
        <Link to="/login" className="nav-link active">
          Login
        </Link>
        <Link to="/register" className="nav-link active">
          Register
        </Link>
        <Link to="/todoList" className="nav-link active">
          Todo List
        </Link>
        <Link to="/profile" className="nav-link active">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Home;
