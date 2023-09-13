import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeContent() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function MyContent() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My!</Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeContent" component={HomeContent} />
      <Tab.Screen name="MyContent" component={MyContent} />
    </Tab.Navigator>
  );
}
