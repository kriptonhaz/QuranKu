import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

export function SurahDetailScreen(){
  return(
    <View style={styles.rootContainer}>
      <Text style={styles.text}>Surah Detail Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black'
  }
})