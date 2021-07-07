import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {styles} from './styles';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default () => (
  <View style={styles.qrView}>
    <QRCodeScanner
      onRead={e =>
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err),
        )
      }
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <Text style={styles.qrText}>
          Go to wikipedia.org/wiki/QR_code on your computer and scan the QR
          code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.qrBottom}>
          <Text style={styles.qrBottom}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  </View>
);
