import React, { Component} from "react";
import { StyleSheet, Text, View, Button, ScrollView, Keyboard, TouchableWithoutFeedback} from "react-native";

export default class Results extends Component {
  show() {
    return !this.props.return
      ? this.props.flights.map((flight) => {
          if (
             flight.origin === this.props.origin &&
             flight.destination === this.props.destination &&
             flight.date === this.props.dept_date
          ) {
            return (
              <View key={flight.id} style={styles.box}>
                <Text>Cost: {flight.cost * this.props.passengers}</Text>
                <Text>{flight.id}</Text>
                <Text>Origin: {this.props.origin}</Text>
                <Text>Destination: {this.props.destination}</Text>
                <Text>Depart Time: {flight.depart_Time}</Text>
                <Button style={{ marginTop: "5%" }} title="Book now" />
              </View>
              
            );
          }
        })
      :  this.props.flights.map((flight) => {
            return this.props.flights.map((flight2) =>{  
                if (
                    flight.origin === this.props.origin &&
                    flight.destination === this.props.destination &&
                    flight.date === this.props.dept_date &&
                    flight2.date === this.props.return_date &&
                    flight2.origin === this.props.destination
                ){
                    return (
                        <View key={flight.id} style={styles.boxHor}>
                            <View style={styles.boxHalf}>
                                <Text>Cost: {flight.cost * this.props.passengers * 2}</Text>
                                <Text>{flight.id}</Text>
                                <Text>Origin: {this.props.origin}</Text>
                                <Text>Destination: {this.props.destination}</Text>
                                <Text>Depart Time: {flight.depart_Time}</Text>
                                <Button style={{ marginTop: "5%" }} title="Book now" />
                            </View>
                            <View style={styles.boxHalf}>
                                <Text>{flight2.id}</Text>
                                <Text>Return From: {flight2.origin}</Text>
                                <Text>Date: {flight2.date}</Text>
                                <Text>Depart Time: {flight2.depart_Time}</Text>
                            </View>
                        </View>
                    );
                }
            })
        });
  }

  // cool(){
  //     return(
  //       <View>
  //           <Text>Cost: </Text>
  //           <Text>Origin:</Text>
  //           <Text>Destination: </Text>
  //           <Text>Depart Time: </Text>
  //           <Button style={{ marginTop: "5%" }} title="Book now" />
  //       </View>
  //     )
  // }

  render() {
    if (this.props.submitted) {
      let i  = 0;
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView key={i}style={{height: 280, borderWidth: 1, borderLeftWidth: 0,  borderRightWidth: 0}} >
              {this.show()}
          </ScrollView>
        </TouchableWithoutFeedback>
      );
      i+=1;
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  box: {
    margin: '2%',
    overflow: 'scroll',
  },
  boxHor: {
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    height: "auto",
    flex: 1,
    flexDirection: "row",
  },
  boxHalf: {
    flex: 1,
  },
});