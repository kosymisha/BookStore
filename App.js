import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  console.log('hello');
  return (
    <View style={styles.view}>
      <Text style={styles.sectionTitle}>Hello World!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '300',
  },
});

export default App;
