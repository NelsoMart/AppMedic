import { showMessage } from 'react-native-flash-message';

//! import PushNotification from 'react-native-push-notification'; 

// watchman watch-del-all
// Clear watchman watches: watchman watch-del-all
// 2. Delete node_modules: rm -rf node_modules and run yarn install
// 3. Reset Metro's cache: yarn start --reset-cache
// 4. Remove the cache: rm -rf /tmp/metro-*
//    at ModuleResolver.resolveDependency (C:\Users\Nelson\Documents\proyectos-react-native\AppMedic\node_modules\metro\src\node-haste\DependencyGraph\ModuleResolution.js:186:15)
//    at ResolutionRequest.resolveDependency (C:\Users\Nelson\Documents\proyectos-react-native\AppMedic\node_modules\metro\src\node-haste\DependencyGraph\ResolutionRequest.js:52:18)
//    at DependencyGraph.resolveDependency (C:\Users\Nelson\Documents\proyectos-react-native\AppMedic\node_modules\metro\src\node-haste\DependencyGraph.js:287:16)
//    at Object.resolve (C:\Users\Nelson\Documents\proyectos-react-native\AppMedic\node_modules\metro\src\lib\transformHelpers.js:267:42)
//    at dependencies.map.result (C:\Users\Nelson\Documents\proyectos-react-native\AppMedic\node_modules\metro\src\DeltaBundler\traverseDependencies.js:434:31)
//    at Array.map (<anonymous>)
//    at resolveDependencies (C:\Users\Nelson\Documents\proyectos-react-native\AppMedic\node_modules\metro\src\DeltaBundler\traverseDependencies.js:431:18)
//    at C:\Users\Nelson\Documents\proyectos-react-native\AppMedic\node_modules\metro\src\DeltaBundler\traverseDependencies.js:275:33
//    at Generator.next (<anonymous>)
//    at asyncGeneratorStep (C:\Users\Nelson\Documents\proyectos-react-native\AppMedic\node_modules\metro\src\DeltaBundler\traverseDependencies.js:87:24)

// import PushNotificationIOS from '@react-native-community/push-notification-ios';

import { Platform } from 'react-native';

import QB from 'quickblox-react-native-sdk';


import { saveUdid, removeUdid } from './actionCreators'
import { store } from './store'
import { colors } from './theme'
// uncomment if added google-services.json
// import gServices from '../android/app/google-services.json'

/**
 * Show error message with title and description (optional)
 * @param {string} error 
 * @param {string=} description 
 */
export const showError = (error, description) => showMessage({
  type: 'danger',
  message: error,
  description
})

/**
 * Show success message with title and description (optional)
 * @param {string} message 
 * @param {string=} description 
 */

export const showSuccess = (message, description) => showMessage({
  type: 'success',
  backgroundColor: colors.primary,
  message,
  description,
})

/*
export const setupPushNotifications = () => {
  let senderID
  if (Platform.OS === 'android') {
    if (gServices &&
        gServices.project_info &&
        gServices.project_info.project_number) {
      senderID = gServices.project_info.project_number
    } else {
      return
    }
  }
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function ({ token }) {
      QB.subscriptions
        .create({ deviceToken: token })
        .then(subscriptions => {
          const udid = subscriptions[0].deviceUdid
          if (udid) {
            store.dispatch(saveUdid(udid))
          }
        })
        .catch(e => showError(
          'Error occured while subscribing to push events',
          e.message
        ))
    },

    // (required) Called when a remote or local notification is opened or received
    onNotification: function (notification) {
      // process the notification
      // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
      if (Platform.OS === 'ios') {
    //    notification.finish(PushNotificationIOS.FetchResult.NoData);
      }
    },

    // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
    senderID,

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
    
    requestPermissions: true
  })
}
*/
/*
export const removePushSubscription = () => new Promise((resolve) => {
  const { device: { udid } } = store.getState()
  store.dispatch(removeUdid())
  if (udid) {
    QB.subscriptions
      .get()
      .then(subscriptions => {
        subscriptions.forEach(subscription => {
          if (subscription.deviceUdid === udid) {
            QB.subscriptions.remove({ id: subscription.id })
          }
        })
        resolve()
      })
  } else {
    resolve()
  }
})
*/