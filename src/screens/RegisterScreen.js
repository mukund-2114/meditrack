import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, Alert, ScrollView } from 'react-native';
import { registerUser } from '../services/api'; // Assume this function exists in your API service
import meditrack from '../../assets/meditrack-logo1.png'
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // Require at least 8 characters, one uppercase, one lowercase, and one number
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async () => {
    const test = await axios.get('https://6bbc-2607-fea8-351e-f100-14f1-f5b9-c8-142e.ngrok-free.app/')
    console.log(test)
    setErrors({});
    let newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(email)) newErrors.email = "Invalid email format";
    if (!password) newErrors.password = "Password is required";
    else if (!isValidPassword(password)) newErrors.password = "Password must be at least 8 characters long and include uppercase, lowercase, and numbers";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const userData = { username, email, password, role: 'user' };
      await registerUser(userData);
      Alert.alert('Success', 'Registration successful', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);
    } catch (error) {
      Alert.alert('Error', error.message || 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={meditrack} // Make sure to add your logo
        style={styles.logo}
      />
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={[styles.input, errors.username && styles.inputError]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
      <TextInput
        style={[styles.input, errors.email && styles.inputError]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        style={[styles.input, errors.password && styles.inputError]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      <TextInput
        style={[styles.input, errors.confirmPassword && styles.inputError]}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
      <Button 
        title={isLoading ? "Registering..." : "Register"} 
        onPress={handleRegister}
        disabled={isLoading}
      />
      <Text style={styles.loginText}>
        Already have an account? 
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}> Login</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;