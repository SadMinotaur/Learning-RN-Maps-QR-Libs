import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <QRCodeScanner
        onRead={e =>
          Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err),
          )
        }
        flashMode={RNCamera.Constants.FlashMode.off}
        topContent={
          <Text
            style={{
              flex: 1,
              fontSize: 18,
              padding: 32,
              color: '#777',
            }}>
            Go to
            <Text
              style={{
                fontWeight: '500',
                color: '#000',
              }}>
              wikipedia.org/wiki/QR_code
            </Text>
            on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity
            style={{
              padding: 16,
            }}>
            <Text
              style={{
                fontSize: 21,
                color: 'rgb(0,122,255)',
              }}>
              OK. Got it!
            </Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};
