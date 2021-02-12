import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, StatusBar, StyleSheet } from 'react-native';

import api from './services/api.js';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      console.log(response.data);
      setProjects(response.data);
    })
  }, [])

  return (
    <>
      <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent/>
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: 'bold',
  }
});