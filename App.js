import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import Router from '~router';
import {Provider} from 'react-redux';
import {store, persistor} from '~store';
import {setCustomText} from 'react-native-global-props';
import 'react-native-gesture-handler';

// const customTextProps = {
//   style: {
//     fontFamily: 'Cera Pro Regular',
//   },
// };

// //Sets text props on the entire app
// setCustomText(customTextProps);

// Used to show the App requests on the Chrome Network Debugger
// eslint-disable-next-line no-undef
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};
