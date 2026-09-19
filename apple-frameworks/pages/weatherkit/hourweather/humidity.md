> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/weatherkit/hourweather/humidity

# humidity

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The humidity for the hour.

## Declaration

```swift
var humidity: Double
```

<a id="discussion"></a>

## Discussion

Relative humidity measures the amount of water vapor in the air compared to the maximum amount that the air could normally hold at the current temperature.  The value is from `0` (no humidity) to `1` (100% humidity).

## See Also

### Getting temperature and humidity

- [apparentTemperature](apparenttemperature.md): The apparent, or “feels like” temperature during the hour.
- [temperature](temperature.md): The temperature during the hour.
- [dewPoint](dewpoint.md): The amount of moisture in the air.
