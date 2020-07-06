import React from "react";
import InputText from "./common/inputText";
import RadioButton from "./common/radioButton";
import Select from "./common/select";
import Search from "./common/search";

const Form = (props) => {
  const { data, handleChange, handleSubmit, clearForm, searchByName } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Search
        data={data}
        handleChange={handleChange}
        searchByName={searchByName}
      />

      <div className="w-50">
        <InputText
          label={"First Name"}
          name={"firstName"}
          value={data["firstName"]}
          onChange={handleChange}
        />
        <InputText
          label={"Last Name"}
          name={"lastName"}
          value={data["lastName"]}
          onChange={handleChange}
        />
      </div>

      <RadioButton
        value={"male"}
        id={"gender1"}
        name={"gender"}
        label={"Male"}
        onChange={handleChange}
        isChecked={data.gender === "male"}
      />
      <RadioButton
        value={"female"}
        id={"gender2"}
        name={"gender"}
        label={"Female"}
        onChange={handleChange}
        isChecked={data.gender === "female"}
      />
      <div className="w-50">
        <Select name={"edu"} value={data["edu"]} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn-success mr-3">
        {data.personId ? "Update" : "Save"}
      </button>
      <button type="button" className="btn btn-warning" onClick={clearForm}>
        Clear
      </button>
    </form>
  );
};

export default Form;
