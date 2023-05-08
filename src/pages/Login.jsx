import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const navigate = useNavigate();
  const { login, isAuth } = useContext(AuthContext);
  const inputValues = {
    email,
    password,
  };

  //   console.log(email, password);
  const handleSubmit = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValues),
    })
      .then((res) => res.json())
      .then((res) => login(res.token));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="provide email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="provide password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}> submit</button>
    </div>
  );
};

export default Login;
