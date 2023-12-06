import { Component } from "react";
import { Phonebook } from "./Phonebook/Phonebook";
import contactsInfo from '../contactsInfo'

export default class App extends Component {
  render() {
    return (
      <Phonebook contactsInfo={contactsInfo}/>
    );
  }
}