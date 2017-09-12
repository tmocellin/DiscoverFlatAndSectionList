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
    isFetching: false,
    data: [],
    hasMoreResult: true
  };

  async fetchData(page) {
    const uri = "https://randomuser.me/api/";
    const response = await fetch(
      `${uri}?page=${page}&results=${this.state.results}&seeds=${this.state
        .seed}`
    );
    const jsondata = await response.json();
    return jsondata.results;
  }

  async loadData(page) {
    this.setState({ isFetching: true });
    const data = await this.fetchData(page);
    const nextPage = page + 1;
    this.setState({
      page: nextPage,
      data: [...this.state.data, ...data],
      isFetching: false,
      hasMoreResult: nextPage <= this.state.totalPage
    });
  }

  async componentDidMount() {
    await this.loadData(this.state.page);
  }

  render() {
    return (
      <View style={styles.container}>
        <UserList
          data={this.state.data}
          isFetching={this.state.isFetching}
          loadMore={() => this.loadData(this.state.page)}
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
