> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/currentweather/humidity](https://developer.apple.com/documentation/weatherkit/currentweather/humidity)

# humidity

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The amount of water vapor in the air.

## Declaration

```swift
var humidity: Double
```

<a id="discussion"></a>

## Discussion

Relative humidity measures the amount of water vapor in the air, compared to the maximum amount that the air can hold at the current temperature.

The range of this property is from `0` to `1`, inclusive.

## See Also

### Getting temperature and humidity

- [apparentTemperature](apparenttemperature.md): The feels-like temperature when factoring wind and humidity.
- [dewPoint](dewpoint.md): The temperature at which relative humidity is 100%.
- [temperature](temperature.md): The current temperature.
