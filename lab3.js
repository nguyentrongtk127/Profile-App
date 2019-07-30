import React  from 'react' 
import {View, Text, StyleSheet} from 'react-native'

const TieGame = ()  =>{
    return (
        <View style={style.container}>
            <View style={style.header}></View>
            <View style={style.screen}></View>
            <View style={style.controller}></View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'gray'
    },
    header: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        flex: 0.5,
        borderWidth: 10,
        borderColor: '#d6d7da',
        backgroundColor: 'white'
    },
    controller:{
        flex: 0.4,
        justifyContent: 'space-around'
    }
})

export default TieGame;