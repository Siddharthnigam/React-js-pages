import React, { useState } from 'react'
import Design from './Pages/design1.jsx';
import Design2 from './Pages/design2.jsx';

function App() {
  const [view, setView] = useState('home');

  if (view === 'design1') return (
    <>
      <button onClick={() => setView('home')} className="absolute top-5 left-5 px-5 py-2 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition z-50">← Back</button>
      <Design />
    </>
  );
  if (view === 'design2') return (
    <>
      <button onClick={() => setView('home')} className="absolute top-5 left-5 px-5 py-2 bg-gray-700 text-white rounded-lg font-bold hover:bg-gray-600 transition z-50">← Back</button>
      <Design2 />
    </>
  );

  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold text-white mb-8">Choose a Design</h1>
      <button 
        onClick={() => setView('design1')} 
        className="px-8 py-4 bg-blue-500 text-white text-xl rounded-lg font-bold hover:bg-blue-600 transition"
      >
        Design 1
      </button>
      <button 
        onClick={() => setView('design2')} 
        className="px-8 py-4 bg-purple-500 text-white text-xl rounded-lg font-bold hover:bg-purple-600 transition"
      >
        Design 2
      </button>
    </div>
  )
}

export default App
