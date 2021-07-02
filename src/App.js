import { useState, useEffect } from 'react';

import './App.css';

import Header from './containers/header/Header';
import Main from './containers/main/Main';
import Footer from './containers/footer/Footer';


const backendURL = 'http://localhost:3000';
const bikesURL = `${backendURL}/bikes`;

function App() {

  const [bikes, setBikes] = useState([]);

  const getBikes = () => {
    fetch(bikesURL)
      .then(response => response.json())
      .then(setBikes);
  }

  useEffect(getBikes, []);

  return (
    <div className="App">
      <Header />
      <Main bikes={bikes} setBikes={setBikes} />
      <Footer />
      
    </div>
  );
}

export default App;
