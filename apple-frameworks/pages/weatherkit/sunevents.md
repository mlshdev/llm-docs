> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/sunevents](https://developer.apple.com/documentation/weatherkit/sunevents)

# SunEvents

**Framework:** WeatherKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An enumeration that represents dates of solar events, including sunrise, sunset, dawn, and dusk.

## Declaration

```swift
struct SunEvents
```

## Topics

### Getting the sun events

- [astronomicalDawn](sunevents/astronomicaldawn.md): The time of astronomical sunrise when the sun’s center is 18° below the horizon.
- [astronomicalDusk](sunevents/astronomicaldusk.md): The time of astronomical sunset, when the sun’s center is 18° below the horizon.
- [civilDawn](sunevents/civildawn.md): The time of civil sunrise when the sun’s center is 6° below the horizon.
- [civilDusk](sunevents/civildusk.md): The time of civil sunset, when the sun’s center is 6° below the horizon.
- [nauticalDawn](sunevents/nauticaldawn.md): The time of nautical sunrise when the sun’s center is 12° below the horizon.
- [nauticalDusk](sunevents/nauticaldusk.md): The time of nautical sunset, when the sun’s center is 12° below the horizon.
- [solarMidnight](sunevents/solarmidnight.md): Represents solar midnight, the time when the sun reaches its lowest point in the sky.
- [solarNoon](sunevents/solarnoon.md): Represents solar noon, the time when the sun reaches its highest point in the sky.
- [sunrise](sunevents/sunrise.md): The sunrise time immediately before the solar transit closest to calendar noon.
- [sunset](sunevents/sunset.md): The sunset time immediately after the solar transit closest to calendar noon.

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

### Celestial information

- [MoonEvents](moonevents.md): A structure that represents lunar events.
- [MoonPhase](moonphase.md): An enumeration that specifies the moon phase kind.
