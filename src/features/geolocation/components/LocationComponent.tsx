import React, {useImperativeHandle, useState} from 'react';
import {Button, PermissionsAndroid, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
var geocoder = require('google-geocoder');

function LocationComponent(props: any, ref: any) {
  const [address, setAddress] = useState(null);
  const [location, setLocation] = useState(Object);

  useImperativeHandle(ref, () => ({
    address: () => address,
    location: () => location,
  }));

  const getLocation = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (!granted) {
      return;
    }
    Geolocation.getCurrentPosition(position => {
      var geo = geocoder({
        key: 'AIzaSyAvMmyL0pLrbDWBKjrQZeCDbgMlq3x80vg',
      });

      setLocation(position);

      geo.reverseFind(
        position.coords.latitude,
        position.coords.longitude,
        (err: any, res: any) => {
          setAddress(res[0]);
        },
      );
    });
  };

  const formatLocalization = (address: any) => {
    return `${address?.locality?.long_name}, ${address?.country?.long_name}`;
  };

  return (
    <View>
      <Button title={'Get Location'} onPress={getLocation} />
      <Text>{formatLocalization(address)}</Text>
    </View>
  );
}

// @ts-ignore
LocationComponent = React.forwardRef(LocationComponent);

export default LocationComponent;
