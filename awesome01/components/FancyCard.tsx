import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://static.toiimg.com/photo/msid-90725432,width-96,height-65.cms',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Kashi Ghat</Text>
          <Text style={styles.cardLabel}>Varanasi, UP</Text>
          <Text style={styles.cardDescription}>
            Ghats in Varanasi are riverfront steps leading to the banks of the
            River Ganga or Ganges.
          </Text>
          <Text style={styles.cardFooter}>12 min away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 350,
    width: 380,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal: 12,
    
  },
  cardTitle: {
    color: '#000000',
    fontSize:22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
  },
});