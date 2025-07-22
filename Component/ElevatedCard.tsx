import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingtext}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card , styles.cardElevated]}>
          <Text> Tap</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text> To</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text> Scroll</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text> Down</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
          <Text> 😅 </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  card:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 10, 

  },
  container:{},

  cardElevated:{
    backgroundColor: 'orange',
    elevation: 10,
    textShadowOffset: { width: 10, height: 2 },
  }

})                                                                    