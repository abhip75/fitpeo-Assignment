import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar default state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <NavBar isSidebarOpen={isSidebarOpen} />
      <div className="main-layout">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Main />
        </div>
        
      </div>
    </div>
  );
}

export default App;
