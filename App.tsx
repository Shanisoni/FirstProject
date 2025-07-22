/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import {  StyleSheet, useColorScheme, View } from 'react-native';
import { 
  Text,
  SafeAreaView,
  ScrollView,

 } from 'react-native';
import React from 'react';



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <ScrollView>
        
      </ScrollView>


    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
