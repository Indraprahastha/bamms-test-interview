import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { Provider, connect } from 'react-redux'
// import { history } from './store'
import store from './store/index'

import Home from './components/Home'
import Locations from './components/Locations'
import Detailcalllocations from './components/Detailcalllocations'
import Detailmaps from './components/Detailmaps'

import { SideMenu, List, ListItem } from 'react-native-elements'

const Application = StackNavigator({
  Home: { screen: Home},
  Locations: { screen: Locations},
  Detailcalllocations: { screen: Detailcalllocations },
  Detailmaps: { screen: Detailmaps }
},
{
  headerMode: 'none'
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
