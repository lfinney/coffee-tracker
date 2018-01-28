import React from 'react';
import { Navigator } from 'react-native';
import text from './app/styles/text';

export default class App extends React.Component {
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
