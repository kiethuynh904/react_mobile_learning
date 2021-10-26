import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, Text, View} from 'react-native';
import HomeContainer from '../scenes/home/home.container';
import VoiceContainer from '../scenes/voice/voice.container';
import NavigationServices from '../services/NavigationService';

const Tab = createBottomTabNavigator();
function DetailsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
    </View>
  );
}
function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeContainer} />
      <HomeStack.Screen name="Voice" component={VoiceContainer} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const MyBottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
};

function RootNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        // linking={linking}
        //   theme={MyTheme}
        ref={navigatorRef => {
          NavigationServices.setTopLevelNavigator(navigatorRef);
        }}>
        <MyBottomTab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default RootNavigator;
