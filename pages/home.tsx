import React from 'react';
import {Text, View, Button} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button
        title="Go to Test Screen"
        onPress={() => navigation.navigate('Test')}
      />
    </View>
  );
}
