import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Game() {
  return (
    <View style={[styles.col]}>
      <View style={[styles.row, {flex: 1, padding: 7, maxHeight: 100}]}>
        <View style={[styles.col, {flex: 8, padding: 8}]}>
          <View style={styles.col}>
            <Text>2 x 2</Text>
          </View>
          <View
            style={[
              styles.col,
              {flex: undefined, maxHeight: 36, minHeight: 36},
            ]}>
            <Text>4</Text>
          </View>
        </View>
        <View style={[styles.col, styles.button, {flex: 5}]}>
          <TouchableOpacity style={styles.buttonContain}>
            <Text style={styles.buttonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          {
            flex: undefined,
            alignSelf: 'stretch',
            height: 8,
            backgroundColor: 'red',
          },
        ]}></View>
      <View style={[styles.col, {flex: 4, maxHeight: 380}]}>
        <View style={[styles.row, {marginTop: 8}]}>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <Text style={styles.buttonText}></Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <Text style={styles.buttonText}></Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.col, styles.button]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>Del</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.col, styles.button, {flex: 1 / 4}]}>
            <TouchableOpacity style={[styles.buttonContain, {marginRight: 8}]}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[styles.col, styles.button, {flex: 3 / 4, paddingLeft: 0}]}>
            <TouchableOpacity style={styles.buttonContain}>
              <Text style={styles.buttonText}>Pular</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  row: {
    flex: 1,
    flexDirection: 'row',
  },

  button: {
    flex: 1,

    padding: 8,
  },
  buttonContain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',

    borderRadius: 16,

    backgroundColor: '#3E7F4C',
  },
  buttonText: {
    fontSize: 24,

    color: '#EDF3EE',
  },
});
