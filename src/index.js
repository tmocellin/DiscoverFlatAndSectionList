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
    data: [],
    hasMoreResult: true
  };

  async fetchData(page) {
    const uri = "https://randomuser.me/api/";
    const response = await fetch(
      `${uri}?page=${page}&results=${this.state.results}&seeds=${this.state
        .seed}`
    );
    let jsondata = await response.json();
    const nextPage = page + 1;
    this.setState({
      page: nextPage,
      data: [...this.state.data, ...jsondata.results],
      isFetching: false,
      hasMoreResult: nextPage <= this.state.totalPage
    });
  }

  async componentDidMount() {
    await this.fetchData(this.state.page);
  }

  render() {
    return (
      <View style={styles.container}>
        <UserList
          data={this.state.data}
          isFetching={this.state.isFetching}
          loadMore={() => this.fetchData(this.state.page)}
          hasMoreResult={this.state.hasMoreResult}
        />
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
