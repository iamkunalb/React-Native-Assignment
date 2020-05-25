import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Search';
import Results from './Results';
import Data from "../assets/Data.json"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      origin: "N/A",
      destination: "N/A",
      dept_date: "2020-06-01",
      return_date: null,
      passengers: 0,
      submitted: false,
      return: false,
      flights: []
    };
  }

  handleChange = (data,value) => {
    this.setState({
      [data]: value,
    });
  };

  handleSwitch = () =>
    this.setState({
      return: !this.state.return,
    })

  handleSubmit = () => {
      if (this.state.passengers < 1){
        this.setState({
            passengers: 1
        })
      }
    this.setState({
      submitted: true,
      flights: Data,
    })
  }


  render(){
    return (
      <View>
        <Search handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
        handleSwitch = {this.handleSwitch}
        return = {this.state.return}/>
        
        <Results submitted={this.state.submitted}
        flights = {this.state.flights}
        origin = {this.state.origin}
        destination = {this.state.destination}
        dept_date = {this.state.dept_date}
        return_date = {this.state.return_date}
        passengers = {this.state.passengers}
        return = {this.state.return}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});