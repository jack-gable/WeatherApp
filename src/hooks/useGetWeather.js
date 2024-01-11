import React from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(null);
	const [weather, setWeather] = React.useState([]);
	const [lat, setLat] = React.useState([]);
	const [lon, setLon] = React.useState([]);

	const fetchWeatherData = async () => {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
			);
			const data = await response.json();
			setWeather(data);
			setLoading(false);
		} catch (err) {
			setError("Could not fetch weather data");
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	React.useEffect(() => {
		const getLocation = async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setError("Permission to access location was denied");
				return;
			}
			let location = await Location.getCurrentPositionAsync({});
			setLon(location.coords.longitude);
			setLat(location.coords.latitude);
			await fetchWeatherData();
		};

		getLocation();
	}, []);

	return [loading, error, weather];
};
