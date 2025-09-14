import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherCard = ({ weather }: { weather: any }) => (
  <View style={styles.card}>
    <Text style={styles.text}>Temperature: {weather.main.temp}°C</Text>
    <Text style={styles.text}>Condition: {weather.weather[0].description}</Text>
    <Text style={styles.text}>Humidity: {weather.main.humidity}%</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 20,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
  text: { fontSize: 18, marginBottom: 10 },
});

export default WeatherCard;
