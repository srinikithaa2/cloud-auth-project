import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "../styles/Auth.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://16.171.175.123:5000/api/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Job Tracker</h1>

        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;