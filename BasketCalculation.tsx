import React, { useState } from 'react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const BasketCalculation = () => {
  const [basketWeight, setBasketWeight] = useState<number>(5); // Default berat keranjang 5 kg
  const [totalInputBasket, setTotalInputBasket] = useState<number>(0);
  const [history, setHistory] = useState<{ basketWeight: number; totalInputBasket: number; }[]>([]);
  
  // Menghitung total basket sebagai akumulasi dari input basket
  const totalBaskets = history.reduce((sum, entry) => sum + entry.totalInputBasket, 0);
  const totalBasketWeight = history.reduce((sum, entry) => sum + entry.basketWeight, 0);
  const averageWeightPerBasket = totalBaskets > 0 ? totalBasketWeight / totalBaskets : 0;

  const handleInput = () => {
    if (totalInputBasket > 0) {
      setHistory([...history, { basketWeight, totalInputBasket }]);
      setTotalInputBasket(0); // Reset input field
    }
  };

  const handleReset = () => {
    setHistory([]);
    setBasketWeight(5);
    setTotalInputBasket(0);
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center">Basket Calculation Page</h1>
      
      <div className="w-full max-w-md space-y-4">
        <div>
          <label htmlFor="basketWeight" className="text-sm font-medium text-gray-600 block mb-1">
            Input Basket Weight (kg)
          </label>
          <Input
            id="basketWeight"
            type="number"
            value={basketWeight}
            onChange={(e) => setBasketWeight(Number(e.target.value))}
            min="1"
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="totalInputBasket" className="text-sm font-medium text-gray-600 block mb-1">
            Total Input Basket
          </label>
          <Input
            id="totalInputBasket"
            type="number"
            value={totalInputBasket}
            onChange={(e) => setTotalInputBasket(Number(e.target.value))}
            min="0"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <div className="bg-secondary/10 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-600">Total Baskets</p>
          <p className="text-xl md:text-2xl font-semibold text-gray-900">
            {totalBaskets} baskets
          </p>
        </div>
        <div className="bg-secondary/10 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-600">Total Basket Weight</p>
          <p className="text-xl md:text-2xl font-semibold text-gray-900">
            {totalBasketWeight} kg
          </p>
        </div>
        <div className="bg-secondary/10 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-600">Average Weight per Basket</p>
          <p className="text-xl md:text-2xl font-semibold text-gray-900">
            {averageWeightPerBasket.toFixed(2)} kg
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <Button onClick={handleInput} className="bg-primary text-white px-4 py-2 rounded-lg">Input</Button>
        <Button onClick={handleReset} className="bg-destructive text-white px-4 py-2 rounded-lg">Reset</Button>
      </div>

      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">History</h2>
        <ul className="list-disc pl-5 space-y-2">
          {history.map((entry, index) => (
            <li key={index}>
              Basket Weight: {entry.basketWeight} kg, Total Baskets: {entry.totalInputBasket} baskets
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BasketCalculation;
