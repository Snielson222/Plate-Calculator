import React from 'react';

const PlateDisplay = ({ plates, unit }) => {
  const plateCount = plates.reduce((acc, plate) => {
    acc[plate] = (acc[plate] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Required Plates Per Side:</h2>
      {Object.keys(plateCount).length > 0 ? (
        <ul>
          {Object.entries(plateCount).map(([weight, count]) => (
            <li key={weight}>
              {count} x {weight} {unit}
            </li>
          ))}
        </ul>
      ) : (
        <p>No plates needed.</p>
      )}
    </div>
  );
};

export default PlateDisplay;
