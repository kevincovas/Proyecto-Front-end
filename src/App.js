import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      ligaEspañola:[],
      premierLeague: [],
      serieA: [],
      league1: [],
    }
  }
  render() {
    return (
      <>
        <h1>Máximos goleadores temporada 2020-2021:</h1>
        <p>A continuación vamos a mostrar los 10 máximos goleadores de las mejores ligas del mundo.</p>
        
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

        <h2>Máximos goleadores de la Liga Inglesa:</h2>
        <table style={tableStyle}>
          <th style={tableStyle}>
            <td style={tableStyle}>Futbolista:</td>
            <td style={tableStyle}>Goles:</td>
            <td style={tableStyle}>País:</td>
            <td style={tableStyle}>Equipo</td>
          </th>
          {this.state.premierLeague.map((scorer) => (
          <tr style={tableStyle}>
            <td style={tableStyle} key={scorer.player.id}>{scorer.player.name}</td>
            <td style={tableStyle}> {scorer.numberOfGoals}</td>
            <td style={tableStyle}>{ scorer.player.countryOfBirth}</td>
            <td style={tableStyle} key={scorer.team.id}>{scorer.team.name}</td>
          </tr>))}
        </table>

        <h2>Máximos goleadores de la Liga Italiana:</h2>
        <table style={tableStyle}>
          <th style={tableStyle}>
            <td style={tableStyle}>Futbolista:</td>
            <td style={tableStyle}>Goles:</td>
            <td style={tableStyle}>País:</td>
            <td style={tableStyle}>Equipo</td>
          </th>
          {this.state.serieA.map((scorer) => (
          <tr style={tableStyle}>
            <td style={tableStyle} key={scorer.player.id}>{scorer.player.name}</td>
            <td style={tableStyle}> {scorer.numberOfGoals}</td>
            <td style={tableStyle}>{ scorer.player.countryOfBirth}</td>
            <td style={tableStyle} key={scorer.team.id}>{scorer.team.name}</td>
          </tr>))}
        </table>

        <h2>Máximos goleadores de la Liga Francesa:</h2>
        <table style={tableStyle}>
          <th style={tableStyle}>
            <td style={tableStyle}>Futbolista:</td>
            <td style={tableStyle}>Goles:</td>
            <td style={tableStyle}>País:</td>
            <td style={tableStyle}>Equipo</td>
          </th>
          {this.state.league1.map((scorer) => (
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

  // componentDidMount(){
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then(res => {
  //     this.setState({users: res.data})
  //   })
  // }

  // También lo podemos hacer asíncrono
  async componentDidMount(){
    
    const clientToken = "83959dbd079647ab913cb59890c3cc6f";
    const headers = {'X-Auth-Token': clientToken};
    
    const res = await axios.get("https://api.football-data.org/v2/competitions/", {headers});
    const ligaEspañola = await axios.get("https://api.football-data.org/v2/competitions/PD/scorers", {headers});
    const premierLeague = await axios.get("https://api.football-data.org/v2/competitions/PL/scorers", {headers});
    const serieA = await axios.get("https://api.football-data.org/v2/competitions/SA/scorers", {headers});
    const league1 = await axios.get("https://api.football-data.org/v2/competitions/FL1/scorers", {headers});

    //Console logs
    this.setState({ligaEspañola: ligaEspañola.data.scorers});
    const info = this.state.ligaEspañola;
    console.log(info);
    this.setState({premierLeague: premierLeague.data.scorers});
    const info2 = this.state.premierLeague;
    console.log(info2);
    this.setState({serieA: serieA.data.scorers});
    const info3 = this.state.serieA;
    console.log(info3);
    this.setState({league1: league1.data.scorers});
    const info4 = this.state.league1;
    console.log(info4);
  
  }
}

const tableStyle = {
  
  tableLayout: 'fixed',
  width: '100',
  borderCollapse: 'collapse',
  border: 'solid',

  
};

