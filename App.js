
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

console.disableYellowBox = true;

import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen  from './screens/WriteStoryScreen';
import LoginScreen  from './screens/LoginScreen';
export default class App extends React.Component {
  render(){
  return (
    
      <AppContainer/>
    
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStoryScreen},
  Read: {screen: ReadStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
LoginScreen:{screen: LoginScreen},
TabNavigator:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);