import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { token, isAuth, logout } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {isAuth ? (
        <div>
          <h2>Token</h2>:{token}
          <button onClick={() => logout()}>Logout</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
