// src/pages/AdminAppointments.js
import React, { useEffect, useState } from 'react';
import './Appointments.css'; // for table styling

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('https://hospital-backend-1-nxpm.onrender.com//api/appointments')
      .then((res) => res.json())
      .then((data) => setAppointments(data))
      .catch((err) => console.error("Error fetching appointments", err));
  }, []);

  return (
    <div className="admin-appointments-container">
      <h2>📋 All Booked Appointments</h2>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a, i) => (
            <tr key={a._id}>
              <td>{i + 1}</td>
              <td>{a.name}</td>
              <td>{a.mobile}</td>
              <td>{a.address}</td>
              <td>{a.doctor}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAppointments;
