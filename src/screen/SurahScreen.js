import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SurahList from "../assets/data/surah-list.json";

const { width, height } = Dimensions.get("screen");

export function SurahScreen(){
  const navigation = useNavigation();
  
  function gotoDetail(){
    navigation.navigate("SurahDetail");
  }

  const CardSurah = ({name, number, ayat, translation}) => {
    return(
      <TouchableOpacity style={styles.containerCardSurah} onPress={gotoDetail}>
        <View style={styles.containerNumber}>
          <Text style={styles.textNumber}>{number}</Text>
        </View>
        <View>
          <Text style={styles.textSurah}>{`Surah ${name}`}</Text>
          <Text style={styles.textAyat}>{`${translation} - ${ayat} Ayat`}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return(
    <View style={styles.rootContainer}>
      <FlatList 
        data={SurahList.data}
        renderItem={({item}) => {
          return(
            <CardSurah 
              number={item.id}
              name={item.surat_name}
              translation={item.surat_terjemahan}
              ayat={item.count_ayat}
            />
          )
        }}
        ItemSeparatorComponent={() => {
          return(
            <View style={styles.separator}/>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerCardSurah: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerNumber: {
    width: width*0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textNumber: {
    color: 'black',
    fontSize: 30
  },
  textSurah: {
    color: 'black',
    fontSize: 28
  },
  textAyat: {
    color: 'black',
    fontSize: 20
  },
  separator: {
    width: width,
    height: 20
  }
})