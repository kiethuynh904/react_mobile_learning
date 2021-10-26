import React from 'react';

import _ from 'lodash';

// import RootNavigator from 'routers/RootNavigator';
import {ScrollView, StatusBar, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from '../routers/RootNavigator';

// AsyncStorage.clear()
export default function Scenes() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </>
  );
}
