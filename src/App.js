import React from 'react';
//import axios from 'axios';
import LigaEspañola from './components/LigaEspañola';
import LigaInglesa from './components/LigaInglesa';
import LigaItaliana from './components/LigaItaliana';
import LigaFrancesa from './components/LigaFrancesa';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.seleccionLiga = this.seleccionLiga.bind(this);

    this.state = {
      ligaEspañola:[],
      premierLeague: [],
      serieA: [],
      league1: [],
      checked: false,
      ligaSeleccionada: "",
    }
    
  }

  seleccionLiga(event){
    this.setState({ligaSeleccionada: event.target.value});
    console.log(this.state.ligaSeleccionada);
    //this.setState({checked: true});
  }

  render() {
    return (
      <>
      {/* <form>
        <label>
          Elige una liga:
          
        </label>

        <br></br>
        <br></br>

        <label>
          <input type="radio" 
                 value="LigaEspañola"
                 checked={this.state.checked}
                 onChange={this.seleccionLiga}
          />
          Liga Española
        </label>
        <br></br>
        <label>
          <input type="radio" value="LigaInglesa"/>
          Liga Inglesa
        </label>
        <br></br>
        <label>
          <input type="radio" value="LigaItaliana"/>
          Liga Italiana
        </label>
        <br></br>
        <label>
          <input type="radio" value="LigaFrancesa"/>
          Liga Francesa
        </label>
      </form> */}

        <h1>Máximos goleadores temporada 2020-2021:</h1>
        <p>A continuación vamos a mostrar los 10 máximos goleadores de las mejores ligas del mundo.</p>
        
        <LigaEspañola />
        <LigaInglesa />
        <LigaItaliana />
        <LigaFrancesa />
      </>
    );
  }

}

const tableStyle = {
  
  tableLayout: 'fixed',
  width: '100',
  borderCollapse: 'collapse',
  border: 'solid',

  
};

