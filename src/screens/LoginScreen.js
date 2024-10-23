import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image ,Text} from 'react-native';
import meditrack from '../../assets/meditrack-logo1.png'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Image
        source={meditrack}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}  
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" color={'#044956'} onPress={handleLogin} />
      <Text style={styles.registerText}>
        Don't have an account? &nbsp;
        <Text 
          style={styles.registerLink} 
          onPress={() => navigation.navigate('Register')}
        > 
             Register
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  registerText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16
  },
  registerLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;