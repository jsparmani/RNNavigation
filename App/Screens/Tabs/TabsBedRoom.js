import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TabsBedRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ margin: 18, flex: 1, justifyContent: 'center' }}>
                <Text style={{ margin: 18, fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}>Welcome To Tabs Navigation</Text>
                <Text style={{ margin: 18, fontSize: 16, textAlign: 'center' }}>This is tabs's BedRoom. Feel comportable and enjoy with all the stuffs here.</Text>
            </View>
        );
    }
}

export default TabsBedRoom;