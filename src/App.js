import React, { useState, useEffect} from 'react';
import './App.css';
import {csv} from 'd3';
import csvfile from './20_cities.csv'
import { GoogleMap, useJsApiLoader, DistanceMatrixService } from '@react-google-maps/api';
import MapContainer from './MapContainer'
import InputForm from './InputForm'

function getCities(data, country) {

  let cities = [];

  data.forEach(item => {
    if (item.country === country) {
      cities.push(item);
    }
  })

  return cities
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(csvfile).then(data => {
      setData(data);
    });
  }, []);

  console.log(getCities(data, 'United States'));

  return (
    <div>
      <MapContainer>
      </MapContainer>
      
      <InputForm></InputForm>

    </div>
  );
}

export default App;
