// src/App.js
import React, { useEffect, useState } from 'react';
import House from './components/House';
import HouseForm from './components/HouseForm';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);

  useEffect(() => {
    fetch(API_BASE_URL)
      .then(response => response.json())
      .then(data => setHouses(data))
      .catch(error => console.error('Error fetching houses:', error));
  }, []);
   // This will be to add new home
  const handleCreate = (newHouse) => {
    fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHouse),
    })
      .then(response => response.json())
      .then(data => setHouses([...houses, data]))
      .catch(error => console.error('Error creating house:', error));
  };
   // This will update the house 
  const handleUpdate = (updatedHouse) => {
    fetch(`${API_BASE_URL}/${updatedHouse.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedHouse),
    })
      .then(response => response.json())
      .then(data => {
        setHouses(houses.map(h => (h.id === updatedHouse.id ? data : h)));
        setSelectedHouse(null);
      })
      .catch(error => console.error('Error updating house:', error));
  };
// This will delete the house 
  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => setHouses(houses.filter(h => h.id !== id)))
      .catch(error => console.error('Error deleting house:', error));
  };

  return (
    <div>
      <h1>Houses</h1>
      <HouseForm onSubmit={handleCreate} />
      {houses.map(house => (
        <House
          key={house.id}
          house={house}
          onDelete={handleDelete}
          onUpdate={(selectedHouse) => setSelectedHouse(selectedHouse)}
        />
      ))}
      {selectedHouse && (
        <div>
          <h2>Edit House</h2>
          <HouseForm onSubmit={handleUpdate} initialData={selectedHouse} />
        </div>
      )}
    </div>
  );
};

export default App;






