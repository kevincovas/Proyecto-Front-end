import React from 'react';


import LigaEspañola from './components/LigaEspañola';
import LigaItaliana from './components/LigaItaliana';
import LigaFrancesa from './components/LigaFrancesa';


export default function App() {  

    return (
      <>
        <h1>Máximos goleadores temporada 2020-2021:</h1>
        <p>A continuación vamos a mostrar los 10 máximos goleadores de las mejores ligas del mundo.</p>
        
        <LigaEspañola />
        <LigaFrancesa />
        <LigaItaliana />
      
      </>
    );
  
}

const tableStyle = {
  
  tableLayout: 'fixed',
  width: '100',
  borderCollapse: 'collapse',
  border: 'solid',

  
};

