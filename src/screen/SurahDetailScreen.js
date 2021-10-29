import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { useNavigation} from "@react-navigation/native";
import Surah1 from "../assets/data/1.json";
import Surah2 from "../assets/data/2.json";
import Surah3 from "../assets/data/3.json";
import Surah4 from "../assets/data/4.json";
import Surah5 from "../assets/data/5.json";

const { width, height } = Dimensions.get("screen");

export function SurahDetailScreen(props){
  const navigation = useNavigation();
  const [listAyat, setListAyat] = React.useState([]);

  React.useEffect(() => {
    if(props.route.params?.ayat){
      let ayat = props.route.params?.ayat
      switch (ayat) {
        case 1:
          setListAyat(Surah1);
          break;

        case 2:
          setListAyat(Surah2);
          break;

        case 3:
          setListAyat(Surah3);
          break;
      
        case 4:
          setListAyat(Surah4);
          break;

        case 5:
          setListAyat(Surah5);
          break;

        default:
          break;
      }
    }
  }, [])

  const CardAyat = ({ayat, translate}) => {
    return(
      <View>
        <Text style={styles.textAyat}>{ayat}</Text>
        <Text style={styles.textTranslate}>{translate}</Text>
      </View>
    )
  }

  return(
    <View style={styles.rootContainer}>
      <FlatList 
        data={listAyat.length === 0 ? [] : listAyat.data}
        renderItem={({item}) => {
          return(
            <CardAyat 
              ayat={item.aya_text}
              translate={item.translation_aya_text}
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
  textAyat: {
    color: 'black',
    fontSize: 40
  },
  textTranslate: {
    color: 'black',
    fontSize: 20
  },
  separator: {
    width: width,
    height: 20
  }
})