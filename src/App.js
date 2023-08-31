import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/" element={<Dashboard />} />
        <Route path="/stock/:symbol" element={<Stock />} />
      </Routes>
    </div>
  );
}

export default App;
