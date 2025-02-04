import React, { useState, useEffect } from "react";
import { WeightEntry } from "../types/weight";
import { formatWeight, calculateAverage, calculateTotalWeight } from "../utils/weight";
import { Input } from "./ui/input";

interface WeightStatsProps {
  entries: WeightEntry[];
}

const WeightStats: React.FC<WeightStatsProps> = ({ entries }) => {
  const [entriesPerHead, setEntriesPerHead] = useState<number>(30);
  const [totalEntries, setTotalEntries] = useState<number>(0);
  
  // Update total entries only when new entries are added, not on reset
  useEffect(() => {
    if (entries.length > 0) {
      setTotalEntries(prev => prev + entriesPerHead);
    }
  }, [entries.length]);

  const totalHeads = entriesPerHead > 0 ? Math.ceil(totalEntries / entriesPerHead) : 0;
  const latest = entries[0]?.weight ?? 0;
  const totalWeight = calculateTotalWeight(entries);
  const averageWeight = totalEntries > 0 ? totalWeight / totalEntries : 0;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-accent/10 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-600">Latest Weight</p>
          <p className="text-2xl font-semibold text-gray-900">
            {formatWeight(latest)}
          </p>
        </div>
        <div className="bg-secondary/10 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-600">Average Weight</p>
          <p className="text-2xl font-semibold text-gray-900">
            {formatWeight(averageWeight)}
          </p>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-600">Total Entries</p>
          <p className="text-2xl font-semibold text-gray-900">
            {totalEntries} entries<br/>
            <span className="text-lg">{totalHeads} heads</span>
          </p>
        </div>
        <div className="bg-muted/10 p-4 rounded-lg">
          <p className="text-sm font-medium text-gray-600">Total Weight</p>
          <p className="text-2xl font-semibold text-gray-900">
            {formatWeight(totalWeight)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label htmlFor="entriesPerHead" className="text-sm font-medium text-gray-600 block mb-1">
            Entries Per Head
          </label>
          <Input
            id="entriesPerHead"
            type="number"
            value={entriesPerHead}
            onChange={(e) => setEntriesPerHead(Number(e.target.value))}
            min="1"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WeightStats;