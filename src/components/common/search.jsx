import React from "react";
import InputText from "./inputText";

const Search = ({ data, handleChange, searchByName }) => {
  return (
    <div className="row">
      <div className="col">
        <InputText
          label={"Search by first name"}
          name={"search"}
          value={data["search"]}
          onChange={handleChange}
        />
      </div>
      <div className="col" style={{ paddingTop: "30px" }}>
        <button
          type="button"
          className="btn btn-success"
          onClick={searchByName}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
