//import { useState } from "react";
import "./Filter.css";
function Filter(props) {
  const ChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="filter">
      <label className="term">Filter by team</label>
      <select
        className="options"
        value={props.selected}
        onChange={ChangeHandler}
      >
        <option value="1">team 1</option>
        <option value="2">team 2</option>
        <option value="3">team 3</option>
      </select>
    </div>
  );
}

export default Filter;
