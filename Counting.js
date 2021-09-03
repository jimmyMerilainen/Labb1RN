import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Counting(props) {
  const [isCounting, setIsCounting] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Text>
          <Button onPress={() => {
            setIsCounting(isCounting + props.count)
          }}
            title='+'
            color='green'
          />
          <Text>{isCounting}</Text>
          <Button onPress={() => {
            setIsCounting(isCounting - props.count)
          }}
            title='-'
            color='red'
          />
        </Text>
      </View>

    </View>
  )
}
export default Counting;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    paddingTop: 5
  }
});