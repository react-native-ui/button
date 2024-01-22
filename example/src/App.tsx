import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '@react-native-ui/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button style={styles?.button}>Button</Button>
      <Button style={styles?.button} mode="contained">
        Contained Button
      </Button>
      <Button style={styles?.button} mode="contained-tonal">
        Contained-Tonal Button
      </Button>
      <Button style={styles?.button} mode="elevated">
        Elevated Button
      </Button>
      <Button style={styles?.button} mode="outlined">
        Outlined Button
      </Button>
      <Button style={styles?.button} mode="text">
        Text Button
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
    marginHorizontal: 30,
  },
  button: {
    width: '100%',
  },
});
