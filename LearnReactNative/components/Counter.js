import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Counter({count, onIncrease, onDecrease}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.numArea}>
        <Text style={styles.num}>{count}</Text>
      </View>
      <View style={styles.button}>
        <Button title="-1" onPress={onDecrease} />
        <Button title="+1" onPress={onIncrease} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  num: {
    fontSize: 77,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Counter;
