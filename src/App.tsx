/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NetworkProvider} from 'react-native-offline';
import Home from './pages/Home';

const App = () => {
  return (
    <NetworkProvider>
      <Home />
    </NetworkProvider>
  );
};

export default App;
