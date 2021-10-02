import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/features/userDataAnalysis/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
