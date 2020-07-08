import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { enableScreens } from 'react-native-screens';

import App from './App';
import Loading from './components/Loading';
import configureStore from './store';
import rootSaga from './sagas';

enableScreens()

const { runSaga, store, persistor } = configureStore()
runSaga(rootSaga)

export default () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
