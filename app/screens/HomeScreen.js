import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import text from '../styles/text';

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={text.p}>Home Screen</Text>
        <Button
          onPress={() => navigation.navigate('NewBrew')}
          title="New Brew"
        />
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
