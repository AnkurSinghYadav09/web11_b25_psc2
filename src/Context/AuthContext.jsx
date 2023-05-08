import React, { useState } from "react";

export const AuthContext = React.createContext(); //box

function AuthContextProvider({ children }) {
  const [isAuth, SetIsAuth] = useState(false);
  const [token, setToken] = useState("");

  const login = (tok) => {
    SetIsAuth(true);
    setToken(tok);
  };

  const logout = () => {
    SetIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ token, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
