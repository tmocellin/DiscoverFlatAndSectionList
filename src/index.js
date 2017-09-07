/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import UserList from "./components/UserList";

export default class App extends Component {
  state = {
    page: 1,
    results: 20,
    totalPage: 3,
    seed: "demo",
    isFetching: true,
    data: []
  };

  async fetchData(page) {
    const uri = "https://randomuser.me/api/";
    const response = await fetch(
      `${uri}?page=${page}&results=${this.state.results}&seeds=${this.state
        .seed}`
    );
    let jsondata = await response.json();
    this.setState({
      page: page + 1,
      data: [...this.state.data, ...jsondata.results],
      isFetching: false
    });
  }

  async componentDidMount() {
    await this.fetchData(this.state.page);
  }

  render() {
    return (
      <View style={styles.container}>
        <UserList data={this.state.data} isFetching={this.state.isFetching} />
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
