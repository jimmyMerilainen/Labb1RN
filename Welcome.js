import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';

function Welcome(props) {
  const [name, setName] = useState('')
  return (
    <View style={styles.container2}>
      <Text>
        Välkommen!
      </Text>
      <Text>
        Mitt namn är {props.name}!
      </Text>
      <Text>Vad heter du?</Text>
      <TextInput style={styles.input} placeholder='Namn' onChangeText={(val) => setName(val)} />
      <Text>{name}</Text>
    </View>
  )
}
export default Welcome;

const styles = StyleSheet.create({
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    margin: 2,
    width: 200,
  }

});