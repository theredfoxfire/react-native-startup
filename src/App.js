// @flow
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    marginLeft: 60,
  },
})

export default function App() {
  return <View style={styles.container}><Text>Hello World!</Text></View>;
}
