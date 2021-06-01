import React from 'react';
import './App.css';
import MapContainer from './MapContainer'
import DataHandler from './DataHandler'

function App() {

  return (
    <div class='wrapper'>
      <div class='map'>
        <MapContainer>
        </MapContainer>
      </div>
      <div class='input-wrapper'>
        <DataHandler/>
      </div>
    </div>
  );
}

export default App;
