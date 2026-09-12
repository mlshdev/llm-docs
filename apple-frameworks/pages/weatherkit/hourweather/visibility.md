> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/hourweather/visibility](https://developer.apple.com/documentation/weatherkit/hourweather/visibility)

# visibility

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The distance at which an object can be clearly seen.

## Declaration

```swift
var visibility: Measurement<UnitLength>
```

<a id="discussion"></a>

## Discussion

The amount of light and weather conditions like fog, mist, and smog affect visibility.

## See Also

### Getting conditions

- [cloudCover](cloudcover.md): The percentage of the sky covered with clouds.
- [condition](condition.md): A description of the weather condition for this hour.
- [isDaylight](isdaylight.md): The presence or absence of daylight at the requested location and hour.
