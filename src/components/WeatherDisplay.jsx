import React from "react";

const WeatherDisplay = ({ weatherData, city }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{city}</h2>
                {weatherData ? (
                    <div className="flex flex-col sm:flex-row sm:flex-wrap">
                        <div className="w-full sm:w-1/2 p-2">
                            <p className="text-lg">
                                Temperature: {weatherData.main.temp}
                            </p>
                            <p className="text-lg">
                                Feels Like: {weatherData.main.feels_like}
                            </p>
                            <p className="text-lg">
                                Humidity: {weatherData.main.humidity}
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2 p-2">
                            <p className="text-lg">
                                Pressure: {weatherData.main.pressure}
                            </p>
                            <p className="text-lg">
                                Wind Speed: {weatherData.wind.speed}
                            </p>
                            <p className="text-lg">
                                Wind Direction: {weatherData.wind.deg}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="text-lg">Loading...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherDisplay;
