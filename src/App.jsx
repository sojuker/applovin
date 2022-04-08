import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
