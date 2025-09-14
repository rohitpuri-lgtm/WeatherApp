# 🌤 Weather Dashboard App

A React Native weather app that fetches current weather based on the user’s geolocation using the OpenWeatherMap API
. It features skeleton loading, caching, and periodic revalidation.

# 🎯 Objective

Build a weather dashboard app that:

Requests the user’s location permission

Fetches and displays current weather data (temperature, condition, humidity)

Shows a skeleton loader while fetching data

Caches results locally and revalidates every 15 minutes

✅ Features

✅ Request and handle geolocation permissions

✅ Fetch weather data from OpenWeatherMap API

✅ Display temperature, weather condition, and humidity

✅ Skeleton loading while fetching data

✅ Cache API results locally (AsyncStorage or MMKV)

✅ Automatic revalidation every 15 minutes to optimize API calls

# ⚡ Concepts Covered

React Native permissions (react-native-permissions)

Geolocation handling (@react-native-community/geolocation)

API integration and fetching

Skeleton loaders for smooth UI

Local caching with expiration

Performance optimization and state management

#  🚀 Setup & Installation
1️⃣ Prerequisites

Node.js (Recommended ≥16.x)

React Native CLI (without Expo)

Android Studio or Xcode for device/emulator

2️⃣ Clone the Repository
git clone https://github.com/yourusername/weather-dashboard-app.git
cd weather-dashboard-app

3️⃣ Install Dependencies
npm install


Or with yarn:

yarn install

4️⃣ Configure OpenWeatherMap API Key

#  Sign up at OpenWeatherMap and get your API key.

Create a .env file in the project root:

OPENWEATHER_API_KEY=your_api_key_here


Replace your_api_key_here with your API key.

5️⃣ Run on Android
npx react-native run-android


Or run on iOS:

npx react-native run-ios
