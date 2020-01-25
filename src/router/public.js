import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {setNavigator} from '~services/navigation';
import {Login} from '~views';

const {Navigator, Screen} = createStackNavigator();

export default () => (
  <NavigationNativeContainer ref={navigatorRef => setNavigator(navigatorRef)}>
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
    </Navigator>
  </NavigationNativeContainer>
);
