import React from "react";

const InputText = ({ label, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
