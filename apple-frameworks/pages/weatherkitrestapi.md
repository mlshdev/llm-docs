> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkitrestapi](https://developer.apple.com/documentation/weatherkitrestapi)

# WeatherKit REST API

**Interface language:** Data

**Framework:** WeatherKit REST API  
**Kind:** Web Service  
**Availability:** Weather API 1.0.0+

Obtain historical, current, and predictive weather for your app or service.

<a id="overview"></a>

## Overview

Use the WeatherKit REST API web service to provide weather data to your apps and services that offer both current and forecasted weather information to your users.

To provide weather information to a web app or other platform, like Android, use the WeatherKit REST API. For native iOS, macOS, tvOS, and watchOS apps, use [WeatherKit](weatherkit.md).

> **Important**

>  Using this API requires attribution. See [WeatherKit - Data Sources](https://developer.apple.com/weatherkit/data-source-attribution/) to learn more.

## Topics

### Fundamentals

- [Request authentication for WeatherKit REST API](weatherkitrestapi/request-authentication-for-weatherkit-rest-api.md): Create a developer token to access weather data.

### Obtaining weather information for a location

- [GET /api/v1/availability/{latitude}/{longitude}](weatherkitrestapi/get-api-v1-availability-_latitude_-_longitude_.md): Determine the data sets available for the specified location.
- [GET /api/v1/weather/{language}/{latitude}/{longitude}](weatherkitrestapi/get-api-v1-weather-_language_-_latitude_-_longitude_.md): Obtain weather data for the specified location.
- [Weather](weatherkitrestapi/weather.md): The collection of all requested weather data.
- [Latitude](weatherkitrestapi/latitude.md): A numeric value indicating the latitude of the coordinate between `-90` and `90`.
- [Longitude](weatherkitrestapi/longitude.md): A numeric value indicating the longitude of the coordinate between `-180` and `180`.
- [DataSet](weatherkitrestapi/dataset.md): The collection of weather information for a location.

### Obtaining current weather information

- [CurrentWeather](weatherkitrestapi/currentweather.md): The current weather conditions for the specified location.
- [Metadata](weatherkitrestapi/metadata.md): Descriptive information about the weather data.
- [ProductData](weatherkitrestapi/productdata.md): A base type for all weather data.

### Obtaining minute-to-minute forecast weather

- [ForecastPeriodSummary](weatherkitrestapi/forecastperiodsummary.md): The summary for a specified period in the minute forecast.
- [ForecastMinute](weatherkitrestapi/forecastminute.md): The precipitation forecast for a specified minute.

### Obtaining hourly weather information

- [HourWeatherConditions](weatherkitrestapi/hourweatherconditions.md): The historical or forecasted weather conditions for a specified hour.
- [HourlyForecast](weatherkitrestapi/hourlyforecast.md): A collection of hour forecasts for a specified range of hours.
- [NextHourForecast](weatherkitrestapi/nexthourforecast.md): A minute-by-minute forecast for the next hour.

### Obtaining daily weather information

- [DayWeatherConditions](weatherkitrestapi/dayweatherconditions.md): The historical or forecasted weather conditions for a specified day.
- [DayPartForecast](weatherkitrestapi/daypartforecast.md): A summary forecast for a daytime or overnight period.
- [DailyForecast](weatherkitrestapi/dailyforecast.md): A collection of day forecasts for a specified range of days.

### Obtaining weather alerts

- [GET /api/v1/weatherAlert/{language}/{id}](weatherkitrestapi/get-api-v1-weatheralert-_language_-_id_.md): Receive an active weather alert.
- [WeatherAlert](weatherkitrestapi/weatheralert.md): An official message indicating severe weather from a reporting agency.
- [WeatherAlertCollection](weatherkitrestapi/weatheralertcollection.md): A collection of severe weather alerts for a specified location.
- [WeatherAlertSummary](weatherkitrestapi/weatheralertsummary.md): Detailed information about the weather alert.
- [ResponseType](weatherkitrestapi/responsetype.md): The recommended action from a reporting agency.
- [Severity](weatherkitrestapi/severity.md): The level of danger to life and property.
- [Urgency](weatherkitrestapi/urgency.md): An indication of urgency of action from the reporting agency.

### Identifying weather events

- [UnitsSystem](weatherkitrestapi/unitssystem.md): The system of units that the weather data is reported in.
- [MoonPhase](weatherkitrestapi/moonphase.md): The shape of the moon as seen by an observer on the ground at a given time.
- [PrecipitationType](weatherkitrestapi/precipitationtype.md): The type of precipitation forecasted to occur during the day.
- [PressureTrend](weatherkitrestapi/pressuretrend.md): The direction of change of the sea level air pressure.

### Obtaining event information

- [EventText](weatherkitrestapi/eventtext.md): The official text describing a severe weather event from the agency.
- [Certainty](weatherkitrestapi/certainty.md): How likely the event is to occur.

### Performing attribution

- [GET /attribution/{language}](weatherkitrestapi/get-attribution-_language_.md): Receive attribution information.
- [Attribution](weatherkitrestapi/attribution.md): A list of image asset URLs for attribution.
