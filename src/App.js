import React, { Component } from "react";
import Form from "./components/form";
import Table from "./components/table";
import {
  getPersons,
  getPersonByName,
  getPersonById,
  addPerson,
  updatePerson,
} from "./services/handleData";
import "./App.css";

class App extends Component {
  state = {
    data: {
      search: "",
      personId: "",
      firstName: "",
      lastName: "",
      gender: "",
      edu: "",
    },
    persons: [],
  };

  async componentDidMount() {
    const { data: persons } = await getPersons();
    this.setState({ persons });
  }

  handleChange = (event) => {
    const input = event.currentTarget;
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // if person has id -> update
    if (!this.state.data.personId) {
      await addPerson(this.state.data);
    } else {
      await updatePerson(this.state.data);
    }

    const { data: persons } = await getPersons();
    this.setState({ persons: persons });
    alert("data saved");
    this.clearForm();
  };

  clearForm = () => {
    const clearData = {
      search: "",
      personId: "",
      firstName: "",
      lastName: "",
      gender: "",
      edu: "",
    };
    this.setState({ data: clearData });
  };

  searchByName = async () => {
    const firstName = this.state.data.search;
    if (!firstName) return;
    const { data: person } = await getPersonByName(firstName);

    if (person.length === 0) return;
    const newPerson = {
      search: "",
      personId: person[0].pid,
      firstName: person[0].first_name,
      lastName: person[0].last_name,
      gender: person[0].gender,
      edu: person[0].education,
    };
    this.setState({ data: newPerson });
  };

  handleTableClick = async (event) => {
    console.log(event.currentTarget);
    const { data: person } = await getPersonById(event.currentTarget.id);
    const newPerson = {
      search: "",
      personId: person[0].pid,
      firstName: person[0].first_name,
      lastName: person[0].last_name,
      gender: person[0].gender,
      edu: person[0].education,
    };
    this.setState({ data: newPerson });
  };

  render() {
    const { data, persons } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <Form
              data={data}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              clearForm={this.clearForm}
              searchByName={this.searchByName}
            />
          </div>
          <div className="col-sm-6">
            <Table persons={persons} onTableClick={this.handleTableClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
