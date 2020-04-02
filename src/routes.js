import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Game from '~/containers/Game';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Game" component={Game} />
    </Tab.Navigator>
  );
}

export default MyTabs;
