import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup({ setIsSignupPage }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:5000/user/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: userName,
        email: email,
        password: password,
      }),
    });
    const { userId, userEmail, token } = await resp.json();
    localStorage.setItem("userID", userId);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("token", token);
    navigate("/home");
  };

  return (
    <div className="signup-body">
      <div className="signup-form-section">
        <h1>Graphite</h1>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="create-account-btn">Create Account</button>
          <p>
            Already have an account?{" "}
            <span className="goto-login" onClick={() => setIsSignupPage(false)}>
              Log in
            </span>
          </p>
        </form>
      </div>
      <div className="signup-side-section">
        <h2 className="signup-side-text">Join Us</h2>
      </div>
    </div>
  );
}
