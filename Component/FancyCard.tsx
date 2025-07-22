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
          style={{ width: 300, height: 200, borderRadius: 10 }}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Beautiful Beach</Text>
            <Text style={styles.cardLable}>Pink City, Jiapur</Text>
            <Text style={styles.cardDescription}>
              A serene beach with golden sands and clear blue waters.
            </Text>
            <Text style={styles.cardFooter}> 12 minutes away</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  cardElevated: {
    margin: 10,
    // elevation: 5,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
  },

  card: {
    height: 300,
    width: 350,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    overflow: 'hidden',
  },
    cardBody: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardLable: {
        fontSize: 16,
        color: 'gray',
    },

    cardDescription: {
        fontSize: 14,
        color: 'black',
        marginVertical: 5,
    },
    cardFooter: {
        fontSize: 120,
        color: 'blue',
        // marginTop: 10,
    },

});
