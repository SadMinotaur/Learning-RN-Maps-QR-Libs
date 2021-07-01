import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';

export default () => {
  const nav = useNavigation();
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Button onPress={() => nav.navigate('Sms')} color="grey" title="Sms" />
      <Button onPress={() => nav.navigate('Map')} color="blue" title="Map" />
      <Button onPress={() => nav.navigate('QR')} color="red" title="QR" />
    </View>
  );
};
