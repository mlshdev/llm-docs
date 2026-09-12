> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/currentweather](https://developer.apple.com/documentation/weatherkit/currentweather)

# CurrentWeather

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A structure that describes the current conditions observed at a location.

## Declaration

```swift
struct CurrentWeather
```

<a id="overview"></a>

## Overview

The current conditions may not be a literal observation, but rather the result of a mathematical weather model predicting conditions based on real observations.

## Topics

### Getting temperature and humidity

- [apparentTemperature](currentweather/apparenttemperature.md): The feels-like temperature when factoring wind and humidity.
- [dewPoint](currentweather/dewpoint.md): The temperature at which relative humidity is 100%.
- [humidity](currentweather/humidity.md): The amount of water vapor in the air.
- [temperature](currentweather/temperature.md): The current temperature.

### Getting wind and pressure

- [pressure](currentweather/pressure.md): The sea level air pressure in millibars.
- [pressureTrend](currentweather/pressuretrend.md): The direction of change of the sea level air pressure.
- [wind](currentweather/wind.md): The wind speed, direction, and gust.

### Getting conditions

- [cloudCover](currentweather/cloudcover.md): The percentage of the sky covered with clouds.
- [condition](currentweather/condition.md): An enumeration value indicating the condition at the time.

### Getting date and validity

- [date](currentweather/date.md): The date of the current weather.

### Getting daylight and visibility

- [isDaylight](currentweather/isdaylight.md): A Boolean value indicating whether there is daylight.
- [uvIndex](currentweather/uvindex.md): The level of ultraviolet radiation.
- [visibility](currentweather/visibility.md): The distance at which terrain is visible.

### Getting additional information

- [metadata](currentweather/metadata.md): Descriptive information about the current weather data.
- [symbolName](currentweather/symbolname.md): The SF Symbol icon that represents the current weather condition and whether it’s daylight at the current date.

### Instance Properties

- [cloudCoverByAltitude](currentweather/cloudcoverbyaltitude.md): The percentage of the sky covered with low-altitude, middle altitude and high-altitude clouds during the period.
- [precipitationIntensity](currentweather/precipitationintensity.md): The current precipitation intensity in kilometers per hour.

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

### Requests

- [WeatherQuery](weatherquery.md): A structure that encapsulates a generic weather dataset request.
- [WeatherAttribution](weatherattribution.md): A structure that defines the necessary information for attributing a weather data provider.
- [WeatherMetadata](weathermetadata.md): A structure that provides additional weather information.
- [WeatherSeverity](weatherseverity.md): A description of the severity of the severe weather event.
