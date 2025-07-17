import React, { useState } from 'react';

const AddTrial = () => {
  const [form, setForm] = useState({
    title: '',
    condition: '',
    location: '',
    startDate: '',
    moreInfo: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://hospital-backend-1-nxpm.onrender.com//api/trials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (data.success) {
      alert("✅ Trial added successfully");
      setForm({ title: '', condition: '', location: '', startDate: '', moreInfo: '' });
    } else {
      alert("❌ Failed to add trial");
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Add Clinical Trial</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Trial Title" required /><br />
        <input type="text" name="condition" value={form.condition} onChange={handleChange} placeholder="Condition" required /><br />
        <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Location" required /><br />
        <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required /><br />
        <input type="url" name="moreInfo" value={form.moreInfo} onChange={handleChange} placeholder="More Info Link (optional)" /><br />
        <button type="submit">Add Trial</button>
      </form>
    </div>
  );
};

export default AddTrial;
