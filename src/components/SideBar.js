import React, { useState } from "react";
import "../App.css";
import Employeedata from "./Employeedata";
import json from "../MOCK_DATA.json";
import Filter from "./Filter";
function SideBar() {
  const D = json;
  const [filteredTeam, setfilteredTeam] = useState("1");
  const filterChangeHandler = (selectedteam) => {
    setfilteredTeam(selectedteam);
  };
  const fteam = D.filter((teams) => {
    return teams.Team === filteredTeam;
  });
  return (
    <div className="sidebar">
      <div>
        <Employeedata filter={fteam} />
      </div>
      <div>
        <Filter selected={filteredTeam} onChangeFilter={filterChangeHandler} />
      </div>
    </div>
  );
}

export default SideBar;
