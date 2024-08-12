import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';

const Nav = () => {
    const [showLogin, setShowLogin] = useState(false);
  return (
    <nav>
      <img src="/images/logo2.jpg" alt="Salon Logo" />
      <input type="text" placeholder="Search..." />
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Gallery</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="profile-icon" onClick={() => setShowLogin(!showLogin)}>
        <FaUser />
      </div>
      <div className="business-links">
        <a href="#">For Business</a>
        <a href="#">Post Ad</a>
      </div>
      {showLogin && 'login'}
    </nav>
  )
}

export default Nav