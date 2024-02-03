import React from 'react';
//onClick event of the "Delete" button.
// onClick event of the "Update" button.
const House = ({ house, onDelete, onUpdate }) => {
  const handleDelete = () => onDelete(house.id);
  const handleUpdate = () => onUpdate(house);

  return (
    // This is responsible for displaying information about house. 
    <div>
      <h2>{house.title}</h2>
      <p>{house.body}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default House;


