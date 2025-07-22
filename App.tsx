/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import {  
  // StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  //  useColorScheme,
  } from 'react-native';

import React from 'react';
import FlatCards from './Component/FlatCards';
import ElevatedCard from './Component/ElevatedCard';



function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCard/>
      </ScrollView>
    </SafeAreaView>
   
  );
}

export default App;






// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });


