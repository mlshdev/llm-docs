> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/dayweather/minimumhumidity](https://developer.apple.com/documentation/weatherkit/dayweather/minimumhumidity)

# minimumHumidity

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The minimum amount of water vapor in the air for the day.

## Declaration

```swift
var minimumHumidity: Double
```

<a id="discussion"></a>

## Discussion

Relative humidity measures the amount of water vapor in the air, compared to the maximum amount that the air can hold at the current temperature.

The range of this property is from `0` to `1`, inclusive.
