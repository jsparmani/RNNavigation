import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    gotoHomeStack = () => {
        this.props.navigation.navigate('Home');
    }
    render() {
        return (
            <View style={{ margin: 18, flex: 1, justifyContent: 'center' }}>
                <Text style={{ margin: 18, fontSize: 18, textAlign: 'center' }}>Welcome To Stack Navigation</Text>

                <Text style={{ margin: 18, textAlign: 'center', fontSize: 16 }}>This is stack's Login screen without header. Feel comportable and do the stuffs you want to do here.</Text>
                <Button
                    title={'Click me to navigate to Home Stack'}
                    onPress={this.gotoHomeStack}

                />
            </View>
        );
    }
}

export default Login;