import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/logo.png';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.title}>Pesona Madura</Text>
				<Text style={styles.text}>Selamat datang dan berlibur di Madura</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 80,
		height: 80,
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 24,
		backgroundColor: 'transparent',
		marginTop: 20,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
	}
});
