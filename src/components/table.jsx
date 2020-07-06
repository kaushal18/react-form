import React from "react";
import "./styles/table.css";

const Table = ({ persons, onTableClick }) => {
  const renderTable = () => {
    return persons.map((person) => {
      const { pid, first_name, last_name, gender, education } = person;
      return (
        <tr key={pid} id={pid} onClick={onTableClick}>
          <td>{pid}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{gender}</td>
          <td>{education}</td>
        </tr>
      );
    });
  };

  return (
    <div className="table-responsive">
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Education</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
};

export default Table;
