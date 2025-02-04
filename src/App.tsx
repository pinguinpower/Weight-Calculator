import React from 'react';
import './App.css';
import { BasketCalculation } from './components/BasketCalculation';
import { WeightStats } from './components/WeightStats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weight Calculator</h1>
      </header>
      <main>
        <BasketCalculation />
        <WeightStats />
      </main>
    </div>
  );
}

export default App;
