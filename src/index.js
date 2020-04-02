import 'react-native-gesture-handler';

import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';

import {NavigationContainer} from '@react-navigation/native';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </Provider>
);

export default App;
