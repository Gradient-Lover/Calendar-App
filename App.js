import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dayz</Text>
      <View style={styles.calendar}>
        <View style={styles.day}>
          <Text style={styles.dayText}>Mon</Text>
          <View style={styles.event}></View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayText}>Tue</Text>
          <View style={styles.event}></View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayText}>Wed</Text>
          <View style={styles.event}></View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayText}>Th</Text>
          <View style={styles.event}></View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayText}>Fri</Text>
          <View style={styles.event}></View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayText}>Sat</Text>
          <View style={styles.event}></View>
        </View>
        <View style={styles.day}>
          <Text style={styles.dayText}>Sun</Text>
          <View style={styles.event}></View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "purple",
  },
  calendar: {
    flexDirection: "row",
  },
  day: {
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  event: {
    width: 30,
    height: 30,
    backgroundColor: "pink",
    borderRadius: 15,
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});

export default App;
