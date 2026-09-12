> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/dayweather](https://developer.apple.com/documentation/weatherkit/dayweather)

# DayWeather

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that represents the weather conditions for the day.

## Declaration

```swift
struct DayWeather
```

## Topics

### Getting temperature

- [highTemperature](dayweather/hightemperature.md): The daytime high temperature.
- [lowTemperature](dayweather/lowtemperature.md): The overnight low temperature.

### Getting precipitation

- [precipitation](dayweather/precipitation.md): The description of precipitation for this day.
- [precipitationChance](dayweather/precipitationchance.md): The probability of precipitation during the day.
- [rainfallAmount](dayweather/rainfallamount.md): Deprecated. The amount of liquid precipitation for the day.
- [snowfallAmount](dayweather/snowfallamount.md): Deprecated. The amount of snowfall for the day.

### Getting celestial information

- [moon](dayweather/moon.md): The lunar events for the day.
- [sun](dayweather/sun.md): The solar events for the day.

### Getting the wind

- [wind](dayweather/wind.md): The wind speed, direction, and gust.

### Getting the date

- [date](dayweather/date.md): The start time of the day weather.

### Getting condition and UV index

- [condition](dayweather/condition.md): A description of the weather condition on this day.
- [uvIndex](dayweather/uvindex.md): The expected intensity of ultraviolet radiation from the sun.

### Getting the weather symbol

- [symbolName](dayweather/symbolname.md): The SF Symbol icon that represents the day weather condition.

### Instance Properties

- [daytimeForecast](dayweather/daytimeforecast.md): The weather forecast from 7AM - 7PM on this day.
- [highTemperatureTime](dayweather/hightemperaturetime.md): The time at which the high temperature occurs on this day.
- [highWindSpeed](dayweather/highwindspeed.md): The maximum sustained wind speed.
- [lowTemperatureTime](dayweather/lowtemperaturetime.md): The time at which the low temperature occurs on this day.
- [maximumHumidity](dayweather/maximumhumidity.md): The maximum amount of water vapor in the air for the day.
- [maximumVisibility](dayweather/maximumvisibility.md): The maximum distance, in meters, at which terrain is visible for the day.
- [minimumHumidity](dayweather/minimumhumidity.md): The minimum amount of water vapor in the air for the day.
- [minimumVisibility](dayweather/minimumvisibility.md): The minimum distance, in meters, at which terrain is visible for the day.
- [overnightForecast](dayweather/overnightforecast.md): The weather forecast for 7PM on this day until 7AM the following day.
- [precipitationAmount](dayweather/precipitationamount.md): Deprecated. The amount of liquid precipitation for the day.
- [precipitationAmountByType](dayweather/precipitationamountbytype.md): A breakdown of amounts of all forms of precipitation forecasted for the day.
- [restOfDayForecast](dayweather/restofdayforecast.md): The forecast from now until midnight local time.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Alerts and forecasts

- [WeatherAlert](weatheralert.md): A weather alert issued for the requested location by a governmental authority.
- [WeatherAvailability](weatheravailability.md): A structure that indicates the availability of data at the requested location.
- [Forecast](forecast.md): A forecast collection for minute, hourly, and daily forecasts.
- [MinuteWeather](minuteweather.md): A structure that represents the next hour minute forecasts.
- [HourWeather](hourweather.md): A structure that represents the weather conditions for the hour.
