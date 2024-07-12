import React from 'react';

const PlateDisplay = ({ plates }) => {
  return (
    <div>
      <h2>Required Plates:</h2>
      {plates.length > 0 ? (
        <ul>
          {plates.map((plate, index) => (
            <li key={index}>{plate} lbs</li>
          ))}
        </ul>
      ) : (
        <p>No plates needed.</p>
      )}
    </div>
  );
};

export default PlateDisplay;
