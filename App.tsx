import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Section from './src/components/Section';
import NavigationTabs from './src/components/Navigation'; // Cambié el nombre del componente Navigation a NavigationTabs

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Detalles" component={Section} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
