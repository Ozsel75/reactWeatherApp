export const GeoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d6ee9a8cdemsh56083398585e8ffp11baa2jsn63bc72adf4a9",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

// fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities", GeoApiOptions)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "7aace97af6d0c41b788fc3b7fc9bf426";
