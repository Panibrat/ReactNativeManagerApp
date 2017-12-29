import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import redusers from './redusers';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAEJfPFhWgTBzbqCoLrTTtg7MdxuQMo8AI",
      authDomain: "manager-e03e4.firebaseapp.com",
      databaseURL: "https://manager-e03e4.firebaseio.com",
      projectId: "manager-e03e4",
      storageBucket: "manager-e03e4.appspot.com",
      messagingSenderId: "474988952003"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(redusers)}>
        <View style={styles.container}>
          <Text>Welcome!!!</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },

});


export default App;
