import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
      const response = await axios.post(
        "http://16.171.175.123:5000/api/auth/login",
        formData
      );

      localStorage.setItem("token", response.data.token);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Job Tracker</h1>

        <h2>Welcome Back</h2>

        <form onSubmit={handleSubmit}>
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

          <button type="submit">Login</button>
        </form>

        <p>
          New user?
          <Link to="/"> Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;