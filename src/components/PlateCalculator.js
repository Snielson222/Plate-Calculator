import React, { useState } from 'react';
import PlateDisplay from './PlateDisplay';

const PlateCalculator = () => {
  const [weight, setWeight] = useState(0);
  const [plates, setPlates] = useState([]);

  const plateOptions = [45, 35, 25, 10, 5, 2.5]; // Available plates in pounds

  const calculatePlates = (totalWeight) => {
    let remainingWeight = (totalWeight - 45) / 2; // Assuming a 45 lb barbell
    const calculatedPlates = [];

    plateOptions.forEach((plate) => {
      while (remainingWeight >= plate) {
        calculatedPlates.push(plate);
        remainingWeight -= plate;
      }
    });

    return calculatedPlates;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedPlates = calculatePlates(weight);
    setPlates(calculatedPlates);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Total Weight Assuming 45lb Barbell:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <PlateDisplay plates={plates} />
    </div>
  );
};

export default PlateCalculator;
