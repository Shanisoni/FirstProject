import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingtext}>FlatCards</Text>
      <ScrollView style = {styles.container} horizontal={true}>
        <View style = {[styles.card , styles.cardOne]}>
            <Text style = {styles.cardOne}>Red</Text>
        </View>
        <View style = {[styles.card , styles.cardTwo]}>
            <Text style = {styles.cardTwo}>Blue</Text>
        </View>
        <View style = {[styles.card , styles.cardThree]}>
            <Text style = {styles.cardThree}>Green</Text>
        </View>
        <View style = {[styles.card , styles.cardThree]}>
            <Text style = {styles.cardThree}>Green</Text>
        </View>
        <View style = {[styles.card , styles.cardOne]}>
            <Text style = {styles.cardOne}>Red</Text>
        </View>
        <View style = {[styles.card , styles.cardTwo]}>
            <Text style = {styles.cardTwo}>Blue</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 20,
        

    },
    container:{
      flex:1,
      flexDirection: 'row',
      padding:15

      

    },
    card:{
        height: 100,
        width:100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin:10,
     
        
    },
    cardOne:{
        backgroundColor: 'red'
    },
    cardTwo:{
        backgroundColor: 'blue'
    },

    cardThree:{
        backgroundColor: 'green'
    },



})