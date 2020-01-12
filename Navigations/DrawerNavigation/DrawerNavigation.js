import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import DrawerHome from '../../App/Screens/Drawer/DrawerHome';
import DrawerBedRoom from '../../App/Screens/Drawer/DrawerBedRoom';
import DrawerKitchen from '../../App/Screens/Drawer/DrawerKitchen';
import { Image } from 'react-native'
const DrawerNavigation = createDrawerNavigator({
    DHome: {
        screen: DrawerHome,
        navigationOptions: {
            title: 'Drawer Home',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/home.png')}
                    style={[{ width: 30, height: 30 }, { tintColor: tintColor }]}
                />
            ),
        }
    },
    DBedroom: {
        screen: DrawerBedRoom,
        navigationOptions: {
            title: 'Drawer Bedroom',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/bedroom.png')}
                    style={[{ width: 30, height: 30 }, { tintColor: 'red' }]}
                />
            ),
        }
    },
    DKitchen: {
        screen: DrawerKitchen,
        navigationOptions: {
            title: 'Drawer Kitchen',
            drawerIcon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/kitchen.png')}
                    style={[{ width: 30, height: 30 }, { tintColor: 'pink' }]}
                />
            ),
        }
    }
}, {
    initialRouteName: 'DHome',
})
const DrawerNav = createAppContainer(DrawerNavigation)
export default DrawerNav;