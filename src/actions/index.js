import axios from "axios";
import { openWeatherApiKey } from "../config/keys";
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=${openWeatherApiKey}`;

export const FETCH_WEATHER = "FERTCH_WEATHER";
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
