import React from 'react';
import axios from 'axios';

export default class LigaEspañola extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          ligaEspañola:[]
        }
      }
    
      render() {
        return (
          <>
            <h2>Máximos goleadores de la Liga Española:</h2>
            <table style={tableStyle}>
              <th style={tableStyle}>
                <td style={tableStyle}>Futbolista:</td>
                <td style={tableStyle}>Goles:</td>
                <td style={tableStyle}>País:</td>
                <td style={tableStyle}>Equipo</td>
              </th>
              {this.state.ligaEspañola.map((scorer) => (
              <tr style={tableStyle}>
                <td style={tableStyle} key={scorer.player.id}>{scorer.player.name}</td>
                <td style={tableStyle}> {scorer.numberOfGoals}</td>
                <td style={tableStyle}>{ scorer.player.countryOfBirth}</td>
                <td style={tableStyle} key={scorer.team.id}>{scorer.team.name}</td>
              </tr>))}
            </table>
          </>
        );
      }
    
    
      async componentDidMount(){
        
        const clientToken = "83959dbd079647ab913cb59890c3cc6f";
        const headers = {'X-Auth-Token': clientToken};
        
        const res = await axios.get("https://api.football-data.org/v2/competitions/", {headers});
        const ligaEspañola = await axios.get("https://api.football-data.org/v2/competitions/PD/scorers", {headers});
        
    
        //Console logs
        console.log(ligaEspañola.data);
        this.setState({ligaEspañola: ligaEspañola.data.scorers});
        const info = this.state.ligaEspañola;
        //console.log(info);
      }
    
}
const tableStyle = {
      
      tableLayout: 'fixed',
      width: '100',
      borderCollapse: 'collapse',
      border: 'solid',
    
      
};

