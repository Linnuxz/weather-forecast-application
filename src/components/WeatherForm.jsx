import React, { useState } from "react";

const WeatherForm = ({ city: initialCity, setCity, handleSubmit }) => {
    const [city, setInputCity] = useState(initialCity);

    const handleInputChange = (e) => {
        setInputCity(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setCity(city);
        handleSubmit();
    };

    return (
        <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto mt-8">
            <div className="flex items-center border-b-2 border-gray-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Enter City Name"
                    value={city}
                    onChange={handleInputChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Get Weather
                </button>
            </div>
        </form>
    );
};

export default WeatherForm;
