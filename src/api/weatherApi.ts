import { API_KEY, BASE_URL } from '../utils/constants';

export const fetchWeather = async (latitude: number, longitude: number) => {
  const response = await fetch(
    `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  return await response.json();
};
