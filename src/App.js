import { useMemo, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { UserContext } from './UserContext';

function App() {
  const [user, setUser] = useState(null)

  const value = useMemo(() => ({user, setUser}), [user, setUser])
  return (
      <Router>
              <Navbar />
              <UserContext.Provider value={value}>
              <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
              </Routes>
              </UserContext.Provider>
      </Router>
  );
}

export default App;
