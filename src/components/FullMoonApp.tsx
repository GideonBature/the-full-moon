import React, { useState } from 'react';
import { MoonIcon } from 'lucide-react';
import { getFullMoonForMonth } from '../fullMoonCalculation'; // Assuming your moon calculation is in a separate file
import { FaTwitter, FaDiscord, FaGlobe } from 'react-icons/fa';

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
  const [date, setDate] = useState<string>('2024-01');
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
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('/images/bg.jpg')"}}>
      <div className="bg-black bg-opacity-70 p-8 rounded-lg text-white max-w-md w-full">
        <img
            src="/images/witches.gif"
            alt="Witches"
            className="w-20 h-20 rounded-full m-auto mb-5"
          />
        <h1 className="text-3xl font-bold mb-6 text-center">ITS•A•FULL•MOON</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <label htmlFor="date-input" className="block text-left text-lg mb-2">
            Please Enter Date:
          </label>
          <input
            id='date-input'
            type="month"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white mb-4"
            required
          />
          <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Find The Full Moon
          </button>
        </form>
        {fullMoonDate && (
          <div className="text-center">
            <MoonIcon className="mx-auto mb-4" size={48} />
            <p className="text-xl mb-2">
              The Full Moon Date: {fullMoonDate}
            </p>
            <p className="text-lg">
              The Full Moon Name: {FULL_MOON_NAMES[parseInt(fullMoonDate.split('/')[1])]}
            </p>
          </div>
        )}

         {/* Social and external links */}
        <div className="mt-6 flex justify-center space-x-4">
          {/* X (formerly Twitter) */}
          <a href="https://x.com/taprootwitches?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={32} />
          </a>

          {/* Discord */}
          <a href="https://discord.com/invite/TBXrvtXc2F" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaDiscord size={32} />
          </a>

          {/* Website */}
          <a href="https://taprootwitches.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FaGlobe size={32} />
          </a>

          {/* MagicEden */}
          <a href="https://magiceden.io/runes/ITS%E2%80%A2A%E2%80%A2FULL%E2%80%A2MOON" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <img src="/images/magiceden.png" alt="MagicEden" className="w-12 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FullMoonApp;
