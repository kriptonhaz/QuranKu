import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function SurahScreen(){
  const navigation = useNavigation();
  
  function gotoDetail(){
    navigation.navigate("SurahDetail");
  }

  return(
    <View style={styles.rootContainer}>
      <Text style={styles.text} onPress={gotoDetail}>Surah Screen</Text>
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