> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/weatherkit/currentweather/pressure](https://developer.apple.com/documentation/weatherkit/currentweather/pressure)

# pressure

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The sea level air pressure in millibars.

## Declaration

```swift
var pressure: Measurement<UnitPressure>
```

<a id="discussion"></a>

## Discussion

This is a reduced pressure calculated by using observed conditions to remove the effects of elevation from pressure readings.

## See Also

### Getting wind and pressure

- [pressureTrend](pressuretrend.md): The direction of change of the sea level air pressure.
- [wind](wind.md): The wind speed, direction, and gust.
