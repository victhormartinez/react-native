import  react from "react";
import {TextInput, Button, View, Text} from "react-native";

export default function Saludar(props) {
    const { name } = props;
    return (
        <View>
            <Text>Saludando a : { name }</Text>
        </View>
    )
}