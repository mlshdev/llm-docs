> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/sunevents/astronomicaldusk](https://developer.apple.com/documentation/weatherkit/sunevents/astronomicaldusk)

# astronomicalDusk

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The time of astronomical sunset, when the sun’s center is 18° below the horizon.

## Declaration

```swift
var astronomicalDusk: Date?
```

<a id="discussion"></a>

## Discussion

The sun no longer illuminates the sky, and does not interfere with astronomical observations. This property is optional because it’s possible for the sun to not set on a given day, at extreme latitudes.

## See Also

### Getting the sun events

- [astronomicalDawn](astronomicaldawn.md): The time of astronomical sunrise when the sun’s center is 18° below the horizon.
- [civilDawn](civildawn.md): The time of civil sunrise when the sun’s center is 6° below the horizon.
- [civilDusk](civildusk.md): The time of civil sunset, when the sun’s center is 6° below the horizon.
- [nauticalDawn](nauticaldawn.md): The time of nautical sunrise when the sun’s center is 12° below the horizon.
- [nauticalDusk](nauticaldusk.md): The time of nautical sunset, when the sun’s center is 12° below the horizon.
- [solarMidnight](solarmidnight.md): Represents solar midnight, the time when the sun reaches its lowest point in the sky.
- [solarNoon](solarnoon.md): Represents solar noon, the time when the sun reaches its highest point in the sky.
- [sunrise](sunrise.md): The sunrise time immediately before the solar transit closest to calendar noon.
- [sunset](sunset.md): The sunset time immediately after the solar transit closest to calendar noon.
