import React from "react";

const Select = ({ name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>Select Education</label>
      <select
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option></option>
        <option>UG</option>
        <option>PG</option>
      </select>
    </div>
  );
};

export default Select;
