import React from "react";
import { Text, View } from "react-native";

function RowText({
	messageOne,
	messageOneStyles,
	messageTwo,
	messageTwoStyles,
	containerStyles,
}) {
	return (
		<View style={containerStyles}>
			<Text style={messageOneStyles}>{messageOne}</Text>
			<Text style={messageTwoStyles}>{messageTwo}</Text>
		</View>
	);
}

export default RowText;
