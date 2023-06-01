import React from 'react';

const Card = ({ name, email }) => {
  return (
    <div>
      <h2>Datos ingresados:</h2>
      <p>Nombre: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Card;







