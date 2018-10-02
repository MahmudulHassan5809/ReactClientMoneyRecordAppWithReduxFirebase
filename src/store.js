import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

//Reducers
import notifyReducer  from './reducers/notifyReducer';
import settingsReducer  from './reducers/settingsReducer';

const firebaseConfig = {
	apiKey: "AIzaSyB9UPbdG8_Npj8V0gn1KrKuOssfffdakTQ",
    authDomain: "reactclientpanel-cb0b5.firebaseapp.com",
    databaseURL: "https://reactclientpanel-cb0b5.firebaseio.com",
    projectId: "reactclientpanel-cb0b5",
    storageBucket: "reactclientpanel-cb0b5.appspot.com",
    messagingSenderId: "884784377484"

};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
const firestore = firebase.firestore(); // <- needed if using firestore
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);


// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  notify: notifyReducer,
  settings: settingsReducer
});


// Check for settings in localStorage
if (localStorage.getItem('settings') == null) {
  // Default settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  };

  // Set to localStorage
  localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

// Create initial state
const initialState = { settings: JSON.parse(localStorage.getItem('settings')) };

const store = createStoreWithFirebase(rootReducer, initialState , compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	));


export default store;
