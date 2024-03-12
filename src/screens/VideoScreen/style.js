import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    videContainer: {
        height: '50%',
        width: '100%'
    }
})

export default style;