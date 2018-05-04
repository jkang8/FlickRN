/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
// import {ThemeProvider, Toolbar, COLOR} from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './app/styles';
import Home from "./app/home";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {images:[]};
  }
  componentDidMount() {
    console.log('hi');
    fetch('https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1')
      .then(resp => {
        return resp.json();
      })
      .then(respJson => {
        let images = respJson.items;
        this.setState({images: images});
        console.log(`state ${this.state.images}`);
        return respJson.items;
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View>
          <Icon.ToolbarAndroid
            style={styles.toolbar}
            title="FlickRN"
            titleColor="white"
            navIconName="md-arrow-back"
            actions={[
            ]}
            overflowIconName="md-more"
            // actions={[{title: 'Settings', icon: require('./app/icons/ic_menu_black_24dp/android/drawable-mdpi/ic_menu_black_24dp.png'), show: 'always'}]}
          />
          <Home
            images={this.state.images}
          />
      </View>
    );
  }
}

