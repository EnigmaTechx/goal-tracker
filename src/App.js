import "./App.css";
import SideNavv from "./components/SideNavv";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
import Targets from "./pages/Targets";
import AddTarget from "./pages/AddTarget";

function App() {
  return (
    <Router>
      <SideNavv />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/targets" element={<Targets />} />
        <Route path="/targets/add" element={<AddTarget />} />
      </Routes>
    </Router>
  );
}

export default App;
