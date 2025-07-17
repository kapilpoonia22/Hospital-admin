// src/pages/AddDoctor.js
import React, { useState } from 'react';
import './AddDoctor.css'; // ✅ External CSS

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    specialization: '',
    image: '',
  });

  const handleInputChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setDoctor((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://hospital-backend-1-nxpm.onrender.com//api/doctors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(doctor),
    });

    const data = await res.json();
    alert(data.message);
    setDoctor({ name: '', specialization: '', image: '' });
  };

  return (
    <div className="add-doctor-container">
      <h2 className="form-title">Add Doctor</h2>
      <form onSubmit={handleSubmit} className="doctor-form">
        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={doctor.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={doctor.specialization}
          onChange={handleInputChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
