import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { UserContext } from './UserContext';

function App() {
  return (
      <Router>
              <Navbar />
              <UserContext.Provider value="hello context">
              <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
              </Routes>
              </UserContext.Provider>
      </Router>
  );
}

export default App;
