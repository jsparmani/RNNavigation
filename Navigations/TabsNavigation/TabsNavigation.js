import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import TabsHome from '../../App/Screens/Tabs/TabsHome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabsKitchen from '../../App/Screens/Tabs/TabsKitchen';
import TabsBedRoom from '../../App/Screens/Tabs/TabsBedRoom';

const TabsNavigation = createBottomTabNavigator({

    TabHome: TabsHome,
    TabKitchen: TabsKitchen,
    TabBedroom: TabsBedRoom

}, {
    initialRouteName: 'TabHome',
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
    },

    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'TabHome') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                // Sometimes we want to add badges to some icons.
                // You can check the implementation below.
                // IconComponent = HomeIconWithBadge;
            } else if (routeName === 'TabKitchen') {
                iconName = `ios-options`;
            } else if (routeName === 'TabBedroom') {
                iconName = `ios-options`;
            }

            // You can return any component that you like here!
            return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),


})
const TabsNav = createAppContainer(TabsNavigation);
export default TabsNav;