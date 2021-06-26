import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function LigaItaliana() {
  const [data, setData] = useState({ scorers: [] });

  useEffect(() => {
    const fetchData = async () => {
      const clientToken = "83959dbd079647ab913cb59890c3cc6f";
      const headers = { "X-Auth-Token": clientToken };
      const resApi = await axios(
        "https://api.football-data.org/v2/competitions/SA/scorers",
        { headers }
      );
      setData(resApi.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Máximos goleadores de la Liga Italiana:</h2>
      <table style={tableStyle}>
        <th style={tableStyle}>
          <td style={tableStyle}>Futbolista:</td>
          <td style={tableStyle}>Goles:</td>
          <td style={tableStyle}>País:</td>
          <td style={tableStyle}>Equipo</td>
        </th>
        {data.scorers.map((scorer) => (
          <tr style={tableStyle}>
            <td style={tableStyle} key={scorer.player.id}>
              {scorer.player.name}
            </td>
            <td style={tableStyle}> {scorer.numberOfGoals}</td>
            <td style={tableStyle}>{scorer.player.countryOfBirth}</td>
            <td style={tableStyle} key={scorer.team.id}>
              {scorer.team.name}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

const tableStyle = {
  tableLayout: "fixed",
  width: "100",
  borderCollapse: "collapse",
  border: "solid",
};
