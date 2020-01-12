import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from '../../App/Screens/Login/Login';
import Home from '../../App/Screens/Home/Home';
const StackNavigation = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Home: { screen: Home }
}, {
    initialRouteName: 'Login',
    // headerMode: 'none'
})
const StackNav = createAppContainer(StackNavigation);
export default StackNav;