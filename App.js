import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/screens/HomeScreen'
import LoginScreen from './app/screens/LoginScreen'
import NewBrewScreen from './app/screens/NewBrewScreen'
import BeansScreen from './app/screens/BeansScreen'

const SimpleApp = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Login: { 
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  NewBrew: {
    screen: NewBrewScreen,
    navigationOptions: {
      headerTitle: 'Brew',
    },
  },
  Beans: {
    screen: BeansScreen,
    navigationOptions: {
      headerTitle: 'Beans',
    },
  },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
