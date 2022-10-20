import * as React from 'react';
import {Stack} from '../../../core-navigations/root.navigation';
import {Movies} from '../screens/movies.screen';

const journey = 'DASHBD';
const journeyId = `${'Android'}_${journey}`;

export default function MoviesStack() {
  const moviesRoutes = [
    {
      name: 'movies',
      component: Movies,
      screenId: 'DASH-MOVI',
    },
  ];

  return (
    <Stack.Navigator initialRouteName={'movies'}>
      {moviesRoutes?.map(route => {
        return (
          <Stack.Screen
            key={route.name}
            name={route.name}
            initialParams={{eventId: `${journeyId}_${route.screenId}`}}
            component={route.component}
            options={{headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
}
