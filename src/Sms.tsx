import React, {useState} from 'react';
import {Text, View} from 'react-native';
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
    <View style={{width: '100%', height: '100%'}}>
      <Text>{state?.body}</Text>
    </View>
  );
};
