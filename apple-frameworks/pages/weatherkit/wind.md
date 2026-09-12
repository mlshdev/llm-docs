> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/wind](https://developer.apple.com/documentation/weatherkit/wind)

# Wind

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Contains wind data of speed, direction, and gust.

## Declaration

```swift
struct Wind
```

## Topics

### Getting the properties

- [Wind.CompassDirection](wind/compassdirection-swift.enum.md): A compass composed of cardinal and intercardinal directions.
- [compassDirection](wind/compassdirection-swift.property.md): The general indicator of wind direction.
- [direction](wind/direction.md): The direction the wind is coming from in degrees.
- [gust](wind/gust.md): A sudden increase in wind speed due to friction, wind shear, or by heating.
- [speed](wind/speed.md): Sustained wind speed.

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

### Characteristics

- [Precipitation](precipitation.md): The form of precipitation.
- [PressureTrend](pressuretrend.md): The atmospheric pressure change over time.
- [UVIndex](uvindex.md): The expected intensity of ultraviolet radiation from the sun.
- [WeatherCondition](weathercondition.md): A description of the current weather condition.
