import React from "react";

const RadioButton = ({ value, id, name, label, onChange, isChecked }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={isChecked}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
