import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import PatientsListScreen from './src/screens/PatientsListScreen';
import AddPatientScreen from './src/screens/AddPatientScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="PatientsList" component={PatientsListScreen} options={{ title: 'My Patients' }} />
        <Stack.Screen name="AddPatient" component={AddPatientScreen} options={{ title: 'Add Patient' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;