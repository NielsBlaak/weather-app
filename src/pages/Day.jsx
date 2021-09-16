import React from 'react';
import { weatherOptions } from '../weatherOptions';
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';
import { api } from '../utils/api';

const Day = () => {
	const [weather, setWeather] = React.useState(null);
	const [temp, setTemp] = React.useState(null);
	const [description, setDescription] = React.useState(null);
	const date = new Date();
	const time = date.getHours();

	const isNight = time >= 20 || time <= 6;

	React.useEffect(() => {
		getWeather();
	}, [])

	const getWeather = () => {
			fetch(`${api.base}weather?q=rotterdam&units=metric&APPID=${api.key}`)
			.then(res => res.json())
			.then(result => {
			setTemp(Math.round(result.main.temp));
			setDescription(result.weather[0].id)
			setWeather(result);
			console.log(result);
		});
	}

	return (
		<div className="App">
			<div className="weather">
				{weather && <WeatherIcon iconId={description} name="owm" night={isNight} className="icon" />}
				{weather && (
					<p>
						{weatherOptions[description]}
						<br />
						<br />
						{temp}°C
					</p>
				)}
			</div>
			<a href="/week" className="week-button">
				En de rest van de week dan?
			</a>
		</div>
    )
}

export default Day;