import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import text from '../styles/text';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={text.p}>Login Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a55',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
