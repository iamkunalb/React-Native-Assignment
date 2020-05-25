import React, { Component } from "react";
import {
  Switch,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

export class Search extends Component {
  returnCheck() {
    return this.props.return ? (
      <TextInput
        style={styles.box}
        placeholder="Return Date: YYYY-MM-DD"
        onChangeText={(value) => this.props.handleChange("return_date", value)}
      />
    ) : null;
  }

  render() {
    return (
      <View>
        <View style={styles.searches}>
          <View>
            <Text style={{margin: 5}}>One-Way/Return</Text>
            
            <Switch
              value={this.props.return}
              onValueChange={() => this.props.handleSwitch()}
              style={{margin: 5}}
            />
            <TextInput
              style={styles.box}
              placeholder="Orgin"
              onChangeText={(value) => this.props.handleChange("origin", value)}
            />
            <TextInput
              style={styles.box}
              placeholder="Destination"
              onChangeText={(value) =>
                this.props.handleChange("destination", value)
              }
            />
            
            <TextInput
              style={styles.box}
              placeholder="Departure Date: YYYY-MM-DD"
              onChangeText={(value) =>
                this.props.handleChange("dept_date", value)
              }
            />
            {this.returnCheck()}
            <TextInput
              style={styles.box}
              keyboardType="numeric"
              placeholder="No. of passengers"
              onChangeText={(value) =>
                this.props.handleChange("passengers", value)
              }
            />
          </View>
          <View style={{ marginTop: "5%" }}>
            <Button
              title="Submit"
              color="red"
              onPress={() => this.props.handleSubmit()}
            />
          </View>
        </View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    padding: 5,
  },
  searches: {
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
    padding: 10,
  },
  box: {
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    margin: 5,
    height: 40,
  },
});

export default Search;