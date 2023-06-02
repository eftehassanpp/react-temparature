import React from 'react';
const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit',
};
export default function TemperatureInput({
  temperature,
  scale,
  onTemperatureChange,
}) {
  return (
    <fieldset>
      <legend>Enter Temparature in {scaleName[scale]}</legend>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e, scale)}
      />
    </fieldset>
  );
}
