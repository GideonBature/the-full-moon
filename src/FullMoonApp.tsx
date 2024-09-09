import React, { useState } from 'react';
import { MoonIcon } from 'lucide-react';
import { getFullMoonForMonth } from './fullMoonCalculation'; // Assuming your moon calculation is in a separate file

const FULL_MOON_NAMES: { [key: number]: string } = {
  1: "Wolf Moon",
  2: "Snow Moon",
  3: "Worm Moon",
  4: "Pink Moon",
  5: "Flower Moon",
  6: "Strawberry Moon",
  7: "Buck Moon",
  8: "Sturgeon Moon",
  9: "Harvest Moon",
  10: "Hunter's Moon",
  11: "Beaver Moon",
  12: "Cold Moon"
};

const FullMoonApp: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [fullMoonDate, setFullMoonDate] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Extract year and month from the input (YYYY-MM format)
    const [year, month] = date.split('-').map(Number);

    // Use getFullMoonForMonth to calculate the full moon date
    const result = getFullMoonForMonth(year, month);
    
    // Update the state with the formatted full moon date
    setFullMoonDate(result);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('../public/images/bg.jpg')"}}>
      <div className="bg-black bg-opacity-70 p-8 rounded-lg text-white max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">The Full Moon</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <input
            type="month"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white mb-4"
            required
          />
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Find Full Moon
          </button>
        </form>
        {fullMoonDate && (
          <div className="text-center">
            <MoonIcon className="mx-auto mb-4" size={48} />
            <p className="text-xl mb-2">
              Full Moon Date: {fullMoonDate}
            </p>
            <p className="text-lg">
              Moon Name: {FULL_MOON_NAMES[new Date(fullMoonDate).getMonth() + 1]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullMoonApp;
