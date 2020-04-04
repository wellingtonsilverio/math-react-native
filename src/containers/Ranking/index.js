import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Ranking() {
  return (
    <View style={styles.col}>
      <Text style={[styles.text, {fontSize: 36}]}>EM DESENVOLVIMENTO</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  col: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    // fontFamily: 'ComicNeue-Bold',
    fontFamily: 'KGWhYYouGoTtABeSoMeAn',
  },
});
