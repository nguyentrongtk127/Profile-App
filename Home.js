/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    ScrollView
} from 'react-native';
import Item from './item'
const distanceLayout = 2
const Home = () => {
    return (
        <View style={{
            padding: distanceLayout,
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
        }}>
            <View style={{
                flexDirection: 'row',
                flex: 0.2,
                backgroundColor:'#EEEEEE' 
            }}>
                <View style={{ flex: 0.2 }}></View>
                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Instagram</Text>
                </View>
                <View style={{ flex: 0.2 }}></View>
            </View>
            <View style={{
                flex: 0.8,
            }}>
                <ScrollView>
                    <Item
                        avatar='https://png.pngtree.com/svg/20170602/0db185fb9c.png'
                        image='http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-10_044127763.jpg'
                        name='Jonh'
                        likes='10'
                    />
                    <Item
                        avatar='https://png.pngtree.com/svg/20170602/0db185fb9c.png'
                        image='http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-10_044127763.jpg'
                        name='Jonh'
                        likes='10'
                    />
                    <Item
                        avatar='https://png.pngtree.com/svg/20170602/0db185fb9c.png'
                        image='http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-10_044127763.jpg'
                        name='Jonh'
                        likes='10'
                    />
                    <Item
                        avatar='https://png.pngtree.com/svg/20170602/0db185fb9c.png'
                        image='http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-10_044127763.jpg'
                        name='Jonh'
                        likes='10'
                    />
                </ScrollView>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({

});

export default Home;
