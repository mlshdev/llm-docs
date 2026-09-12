> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/hourweather/cloudcover](https://developer.apple.com/documentation/weatherkit/hourweather/cloudcover)

# cloudCover

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The percentage of the sky covered with clouds.

## Declaration

```swift
var cloudCover: Double
```

<a id="discussion"></a>

## Discussion

The value is from `0` (no cloud cover)  to `1` (complete cloud cover).

## See Also

### Getting conditions

- [condition](condition.md): A description of the weather condition for this hour.
- [isDaylight](isdaylight.md): The presence or absence of daylight at the requested location and hour.
- [visibility](visibility.md): The distance at which an object can be clearly seen.
