import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import SmsListener from 'react-native-android-sms-listener';

export default () => {
  const [state, setstate] = useState<{
    body: string;
    originatingAddress: string;
    timestamp: number;
  }>();
  SmsListener.addListener((message: any) => {
    console.info(message);
    setstate(message);
  });
  return (
    <View style={styles.smsView}>
      <Text>{state?.body}</Text>
    </View>
  );
};
