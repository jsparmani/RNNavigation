import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import StackNav from '../StackNavigation/StackNavigation';
import DrawerNav from '../DrawerNavigation/DrawerNavigation';
import TabsNav from '../TabsNavigation/TabsNavigation';
const SwitchNavigator = createSwitchNavigator({
    Auth: StackNav,
    Drawer: DrawerNav,
    Tabs: TabsNav
}, {
    initialRouteName: 'Auth',
})
const SwitchNav = createAppContainer(SwitchNavigator);
export default (SwitchNav);