// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Location from './pages/Location';
import Photos from './pages/Photos';
import Videos from './pages/Videos'; // Import corect pentru Videos
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/location" element={<Location />} />
                <Route path="/gallery" element={<Photos />} />
                <Route path="/videos" element={<Videos />} /> {/* Ruta pentru Videos */}
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
