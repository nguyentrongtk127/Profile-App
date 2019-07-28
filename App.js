/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import IconIonicons from 'react-native-vector-icons/Ionicons'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  ScrollView
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
              backgroundColor: 'blue',
              width: 100,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <Button title="Follow" color="white" />
            </View>
            <View style={{
              marginLeft: 10,
              backgroundColor: '#3399FF',
              width: 60,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <IconIonicons name="md-send" size={20} style={{ color: 'white' }} />
            </View>

          </View>
        </View>
      </View>
      <View style={{
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center'
      }}>
        <View style={{
          justifyContent: 'center',
          padding: distanceLayout,
          flexDirection: 'column',
          flex: 0.8,
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 20,
            padding: distanceLayout,
            fontWeight: 'bold',
          }}>210</Text>
          <Text style={{
            padding: distanceLayout,
          }}>Photos</Text>
        </View>
        <View style={{
          justifyContent: 'center',
          padding: distanceLayout,
          flexDirection: 'column',
          flex: 0.8,
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 20,
            padding: distanceLayout,
            fontWeight: 'bold'
          }}>15k</Text>
          <Text style={{
            padding: distanceLayout,
          }}>Followers</Text>
        </View>
        <View style={{
          justifyContent: 'center',
          padding: distanceLayout,
          flexDirection: 'column',
          flex: 0.8,
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 20,
            padding: distanceLayout,
            fontWeight: 'bold'
          }}>605</Text>
          <Text style={{
            padding: distanceLayout,
          }}>Following</Text>
        </View>
      </View>

      <View style={{
        flex: 0.7,
        margin: 20,
      }}>
        <FlatList
          data={[{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }
          ,{ key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, {key: '9'}
        ]}
          renderItem={({ item }) => {
            return <Image
              style={{ width: 130, height: 130, justifyContent: 'center', borderRadius: 20, margin: 10 }}
              source={{ uri: 'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-10_044127763.jpg' }}
            />

          }}
          numColumns = {2}
        />
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
