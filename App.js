import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import HomeScreen from './HomeScreen';



export default class App extends React.Component{
render(){
  return(
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0F5',
  },
});