import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Counting from './Counting';
import Countries from './Countries';
import ThemeContext from './ThemeContext';
import Callback from './Callback';
import Welcome from './Welcome';


const App2 = () => {
  return (
    <View style={styles.container2}>
      <View style={styles.padding}><Text>Labb1RN</Text></View>

      <Image source={{ uri: 'https://developers.redhat.com/sites/default/files/blog/2020/04/React-logo.png' }} style={{ width: 200, height: 200 }} />

    </View>
  )
}

const Action = (show) => {
  alert(show)
}

export default function App() {
  return (

    <View style={styles.container}>
      <ScrollView>
        <App2 />
        <Welcome name='Jimmy' />
        <View >
          <Counting count={1} />
        </View>
        <Callback showView={Action} />
        <ThemeContext.Provider value={'lightblue'}>
          <Countries />
        </ThemeContext.Provider>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    paddingTop: 50
  },
});
