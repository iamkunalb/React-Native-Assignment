import React, { Component} from "react";
import { View, Text, StyleSheet, Button, Keyboard, TouchableWithoutFeedback  } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "firebase";

export default class Login extends React.Component {
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

  authenUser = () => {
    if (this.state.email != ""){
          firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            console.log(this.state.email + " logged in successfully");
              this.props.navigation.navigate("Main")
            })
            .catch(function (error) {
                console.log(error.code);
                console.log(error.message);
                alert("Email or Password is wrong!")
            });
    }else{
        alert("Login field(s) are empty!")
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>Login</Text>
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
              style={{ margin: 10}}
              title="LOGIN"
              onPress={() => this.authenUser()}
            />
          </View>
          
          <View style={styles.buttons}>
            <Button
              style={{ margin: 10}}
              title="Register"
              color="red"
              onPress={() => this.props.navigation.navigate("SignUp")}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
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