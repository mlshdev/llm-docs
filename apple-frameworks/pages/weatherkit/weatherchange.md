> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/weatherchange](https://developer.apple.com/documentation/weatherkit/weatherchange)

# WeatherChange

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that informs how certain measurable weather aspects are expected to change relative to before.

## Declaration

```swift
struct WeatherChange
```

## Topics

### Instance Properties

- [date](weatherchange/date.md): The date at which this change record becomes effective.
- [dayPrecipitationAmount](weatherchange/dayprecipitationamount.md): How the forecasted precipitation amount for this day, during daylight hours, compares to that of before.
- [highTemperature](weatherchange/hightemperature.md): How the high temperature for this day compares to that of before.
- [lowTemperature](weatherchange/lowtemperature.md): How the low temperature for this day compares to that of before.
- [nightPrecipitationAmount](weatherchange/nightprecipitationamount.md): How the forecasted precipitation amount, during the night of this day, compares to that of before.

### Enumerations

- [WeatherChange.Direction](weatherchange/direction.md): An enum that specifies the direction in which a measurable aspect of the weather is expected to change.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
