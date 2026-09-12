> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/hourweather](https://developer.apple.com/documentation/weatherkit/hourweather)

# HourWeather

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that represents the weather conditions for the hour.

## Declaration

```swift
struct HourWeather
```

## Topics

### Getting temperature and humidity

- [apparentTemperature](hourweather/apparenttemperature.md): The apparent, or “feels like” temperature during the hour.
- [humidity](hourweather/humidity.md): The humidity for the hour.
- [temperature](hourweather/temperature.md): The temperature during the hour.
- [dewPoint](hourweather/dewpoint.md): The amount of moisture in the air.

### Getting pressure

- [pressure](hourweather/pressure.md): The atmospheric pressure at sea level at a given location.
- [pressureTrend](hourweather/pressuretrend.md): The kind and amount of atmospheric pressure change over time.

### Getting conditions

- [cloudCover](hourweather/cloudcover.md): The percentage of the sky covered with clouds.
- [condition](hourweather/condition.md): A description of the weather condition for this hour.
- [isDaylight](hourweather/isdaylight.md): The presence or absence of daylight at the requested location and hour.
- [visibility](hourweather/visibility.md): The distance at which an object can be clearly seen.

### Getting the UV index

- [uvIndex](hourweather/uvindex.md): The expected intensity of ultraviolet radiation from the sun.

### Getting the wind

- [wind](hourweather/wind.md): Wind data describing the wind speed, direction, and gust.

### Getting the date

- [date](hourweather/date.md): The start time of the hour weather.

### Getting the precipitation

- [precipitation](hourweather/precipitation.md): Description of precipitation for this hour.
- [precipitationChance](hourweather/precipitationchance.md): The probability of precipitation during the hour.

### Getting the weather symbol

- [symbolName](hourweather/symbolname.md): The SF Symbol icon that represents the hour weather condition and whether it’s daylight on the hour.

### Instance Properties

- [cloudCoverByAltitude](hourweather/cloudcoverbyaltitude.md): The percentage of the sky covered with low altitude, middle altitude and high altitude clouds during the period.
- [precipitationAmount](hourweather/precipitationamount.md): The amount of precipitation for the hour.
- [snowfallAmount](hourweather/snowfallamount.md): The amount of snowfall for the hour.

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
- [DayWeather](dayweather.md): A structure that represents the weather conditions for the day.
