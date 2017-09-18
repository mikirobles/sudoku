import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

const image = require("./difficultylabel.png");

export default class DifficultyLabel extends Component {
  state = {};
  render() {
    return (
      <View>
        <Image source={image} style={styles.logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    height: 76,
    width: 340,
    resizeMode: "contain"
  }
});
