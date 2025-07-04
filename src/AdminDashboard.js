import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [appointmentsToday, setAppointmentsToday] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/appointments');
      const data = await res.json();

      const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
      const todayAppointments = data.filter(a => a.date === today);

      setAppointmentsToday(todayAppointments.length);

      const uniquePatients = new Set(data.map(a => a.name));
      setPatientsCount(uniquePatients.size);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  const fetchDoctors = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/doctors');
      const data = await res.json();
      setDoctorsCount(data.length);
    } catch (err) {
      console.error("Error fetching doctors:", err);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-heading">Welcome, Admin</h1>

      <div className="dashboard-cards">
        <div className="card">
          <h3>📅 Today’s Appointments</h3>
          <p>{appointmentsToday} Bookings</p>
        </div>

        <div className="card">
          <h3>👨‍⚕️ Total Doctors</h3>
          <p>{doctorsCount} Registered</p>
        </div>

        <div className="card">
          <h3>👥 Total Patients</h3>
          <p>{patientsCount}</p>
        </div>

        <div className="card">
          <h3>💰 Today’s Revenue</h3>
          <p>₹{patientsCount * 500}</p> {/* Assuming ₹500 per appointment */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
