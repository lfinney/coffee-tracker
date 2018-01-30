import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import text from '../styles/text';
import button from '../styles/button';

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={text.title}>Home Screen</Text>
        <TouchableOpacity
          style={button.nav}
          onPress={() => navigation.navigate('NewBrew')}
        >
          <Text>Brew</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={button.nav}
          onPress={() => navigation.navigate('Beans')}
        >
          <Text>Beans</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bad',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
