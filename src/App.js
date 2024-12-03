import React from 'react';
import backgroundImage from './assets/joe-woods-4Zaq5xY5M_c-unsplash.jpg'; // Import image from src/assets
import Tags from './components/Tags';
import Random from './components/Random';

const App = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed h-screen overflow-auto flex flex-col items-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-black text-3xl shadow-2xl font-bold bg-white py-3  flex items-center justify-center mt-6 w-[90vw] rounded-2xl">Random GIFS</h1>

      <div>
        <Random></Random>
        <Tags></Tags>

      </div>
      
    </div>
  );
};

export default App;
        
