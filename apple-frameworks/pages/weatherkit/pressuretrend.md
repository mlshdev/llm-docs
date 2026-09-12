> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/pressuretrend](https://developer.apple.com/documentation/weatherkit/pressuretrend)

# PressureTrend

**Framework:** WeatherKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The atmospheric pressure change over time.

## Declaration

```swift
enum PressureTrend
```

## Topics

### Getting the trend

- [PressureTrend.falling](pressuretrend/falling.md): The pressure is falling.
- [PressureTrend.rising](pressuretrend/rising.md): The pressure is rising.
- [PressureTrend.steady](pressuretrend/steady.md): The pressure is not changing.

### Describing the trend

- [accessibilityDescription](pressuretrend/accessibilitydescription.md): A localized accessibility description describing the pressure change over time.
- [description](pressuretrend/description.md): A localized string describing the pressure trend.

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

- [Precipitation](precipitation.md): The form of precipitation.
- [UVIndex](uvindex.md): The expected intensity of ultraviolet radiation from the sun.
- [Wind](wind.md): Contains wind data of speed, direction, and gust.
- [WeatherCondition](weathercondition.md): A description of the current weather condition.
