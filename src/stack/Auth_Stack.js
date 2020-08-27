import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Sign_in from '../screen/Sign_in';
const Stack = createStackNavigator();

const Auth_Stack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Sign_in} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth_Stack;
