import React, { useState } from 'react';

export const BasketCalculation = () => {
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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Basket Weight Calculator</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Berat Keranjang (kg)</label>
          <input
            type="number"
            value={basketWeight}
            onChange={(e) => setBasketWeight(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Jumlah Keranjang</label>
          <input
            type="number"
            value={totalInputBasket}
            onChange={(e) => setTotalInputBasket(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleInput}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Tambah ke History
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">History</h3>
        <div className="space-y-2">
          {history.map((entry, index) => (
            <div key={index} className="p-3 bg-gray-100 rounded">
              <p>Berat Keranjang: {entry.basketWeight} kg</p>
              <p>Jumlah Keranjang: {entry.totalInputBasket}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded">
        <h3 className="text-xl font-semibold mb-4">Statistik</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600">Total Keranjang</p>
            <p className="text-2xl font-bold">{totalBaskets}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Berat</p>
            <p className="text-2xl font-bold">{totalBasketWeight} kg</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Rata-rata Berat per Keranjang</p>
            <p className="text-2xl font-bold">{averageWeightPerBasket.toFixed(2)} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};
