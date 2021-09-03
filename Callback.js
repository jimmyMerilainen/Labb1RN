import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const someText = (props) => {
  props.showView('det funkar')
}

function Callback(props) {
  return (
    <View style={styles.btn}>
      <Button title='Callback' onPress={() => someText(props)} />
    </View>
  )
}

export default Callback;

const styles = StyleSheet.create({
  btn: {
    paddingTop: 5
  }
});
