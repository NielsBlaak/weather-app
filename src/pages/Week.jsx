import React from 'react';
import { api } from '../utils/api';
import { weatherOptions } from '../weatherOptions';
import { WeatherIcon } from 'weather-react-icons';

const Week = () => {
    const [weather, setWeather] = React.useState(null);
    
    
    React.useEffect(() => {
		getWeather();
	}, [])

	const getWeather = () => {
			fetch(`${api.base}forecast/?q=rotterdam&units=metric&APPID=${api.key}`)
			.then(res => res.json())
			.then(result => {
			// setTemp(Math.round(result.main.temp));
			// setDescription(result.weather[0].id)
            setWeather(result.list);
		});
    }

    const isNight = (hour) => {
        const time = new Date(hour).getHours();
        return time >= 20 || time <= 6;
    }

    if (weather) {
        return (
            <div className="forecast">
                {weather.map(weatherM => (
                    <div className="forecast-details">
                        <div className="forecast-date">
                            {new Intl.DateTimeFormat('nl', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }).format(new Date(weatherM.dt * 1000))}
                        </div>
                        <WeatherIcon iconId={weatherM.weather[0].id} name="owm" className="icon" night={isNight(weatherM.dt * 1000)} />
                        <div className="forecast-forecast">
                            <p>{weatherOptions[weatherM.weather[0].id]}</p>
                            <p>{Math.round(weatherM.main.temp)} graaie</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    } else return 'Ff laden...'

}

export default Week;