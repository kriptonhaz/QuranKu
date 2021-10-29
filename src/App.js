import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SurahDetailScreen } from "./screen/SurahDetailScreen";
import { SurahScreen } from "./screen/SurahScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Surah" component={SurahScreen} />
        <Stack.Screen name="SurahDetail" component={SurahDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;