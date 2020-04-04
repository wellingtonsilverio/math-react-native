import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

import '~/config/ReactotronConfig';

import store from './store';

import {NavigationContainer} from '@react-navigation/native';

import Routes from '~/routes';

library.add(fas);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </Provider>
);

export default App;
