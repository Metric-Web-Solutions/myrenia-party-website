import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/earth-systems" element={<Homepage />} />
        <Route path="/sustainability" element={<Homepage />} />
        <Route path="/contact" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;