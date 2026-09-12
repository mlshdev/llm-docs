> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/hourweather/pressure](https://developer.apple.com/documentation/weatherkit/hourweather/pressure)

# pressure

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The atmospheric pressure at sea level at a given location.

## Declaration

```swift
var pressure: Measurement<UnitPressure>
```

<a id="discussion"></a>

## Discussion

This is a reduced pressure calculated by using observed conditions to remove the effects of elevation from pressure readings.

## See Also

### Getting pressure

- [pressureTrend](pressuretrend.md): The kind and amount of atmospheric pressure change over time.
