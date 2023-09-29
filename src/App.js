// import React from 'react';
import pokemon from "./pokemon";
import Pokegame from "./Pokegame";

import './App.css';

function App() {
  return (
    <div>
      <Pokegame pokemon={pokemon} />
    </div>
  );
}

export default App;
