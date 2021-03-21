import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Proptypes from "prop-types";

const weatherOption = {
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38']
    }
    ,
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#e66465', '#9198e5']
    }
};
export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOption[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle='light-content' />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOption[condition].iconName} color='white' />
                <Text style={styles.temp}>{temp}o</Text>
            </View>
            <View style={styles.halfContainer} >
                <Text style={styles.title}>
                    Title
                </Text>
                <Text style={styles.subTitle}>Subtitle</Text>
            </View>
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
        , 'Haze'
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
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: 'white',
        fontWeight: "600"
    }
});