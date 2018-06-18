import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { backgroundColor, underlayColor, titleText, onPress, disabled } = this.props;
    const buttonColStyle = {
      backgroundColor: backgroundColor,
      borderColor: backgroundColor,
    }

    return (
      <TouchableHighlight onPress={ onPress } style={ [buttonStyles.button, buttonColStyle] } underlayColor={ underlayColor }>
        <Text style={ buttonStyles.buttonText }>
          { titleText }
        </Text>
      </TouchableHighlight>
    );
  }
}

const buttonStyles = StyleSheet.create({
  button: {
    width: 120,
    height: 50,
    margin: 5,
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
