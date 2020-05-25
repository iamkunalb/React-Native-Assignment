import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./components/Main"
import LoginScreen from "./components/Login"
import SignUpScreen from "./components/SignUp"

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  SignUp: {screen: SignUpScreen},
  Main: {screen: HomeScreen},
});

export default createAppContainer(MainNavigator)