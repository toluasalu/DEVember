import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

type BoxItem = {
    value: number;
}
const Box = ({ value }: BoxItem) => {
    return (
        <Link href={`/day${value}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{value}</Text>
            </Pressable>
        </Link>
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
