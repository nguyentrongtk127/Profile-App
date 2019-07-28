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
  Button
} from 'react-native';

import {
 
} from 'react-native/Libraries/NewAppScreen';
const distanceLayout = 2
const App = () => {
  return (
    <View style={{
      padding: distanceLayout,
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center'
    }}>
      <View style={{
        flexDirection: 'row',
        flex: 0.2,
      }}>
        <View style={{
          flex: 0.4,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            style={{ width: 66, height: 66, justifyContent: 'center' }}
            source={require('./assets/avatar.png')}
          />
        </View>
        <View style={{
          justifyContent: 'center',
          padding: distanceLayout,
          flexDirection: 'column',
          flex: 0.6,
        }}>
          <View style={{
            justifyContent: 'center',
            padding: distanceLayout,
            flexDirection: 'column',
            flex: 0.8,
          }}>
            <Text style={{
              fontSize: 20,
              padding: distanceLayout,
              fontWeight: 'bold'
            }}>Nguyen Trong</Text>
            <Text style={{
              padding: distanceLayout,
            }}>Developer</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            flex: 0.2,
          }}> 
            <View style={{
              backgroundColor:'blue',
              width: 100,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}>
              <Button title="Follow" color="white"/>
            </View>
            <View style={{
              marginLeft:10,
              backgroundColor:'#3399FF',
              width: 60,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Button title=">>" color="white"/>
            </View>

          </View>
        </View>
      </View>
      <View style={{
        flex: 0.1,
        backgroundColor: 'blue'
      }}>

      </View>
      <View style={{
        flex: 0.7,
        backgroundColor: 'yellow'
      }}>
        
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  baseLayout: {
    justifyContent: 'center',
    padding: distanceLayout
  }
});

export default App;
