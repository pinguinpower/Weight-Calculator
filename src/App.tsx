import React from 'react';
import './App.css';
import { BasketCalculation } from './components/BasketCalculation';
import { WeightStats } from './components/WeightStats';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Weight Calculator</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <BasketCalculation />
          <WeightStats />
        </div>
      </main>
    </div>
  );
}

export default App;
