import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, View} from 'react-native';
import {styles} from './styles';

export default () => {
  const nav = useNavigation();
  return (
    <View style={styles.homeView}>
      <Button onPress={() => nav.navigate('Sms')} color="grey" title="Sms" />
      <Button onPress={() => nav.navigate('QR')} color="red" title="QR" />
    </View>
  );
};
