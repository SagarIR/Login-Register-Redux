import React, { useState } from "react";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { doRegister } from "../redux/actions";

const Register = () => {
  const initailRegisterData = {
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
    passwordConfirm: "",
    showResendLink: false,
  };

  const [registerData, setRegisterData] = useState(initailRegisterData);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.registerInfo);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(doRegister(registerData));
    setRegisterData(initailRegisterData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setRegisterData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setRegisterData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <Home />
      <div className="container mt-4">
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter your first name"
              value={registerData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Enter your last name"
              value={registerData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone No</label>
            <input
              type="number"
              name="phoneNo"
              className="form-control"
              placeholder="Enter your phone no"
              value={registerData.phoneNo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={registerData.email}
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
              value={registerData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Conbfirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              className="form-control"
              placeholder="Enter your confim password"
              value={registerData.passwordConfirm}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              name="showResendLink"
              className="form-check-input"
              id="exampleCheck1"
              checked={registerData.showResendLink}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Accept Terms & Conditions
            </label>
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
