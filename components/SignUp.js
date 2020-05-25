import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "firebase";

export default class SignUp extends React.Component {
  componentDidMount() {
    var config = {
        apiKey: "AIzaSyAZzfXW8nCcF6pFnaCn3Mjty2SgqTHAzcY",
        authDomain: "flightsearch-8ccc8.firebaseapp.com",
        databaseURL: "https://flightsearch-8ccc8.firebaseio.com",
        projectId: "flightsearch-8ccc8",
        storageBucket: "flightsearch-8ccc8.appspot.com",
        messagingSenderId: "596134627436",
        appId: "1:596134627436:web:0021c6f14d54f48c0c3049",
        measurementId: "G-FBTLX1HZJC"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.setState({
        email: "",
        password: ""
      });
  }
  createUser = () => {
    if (this.state.email != ""){
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(function (response) {
            console.log(response.user.email + " created successfully");
        })
        .catch(function (error) {
            console.log(error.code);
            console.log(error.message);
        });
        this.props.navigation.navigate("Login")
    }else{
        alert("Login field(s) are empty!")
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Register</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Email"
          autoCompleteType="email"
            onChangeText={value => {
              this.setState({
                email: value,
              });
          }}
        />
        <TextInput
          style={styles.textBox}
          placeholder="Password"
          secureTextEntry
            onChangeText={value => {
              this.setState({
                password: value,
              });
          }}
        />
        <View style={styles.buttons}>
          <Button
            style={{ margin: 10 }}
            title="Create User"
            color="red"
            onPress={() => this.createUser()}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  textBox: {
    height: 40,
    width: 200,
    backgroundColor: "#fff",
    color: "black",
    marginBottom: 10,
    padding: 10
  },
  buttons: {
    width: 200,
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 6,
  },
});