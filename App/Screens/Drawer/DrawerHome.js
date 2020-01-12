import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Image, Button } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class DrawerHome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goToTabs = () => {
        this.props.navigation.navigate('Tabs');
    }
    render() {
        return (
            <View style={{ margin: 18, flex: 1, justifyContent: 'center' }}>
                <View style={{ position: 'absolute', top: 0 }}>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.toggleDrawer()}>
                        <Image
                            source={require('../../../assets/menu.png')}
                            style={[{ width: 50, height: 50 }, { tintColor: 'red' }]}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ marginBottom: 18 }}>
                    <Text style={{ margin: 18, fontSize: 18, textAlign: 'center' }}>Welcome To Drawer Navigation</Text>
                    <Text>This is drawers's home. Feel comportable and enjoy with all the stuffs here.</Text>
                </View>
                <Button
                    title={'Click to go to Tabs'}
                    onPress={this.goToTabs}
                />
            </View>

        );
    }
}

export default DrawerHome;