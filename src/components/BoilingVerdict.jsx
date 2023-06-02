export default function BoilingVerdict({ temperature = 0 }) {
  return temperature >= 100 ? (
    <p>Water would boil</p>
  ) : (
    <p>Water would not boil</p>
  );
}
