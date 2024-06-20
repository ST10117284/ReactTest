import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/NavBar.css';
import logo from '../images/SCNet Logo 2024 Paths w.png';
import LoginModal from './LoginModal'; // Import the LoginModal component
import homeIcon from '../images/home.png'; // Import the home.png image

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Company Logo" className="logo" />
      </Link>
      <Link to="/" className="navbar-brand">
        <img src={homeIcon} alt="Home" className="navbar-icon" style={{ width: '24px', height: '24px' }} />
        
      </Link>
      <Link to="/Map" className="navbar-link">SA Map Stats</Link>
      <Link to="/DataTable" className="navbar-link">Health Report</Link>
      <button onClick={openModal} className="navbar-link" style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}>Login</button>

      {showModal && <LoginModal closeModal={closeModal} />}
    </nav>
  );// login buttton added 
};

export default NavBar;
