import React, { useState } from 'react';

const HouseForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || { title: '', body: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  // Form 
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Body:
        <input type="text" name="body" value={formData.body} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HouseForm;


 
