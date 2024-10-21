// src/screens/PatientsListScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { patients } from '../data/dummyData';

const PatientsListScreen = ({ navigation }) => {
  const renderPatientItem = ({ item }) => (
    <TouchableOpacity
      style={styles.patientItem}
      onPress={() => navigation.navigate('PatientDetails', { patientId: item.id })}
    >
      <Image source={{ uri: item.photo }} style={styles.patientPhoto} />
      <View style={styles.patientInfo}>
        <Text style={styles.patientName}>{item.name}</Text>
        <Text style={styles.patientCondition}>{item.condition}</Text>
        <Text style={styles.patientDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={patients}
        renderItem={renderPatientItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddPatient')}
      >
        <Text style={styles.addButtonText}>Add Patient</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  patientItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  patientPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  patientCondition: {
    fontSize: 14,
    color: 'gray',
  },
  patientDescription: {
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PatientsListScreen;