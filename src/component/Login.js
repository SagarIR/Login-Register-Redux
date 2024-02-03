import React, { useState } from "react";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../redux/actions";

const Login = () => {
  const initialLoginData = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialLoginData);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.loginInfo);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(doLogin(loginData));
    setLoginData(initialLoginData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Home />
      <div className="container mt-4">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-primary mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
