import axios from "axios";

const URL = "http://localhost:5000/api/persons";

export function getPersons() {
  return axios.get(URL);
}

export function getPersonByName(name) {
  return axios.get(`${URL}/name/${name}`);
}

export function getPersonById(id) {
  return axios.get(`${URL}/pid/${id}`);
}

export function addPerson(person) {
  const personObj = {
    firstName: person.firstName,
    lastName: person.lastName,
    education: person.edu,
    gender: person.gender,
  };
  return axios.post(URL, personObj);
}

export function updatePerson(person) {
  const personObj = {
    personId: person.personId,
    firstName: person.firstName,
    lastName: person.lastName,
    education: person.edu,
    gender: person.gender,
  };
  return axios.put(URL, personObj);
}
