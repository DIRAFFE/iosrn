/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {TamaguiProvider} from 'tamagui';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import config from './tamagui.config';

import HomeScreen from './pages/home';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
