import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-container">
        <div className="admin-logo">
          🏥 <span>Hospital Admin</span>
        </div>

        <ul className="admin-nav-links">
          <li><NavLink to="/admin/dashboard" activeclassname="active">Dashboard</NavLink></li>
          <li><NavLink to="/admin/add-doctor" activeclassname="active">Add Doctor</NavLink></li>
          <li><NavLink to="/admin/appointments" activeclassname="active">Appointments</NavLink></li>
          <li><NavLink to="/admin/patients" activeclassname="active">Patients</NavLink></li>
          <li><NavLink to="/admin/billing" activeclassname="active">Billing</NavLink></li>
          <li><NavLink to="/admin/addtrail" activeclassname="active">Add Trail</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
