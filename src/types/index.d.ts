export interface Weather {
  city: string;
  country: string;
  date: Date;
  humidity: number;
  wind: number;
  icon: string;
  temperature: number;
  climate: string;
  coordinates: Coordinates;
}

export interface ForecastDay {
  dt: number;
  weather: Climate[];
  temp: Temperature;
  humidity: number;
  wind_speed: number;
};

export interface Coordinates {
  lat: number;
  lon: number;
}

interface Climate {
  main: string;
  icon: string;
};

interface Temperature {
  min: number;
  max: number;
};

export interface StringMap {
  [key: string]: string;
}

export interface WeatherDataResponse {
  name: string;
  sys: { country: string };
  dt: number;
  main: { temp: number, humidity: number };
  wind: { speed: number };
  weather: [{ main: string, icon: string }];
  coord: Coordinates;
}