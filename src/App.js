import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import AddDoctor from './AddDoctor';
import Appointments from './Appointments';
import Patients from './Patients';
import Billing from './Billing';
import Navbar from './Navbar';
import AddTrial from './AddTrial';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-doctor" element={<AddDoctor />} />
        <Route path="/admin/appointments" element={<Appointments />} />
        <Route path="/admin/patients" element={<Patients />} />
        <Route path="/admin/billing" element={<Billing />} />
        <Route path="/admin/addtrial" element={<AddTrial />} />

        {/* Optional: redirect or 404 */}
        <Route path="*" element={<h2 style={{ padding: "40px" }}>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
