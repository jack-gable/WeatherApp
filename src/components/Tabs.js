import React from "react";
import City from "../screens/City";
import CurrentWeather from "../screens/CurrentWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Tabs({ weather }) {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: "tomato",
				tabBarInactiveTintColor: "gray",
				tabBarStyle: {
					backgroundColor: "lightblue",
				},
				headerStyle: {
					backgroundColor: "lightblue",
				},
				headerTitleStyle: {
					fontWeight: "bold",
					fontSize: 25,
					color: "tomato",
				},
			}}
		>
			<Tab.Screen
				name="Current"
				children={() => <CurrentWeather weatherData={weather.list[0]} />}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name="droplet"
							size={25}
							color={focused ? "tomato" : "black"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Upcoming"
				children={() => <UpcomingWeather weatherData={weather.list} />}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name="clock"
							size={25}
							color={focused ? "tomato" : "black"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="City"
				children={() => <City weatherData={weather.city} />}
				options={{
					tabBarIcon: ({ focused }) => (
						<Feather
							name="home"
							size={25}
							color={focused ? "tomato" : "black"}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default Tabs;
