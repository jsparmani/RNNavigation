import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    gotoDrawer = () => {
        this.props.navigation.navigate('Drawer');
    }
    render() {
        return (

            <View style={{ margin: 18, flex: 1, justifyContent: 'center' }}>
                <Text style={{ margin: 18, fontSize: 18, textAlign: 'center' }}>Welcome To Stack Navigation</Text>

                <Text style={{ margin: 18, textAlign: 'center', fontSize: 16 }}>This is stack's home with header. Feel comportable and enjoy with all the stuffs here.</Text>
                <Button
                    title={'Click me to navigate to Drawer'}
                    onPress={this.gotoDrawer}
                />
            </View>
        );
    }
}

export default Home;