import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {getTheme} from 'react-native-material-kit';
import styles from "./styles";
const theme = getTheme();

type Props = {};
class Card extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardStyle}>
          <Image
            style={styles.image}
            source={{uri: this.props.image}}
          />
          <Text style={theme.cardContentStyle}>{this.props.content}</Text>
        </View>
      </View>
    );
  }
}

export default class Home extends Component<Props> {
  render() {
    let images = this.props.images;
    let imageTags = images.map(x => {
      return (<Card
        image={x.media.m}
        content={x.title}
        tags={x.tags}
      />);
    });
    return (
      <ScrollView style={styles.scrollView}>
        {imageTags}
      </ScrollView>
    );
  }
}

