import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/HomePage';
import PageInfo from './pages/PageInfo/PageInfo';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/WelcomeCourceApp/" element={<Homepage />} />
        <Route path="/WelcomeCourceApp/page_info/:processId" element={<PageInfo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
