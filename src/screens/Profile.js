import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator, Image } from 'react-native'

export const Profile = (props) => {
    const { container, text, image } = styles
    return (
        <View style={container}>
            <Image source={{uri: 'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png'}} style={image} />
            <Text style={text}>
                User Nickname
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
    },
    image: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain'
    }
})