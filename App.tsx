import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/Home';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Agendamento from './screens/Agendamento';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Login" component={Login}/>
        <Stack.Screen name ="Home" component={Home}/>
        <Stack.Screen name ="Cadastrar" component={Cadastro}/>
        <Stack.Screen name ="Agendar" component={Agendamento}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


