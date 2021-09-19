import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native'

function WelcomeScreen(props) {
    return (
       <View style={styles.container}>
           <Text style={styles.title}>TrackFit</Text>
           <Text style={styles.motto}>Your Personal Fitness Journal</Text>
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171F38',
        alignItems: 'center',
        justifyContent: 'center',
    },

    motto: {
        color: 'white',
        fontSize: 20,
        top: 50,
    },

    title: {
        color: 'white',
        fontSize: 80,
        position: 'absolute',
        top: 300,
    },
})
export default WelcomeScreen;