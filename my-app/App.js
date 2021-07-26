import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoList from './components/TodoList';
import FlexScreen from './screens/FlexScreen';
import IconsScreen from './screens/IconsScreen';
import NavDrawerScreen from './screens/NavDrawerScreen';
import NavStackScreen from './screens/NavStackScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>

    //   <StatusBar style="auto" />
    // </View>
    // <FlexScreen />
    // <NavStackScreen />
    // <IconsScreen />
    <NavDrawerScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
