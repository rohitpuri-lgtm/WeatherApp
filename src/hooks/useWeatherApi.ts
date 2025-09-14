import { useState, useCallback } from 'react';
import { fetchWeather } from '../api/weatherApi';

const CACHE_DURATION = 15 * 60 * 1000;

interface WeatherCache {
  timestamp: number;
  data: any;
}

let weatherCache: WeatherCache | null = null;

const useWeatherApi = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getWeather = useCallback(
    async (latitude: number, longitude: number) => {
      setLoading(true);
      setError(null);

      const now = Date.now();
      if (weatherCache && now - weatherCache.timestamp < CACHE_DURATION) {
        setWeatherData(weatherCache.data);
        setLoading(false);
        return;
      }

      try {
        const data = await fetchWeather(latitude, longitude);
        weatherCache = { timestamp: now, data };
        setWeatherData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { weatherData, loading, error, getWeather };
};

export default useWeatherApi;
