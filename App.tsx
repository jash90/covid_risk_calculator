import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/features/userDataAnalysis/screens/HomeScreen';
import InformationScreen from "./src/features/information/screens/InformationScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Information" component={InformationScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
