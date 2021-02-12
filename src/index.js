import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

import api from './services/api.js';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data);
    })
  }, [])

  async function handleAddProject() {
    const res = await api.post('/projects', {
      title: `Novo Projecto ${Date.now()}`
    })

    setProjects([...projects, res.data]);
  }

  return (
    <>
      <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent/>
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <>
              <Text style={styles.project}>{project.title}</Text>
            </>
          )}
        />
        <TouchableOpacity translucent style={styles.button} onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    height: 70,
    margin: 20,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});