import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate("");
  console.log(email, password);
  const handleLogin = (e) => {
    e.preventDefault();
    fetch(
      "https://3001-4geeksacade-reactflaskh-2lflnqimkee.ws-us85.gitpod.io/api/Login",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((Response) => {
        return Response.json();
      })
      .then((result) => {
        if (
          typeof result == "string" &&
          result.includes("Email or Password is Invalid")
        ) {
          setError("Email or Password is Invalid");
        } else {
          console.log(result);
          localStorage.setItem("jwt", result.access_token);
          Navigate("/Private");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <form className="container" onSubmit={handleLogin}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            {error}
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Remember Me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
