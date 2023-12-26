import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Box = ({ value }: any) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{value}</Text>
        </View>
    )
}

export default Box


const styles = StyleSheet.create({

    box: {
        backgroundColor: "#F9EDE3",
        flex: 1,
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#9b4931",
        borderWidth: StyleSheet.hairlineWidth
    },
    text: {
        color: "#9b4931",
        fontSize: 72,
        fontFamily: "Amatic"
    }
});
