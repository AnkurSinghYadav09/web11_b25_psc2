import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <AuthContextProvider>       */}
        <AllRoutes />
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
