import axios from "axios";
import { openWeatherApiKey } from "../config/keys";
const ROOT_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const FETCH_WEATHER = "FERTCH_WEATHER";
export function fetchWeather(city) {
  const url = `${ROOT_URL}?q=${city},us&appid=${openWeatherApiKey}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
