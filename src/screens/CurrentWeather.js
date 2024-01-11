import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utils/weatherType";

function CurrentWeather({ weatherData }) {
	const {
		main: { temp, feels_like, temp_max, temp_min },
		weather,
	} = weatherData;

	const weatherCondition = weather[0]?.main;

	return (
		<SafeAreaView
			style={[
				styles.wrapper,
				{ backgroundColor: weatherType[weatherCondition]?.backgroundColor },
			]}
		>
			<View style={styles.container}>
				<Feather
					name={weatherType[weatherCondition]?.icon}
					size={100}
					color="white"
				/>
				<Text style={styles.temp}>{`${temp}°`}</Text>
				<Text style={styles.feels}>{`Feels like ${feels_like}°`}</Text>
				<RowText
					containerStyles={styles.highLowWrapper}
					messageOne={`High: ${temp_max}° `}
					messageOneStyles={styles.highLow}
					messageTwo={`Low: ${temp_min}°`}
					messageTwoStyles={styles.highLow}
				/>
			</View>
			<RowText
				containerStyles={styles.bodyWrapper}
				messageOne={weather[0]?.description}
				messageOneStyles={styles.description}
				messageTwo={weatherType[weatherCondition]?.message}
				messageTwoStyles={styles.message}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	temp: {
		color: "black",
		fontSize: 48,
		paddingTop: 16,
	},
	feels: {
		color: "black",
		fontSize: 30,
	},
	highLow: {
		color: "black",
		fontSize: 20,
	},
	highLowWrapper: {
		flexDirection: "row",
	},
	bodyWrapper: {
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingLeft: 25,
		marginBottom: 40,
	},
	description: {
		fontSize: 43,
	},
	message: {
		fontSize: 25,
	},
});

export default CurrentWeather;
