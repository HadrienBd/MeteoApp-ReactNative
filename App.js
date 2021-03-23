import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Search from './components/Search'
import About from './components/About'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Tab = createBottomTabNavigator();

const Tab = createMaterialTopTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            showIcon: true,
            showLabel: false,
            style: { backgroundColor: 'powderblue' },
          }}>
          <Tab.Screen name="Search" component={Search} options = {{ tabBarIcon: () => {
          return <Image source={require('./components/icons/home.png')} style={{ width: 20, height: 20 }} /> }
          }} />
          <Tab.Screen name="About" component={About} options = {{ tabBarIcon: () => {
          return <Image source={require('./components/icons/user.png')} style={{ width: 20, height: 20 }} /> }
          }} />
        </Tab.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
