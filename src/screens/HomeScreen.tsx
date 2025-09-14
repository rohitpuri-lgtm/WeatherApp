import React, { useEffect, useState } from 'react';
import { View, Text, Platform, PermissionsAndroid } from 'react-native';
import Loader from '../components/Loader';
import WeatherCard from '../components/WeatherCard';
import useWeatherApi from '../hooks/useWeatherApi';
import { getCurrentLocation } from '../utils/locationHelper';
import styles from '../styles/globalStyles';

const HomeScreen: React.FC = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const { weatherData, loading, error, getWeather } = useWeatherApi();

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        setPermissionGranted(granted === PermissionsAndroid.RESULTS.GRANTED);
      } else {
        setPermissionGranted(true);
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (permissionGranted) {
      getCurrentLocation()
        .then(({ latitude, longitude }) => getWeather(latitude, longitude))
        .catch(err => console.error(err));
    }
  }, [permissionGranted, getWeather]);

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.text}>Error: {error}</Text>
      ) : (
        weatherData && <WeatherCard weather={weatherData} />
      )}
    </View>
  );
};

export default HomeScreen;
