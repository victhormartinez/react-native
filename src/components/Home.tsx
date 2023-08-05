
import React from 'react';
import { View, Text, Button } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import LogginForm from './LoginForm';
import Saludar from './saludar';

function Home({ navigation }) {
    return (
        <View>
            <Text>Pantalla de Inicio</Text>
             <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <Button title="TU Botón"></Button>
                <StatusBar style="auto" />
                <TextInput placeholder='Tu Entrada.'></TextInput>
                <LogginForm></LogginForm>
                <Saludar name='Juan Perez'></Saludar>
            </View>
            <Button title="Ir a Detalles" onPress={() => navigation.navigate('Detalles')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;
