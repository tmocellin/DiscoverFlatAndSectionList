/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import UserList from "./components/UserList";

const sampleData = [
  {
    name: { title: "mr", first: "karl", last: "johnson" },
    email: "karl.johnson@example.com",
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/62.jpg"
    }
  },
  {
    name: { title: "mrs", first: "asuncion", last: "gomez" },
    email: "asuncion.gomez@example.com",
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/52.jpg"
    },
    nat: "ES"
  },
  {
    name: { title: "miss", first: "gilcenira", last: "ribeiro" },
    email: "gilcenira.ribeiro@example.com",
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg"
    }
  }
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserList data={sampleData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});
