import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import text from '../styles/text';

export default class NewBrew extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={text.p}>NewBrew Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
