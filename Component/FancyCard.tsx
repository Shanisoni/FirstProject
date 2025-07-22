import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Beautiful Beach</Text>
          <Text style={styles.cardLabel}>Pink City, Jiapur</Text>
          <Text style={styles.cardDescription}>
            A serene beach with golden sands and clear blue waters.
          </Text>
          <Text style={styles.cardFooter}>12 minutes away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: '100%', // fills full width of card
    height: 180,
    //   resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardElevated: {
    margin: 10,
    elevation: 5,
    marginLeft: 50,
  },

  card: {
    width: 350,
    borderRadius: 20, // match this with image corners
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  cardBody: {
    height: 180,
    width: 350,
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardLabel: {
    fontSize: 16,
    color: 'gray',
  },

  cardDescription: {
    fontSize: 14,
    color: 'black',
    marginVertical: 5,
  },
  cardFooter: {
    fontSize: 12,
    color: 'black',
    // marginTop: 10,
  },
});
