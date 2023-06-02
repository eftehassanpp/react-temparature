import { useState } from 'react';
import './assets/App.css';
import Calculator from './components/Calculator';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calculator />
    </>
  );
}

export default App;
