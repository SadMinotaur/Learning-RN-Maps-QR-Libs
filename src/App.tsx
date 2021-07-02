import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QR from './QR';
import Home from './Home';
import Sms from './Sms';
import RNBootSplash from 'react-native-bootsplash';

const Stack = createStackNavigator();

export default () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QR" component={QR} />
        <Stack.Screen name="Sms" component={Sms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
