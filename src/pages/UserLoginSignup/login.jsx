import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login({ setIsSignupPage }) {
  const navigate = useNavigate();
  const [usrEmail, setUsrEmail] = useState("");
  const [usrPassword, setUsrPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: usrEmail,
        password: usrPassword,
      }),
    });

    const { userId, userEmail, token } = await resp.json();
    localStorage.setItem("userID", userId);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("token", token);
    navigate("/home");
  };

  return (
    <div className="login-body">
      <div className="login-form-section">
        <h1>Graphite</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            id="email"
            value={usrEmail}
            onChange={(e) => setUsrEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={usrPassword}
            onChange={(e) => setUsrPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="login-btn">Login</button>
          <p>
            Don't have an account?{" "}
            <span className="goto-signup" onClick={() => setIsSignupPage(true)}>
              Sign up
            </span>
          </p>
        </form>
      </div>
      <div className="login-side-section">
        <h2 className="login-side-text">Welcome Again</h2>
      </div>
    </div>
  );
}
