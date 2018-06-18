import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';

const source = require('./resources/morpheus.jpg');
const quotes = require('./quotes.json');

import Buttons from "./Buttons";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
      pressed: 0,
      history: [],
    }
  }

  onPress = (i) => {

    const { selected, pressed, history } = this.state;
    selected === null ? answer = null : selected === 1 ? answer = "You chose the Red Pill" : answer = "You chose the Blue Pill"
  
    this.setState({
      selected: i,
      pressed: pressed + i,
      history: history.concat(answer),
    })
  }

  render() {

    const { selected, history, pressed } = this.state

    return (
      <View style={ styles.container }>
        <Image source={ source } style={ styles.image }/>
        <Text style={ styles.text }>
          This is your last chance. After this, there is no turning back. You take the blue pill — the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill — you stay in Wonderland, and I show you how deep the rabbit hole goes..
        </Text>
        <View style={ styles.container2 }>
        <Buttons backgroundColor={ "#F44336" } underlayColor={ "red" } titleText={ "Red Pill" } onPress={ () => this.onPress(1) } />
        <Buttons backgroundColor={ "#1E88E5" } underlayColor={ "blue" } titleText={ "Blue Pill" } onPress={ () => this.onPress(-1) } />
        </View>
        <ScrollView style={ styles.scroll }>
          <Text style={ styles.title }>
            History:
          </Text>
          { history.map((arr, i) =>
            <Text style={ styles.quotes } key={ i }>
              { arr }
            </Text>
          )}
          <Text style={ styles.title }>
            Quotes
          </Text>
          { quotes.map((quote, i) =>
            <Text style={ styles.quotes } key={ i }>
              {quote}
            </Text>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  image: {
    marginTop: 5,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    marginTop: 5,
    fontSize: 18,
    lineHeight: 22,
    color: "#222222"
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: 120,
    height: 50,
    margin: 5,
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  scroll: {
    flex: 1,
    marginTop: 5,
  },
  title: {
    marginTop: 5,
    color: "#222222",
    fontSize: 20,
    fontWeight: "bold"
  },
  quotes: {
    marginVertical: 5,
    color: "#222222",
    fontSize: 16,
    lineHeight: 22
  }
});
