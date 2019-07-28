
import React, { Component } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
export default class Item extends Component {
    render() {
        const avatar = this.props.avatar
        const image = this.props.image
        const name = this.props.name
        const likes = this.props.likes
        return (
            <View style={stype.container}>
                <View style={stype.info}>
                    <Image
                        style={stype.avatar}
                        source={{ uri: avatar }}
                    />
                    <Text>{name}</Text>
                </View>
                <Image
                    style={stype.image}
                    source={{ uri: image }}
                />
                <View style={stype.options}>
                    <IconOcticons name="heart" size={20} style={{marginRight: 5}}/>
                    <IconOcticons name="comment" size={20} style={{marginRight: 5}}/>
                    <IconAntDesign name="upload" size={20} style={{marginRight: 5}}/>
                </View>
                <View style={stype.likes}>
                    <IconOcticons name="heart" size={20}/>
                    <Text>{likes} likes</Text>
                </View>
            </View>
        )
    }
}
const stype = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        padding:10
    },
    avatar: {
        width: 50,
        height: 50
    },
    image: {
        width: 400,
        height: 400,
        margin: 5
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    options: {
        flexDirection: 'row',
        margin: 5
    },
    likes: {
        flexDirection: 'row'
    }
})