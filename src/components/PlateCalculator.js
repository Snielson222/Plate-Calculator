import React, { useState } from 'react';
import PlateDisplay from './PlateDisplay';
import "./PlateCalculator.css";

const PlateCalculator = () => {
  const [weight, setWeight] = useState();
  const [plates, setPlates] = useState([]);
  const [unit, setUnit] = useState('lbs');

  const plateOptions = {
    lbs: [45, 35, 25, 10, 5, 2.5], // Available plates in pounds
    kg: [20, 15, 10, 5, 2.5, 1.25], // Available plates in kilograms
  };

  const barbellWeight = unit === 'lbs' ? 45 : 20; // Assuming a 45 lb or 20 kg barbell

  const calculatePlates = (totalWeight, unit) => {
    let remainingWeight = (totalWeight - barbellWeight) / 2;
    const calculatedPlates = [];
    plateOptions[unit].forEach((plate) => {
      while (remainingWeight >= plate) {
        calculatedPlates.push(plate);
        remainingWeight -= plate;
      }
    });
    return calculatedPlates;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedPlates = calculatePlates(weight, unit);
    setPlates(calculatedPlates);
  };

  return (
    <div>
      <img id="weightPlate" src="https://workout-development-network.s3.us-east-2.amazonaws.com/imageedit_2_6458890741.png" alt="weightPlate" />
      <form onSubmit={handleSubmit}>
        <label>
          Total Weight ({unit}):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <div>
        <label>
          <input
            type="radio"
            value="lbs"
            checked={unit === 'lbs'}
            onChange={() => setUnit('lbs')}
          />
          Pounds with 45 lb barbell (lbs)
        </label>
        <label>
          <input
            type="radio"
            value="kg"
            checked={unit === 'kg'}
            onChange={() => setUnit('kg')}
          />
          Kilograms with 20 kilo barbell (kg)
        </label>
      </div>
      <PlateDisplay plates={plates} unit={unit} />
    </div>
  );
};

export default PlateCalculator;
