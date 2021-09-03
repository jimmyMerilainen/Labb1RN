import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ThemeContext from './ThemeContext';

function Countries() {
  const context = useContext(ThemeContext)
  const [rate, setRate] = useState([])
  const [isTrue, setIsTrue] = useState(true)

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;')
      .then((response) => response.json())
      .then((json) => {
        setRate(json)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <View>
      <View style={styles.btn}>
        <Button title='Hämta alla länder' onPress={() => setIsTrue(false)} disabled={!isTrue} />
      </View>
      {rate.map((item) => {
        return (
          <View key={item.name} style={{ backgroundColor: context }}>
            <Text>{isTrue ? '' : item.name}</Text>
          </View>
        )
      })}
    </View>
  )
}
export default Countries;

const styles = StyleSheet.create({
  btn: {
    paddingTop: 5
  }
});