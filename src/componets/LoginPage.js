import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      {/* <div className="switch-container">
        <input type="checkbox" id="switch" role="switch" />
        <label for="switch" className="switch-btn"></label>
      </div> */}

      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="submit-btn" type="submit">
          Login
        </button>
        <p>
          <a href="/SignUpPage">Dont have account</a> |{" "}
          <a href="/SignUpPage">Sign Up here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
