import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';
import {navigationRef} from '../core-components/atoms';
import {BackHandler} from 'react-native';
import {useStores} from '@/store';

import {AuthStack} from '../features/auth/navigations';
import {Footer} from '../core-components/atoms/footer/Footer.component';

export const Stack = createNativeStackNavigator();
//const journey = 'ROOT';
//const journeyId = `${'Android'}_${journey}`;

const routes = [
  {
    name: 'authStack',
    component: AuthStack,
  },
  {
    name: 'dashboardStack',
    component: Footer,
  },
];

const backActionHandler = () => {
  if (navigationRef.isReady()) {
    const state = navigationRef.getRootState();
    if (state && state.routes.length > 0) {
      const activeStack = state.routes[0];
      if (
        activeStack &&
        activeStack.name === 'burgerMenuStack' &&
        navigationRef.canGoBack()
      ) {
        navigationRef.goBack();
      }
    }
  }
  return true;
};

const Root = observer(() => {
  const {
    accountStore: {isLoggedIn},
  } = useStores();
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backActionHandler);
  }, []);
  const root = () => {
    if (isLoggedIn) {
      return 'dashboardStack';
    }
    return 'authStack';
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={root()}
        screenOptions={{
          gestureEnabled: false,
        }}>
        {routes?.map(route => {
          return (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
              options={{headerShown: false}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Root;
