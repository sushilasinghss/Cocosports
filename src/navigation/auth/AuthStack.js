import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideoScreen from '../../screens/VideoScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="VideoScreen" component={VideoScreen} />
        </Stack.Navigator>

    );
}

export default AuthStack;