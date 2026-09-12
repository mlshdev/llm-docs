> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/precipitation](https://developer.apple.com/documentation/weatherkit/precipitation)

# Precipitation

**Framework:** WeatherKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The form of precipitation.

## Declaration

```swift
enum Precipitation
```

## Topics

### Specifying precipitation types

- [Precipitation.hail](precipitation/hail.md): A form of precipitation consisting of solid ice.
- [Precipitation.mixed](precipitation/mixed.md): Wintry Mix.
- [Precipitation.rain](precipitation/rain.md): Rain.
- [Precipitation.sleet](precipitation/sleet.md): A form of precipitation consisting of ice pellets.
- [Precipitation.snow](precipitation/snow.md): Snow.
- [Precipitation.none](precipitation/none.md): No precipitation.

### Describing the precipitation

- [accessibilityDescription](precipitation/accessibilitydescription.md): A localized accessibility description describing the form of precipitation.
- [description](precipitation/description.md): A localized string describing the form of precipitation.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Characteristics

- [PressureTrend](pressuretrend.md): The atmospheric pressure change over time.
- [UVIndex](uvindex.md): The expected intensity of ultraviolet radiation from the sun.
- [Wind](wind.md): Contains wind data of speed, direction, and gust.
- [WeatherCondition](weathercondition.md): A description of the current weather condition.
