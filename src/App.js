import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import FingerPainPage from './pages/FingerPainPage';
import BodyPainPage from './pages/BodyPainPage';

function App() {

  
  return (
      <Router>
      <div>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fingerpain" element={<FingerPainPage />} />
          <Route path="/bodypain" element={<BodyPainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
