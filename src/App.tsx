import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        
        <main className={styles.mainContent}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;