import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import text from '../styles/text';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={text.p}>Coffee Tracker</Text>
        <Text>A coffee tracking app for the at-home barista.</Text>
        <Text>Hi Megan and Gizmo</Text>
      </View>
    );
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
