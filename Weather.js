import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Proptypes from "prop-types";


export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={['#4c699f', '#3b5998', '#192f6a']}
            style={styles.container}
        >
            <StatusBar barStyle='light-content' />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name="weather-lightning-rainy" color='white' />
                <Text style={styles.temp}>{temp}o</Text>
            </View>
            <View style={styles.halfContainer} />
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: Proptypes.number.isRequired,
    condition: Proptypes.oneOf([
        "Thunderstorm"
        , 'Drizzle'
        , 'Rain'
        , 'Snow'
        , 'Atmosphere'
        , 'Clear'
        , 'Clouds'
        , "Mist"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});