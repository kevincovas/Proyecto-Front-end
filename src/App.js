import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';

import LigaEspañola from './components/LigaEspañola';
import LigaItaliana from './components/LigaItaliana';
import LigaFrancesa from './components/LigaFrancesa';
import banderaEspaña from './banderaEspaña.svg.webp';
import banderaItalia from './banderaItalia.jpeg';


export default function App() {  

    return (
      <>
        <h1>Máximos goleadores temporada 2020-2021:</h1>
        <p>Selecciona una liga clicando sobre la imagen</p>

       
          <Router>
          <div className="banderas">
            <Link to="/ligaEspañola"><img class = "bandera" src={banderaEspaña}/></Link>
            <Link to="/ligaItaliana"><img class = "bandera" src={banderaItalia}/></Link>
            </div>
            <Route path="/ligaEspañola" component={LigaEspañola}></Route>
            <Route path="/ligaItaliana" component={LigaItaliana}></Route>
          </Router>
        
      </>
    );
  
}


