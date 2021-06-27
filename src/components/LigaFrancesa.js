import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function LigaFrancesa() {
  const [data, setData] = useState({ scorers: [] });

  useEffect(() => {
    const fetchData = async () => {
      const clientToken = "83959dbd079647ab913cb59890c3cc6f";
      const headers = { "X-Auth-Token": clientToken };
      const resApi = await axios(
        "https://api.football-data.org/v2/competitions/FL1/scorers",
        { headers }
      );
      console.log(resApi.data);
      setData(resApi.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Máximos goleadores de la Liga Francesa:</h2>
      <table>
        <thead>
          <tr>
            <th>Futbolista:</th>
            <th>Goles:</th>
            <th>País:</th>
            <th>Equipo</th>
          </tr>
        </thead>
        {data.scorers.map((scorer) => (
          <tr>
            <td key={scorer.player.id}>{scorer.player.name}</td>
            <td> {scorer.numberOfGoals}</td>
            <td>{scorer.player.countryOfBirth}</td>
            <td key={scorer.team.id}>{scorer.team.name}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
