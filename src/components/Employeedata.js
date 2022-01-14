import { useState } from "react";
import "./SearchBar.css";
import json from "../MOCK_DATA.json";
function Employeedata(props) {
  const data = json;
  const F = props.filter;
  //console.log(F);
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div className="background">
      <div className="searchbox">
        <input
          className="searchtext"
          type="text"
          placeholder="Search here..."
          onChange={(e) => {
            setsearchTerm(e.target.value);
          }}
        />
      </div>
      <div>
        <h2 className="heading">Employees list</h2>
      </div>
      <div className="container">
        <table className="table table-border">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {F.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.Name.toLocaleLowerCase().includes(
                  searchTerm.toLocaleLowerCase()
                ) ||
                val.Designation.toLocaleLowerCase().includes(
                  searchTerm.toLocaleLowerCase()
                ) ||
                val.Team.toLocaleLowerCase().includes(
                  searchTerm.toLocaleLowerCase()
                )
              ) {
                return val;
              }
            }).map((m) => (
              <tr key={m.Id}>
                <td>{m.Name}</td>
                <td>{m.Designation}</td>
                <td>{m.Team}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employeedata;
