import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent/>
      <View style={styles.container}>
        <Text style={styles.title}>Hello, world!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: 'bold',
  }
});