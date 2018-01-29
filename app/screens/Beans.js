import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import text from '../styles/text';

export default class Beans extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={text.p}>Beans Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
