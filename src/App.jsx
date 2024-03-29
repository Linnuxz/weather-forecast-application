import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherForm from "./components/WeatherForm";

const App = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [defaultWeatherData, setDefaultWeatherData] = useState({});
    const [error, setError] = useState(null);

    const apiKey = "72fb214297b90360e0b124a72c2a5b1c";

    const fetchWeather = async (cityName) => {
        try {
            setError(null);
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                throw new Error("City not found");
            }
        } catch (error) {
            console.error(error);
            setError("City not found or there was an error fetching data.");
        }
    };

    const fetchDefaultWeather = async (defaultCities) => {
        const defaultWeather = {};
        for (const cityName of defaultCities) {
            try {
                const response = await fetchWeatherAPI(cityName);
                defaultWeather[cityName] = response;
            } catch (error) {
                console.error(
                    "Error fetching weather for",
                    cityName,
                    ":",
                    error
                );
                setError("There was an error fetching default cities data.");
            }
        }
        setDefaultWeatherData(defaultWeather);
    };

    const fetchWeatherAPI = async (cityName) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error("City not found");
        }
    };

    const handleSearch = () => {
        fetchWeather(city);
    };

    useEffect(() => {
        const defaultCities = [
            "New York",
            "Dubai",
            "London",
            "Berlin",
            "Kutaisi",
        ];
        fetchDefaultWeather(defaultCities);
    }, []);

    return (
        <div className="flex flex-col h-screen items-center justify-center p-4">
            <WeatherForm
                city={city}
                setCity={setCity}
                handleSubmit={handleSearch}
            />
            <div className="flex flex-col items-center my-auto">
                {error && <p className="text-red-500">{error}</p>}
                {weatherData && (
                    <WeatherDisplay weatherData={weatherData} city={city} />
                )}
            </div>
            <div className="mt-auto">
                <h2 className="text-xl font-semibold mb-2">Default Cities:</h2>
                <ul className="flex">
                    {Object.entries(defaultWeatherData).map(
                        ([cityName, data], index) => (
                            <li key={index}>
                                <WeatherDisplay
                                    weatherData={data}
                                    city={cityName}
                                />
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default App;
