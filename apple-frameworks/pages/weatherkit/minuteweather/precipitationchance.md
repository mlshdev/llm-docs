> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/weatherkit/minuteweather/precipitationchance

# precipitationChance

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The probability of precipitation in this minute.

## Declaration

```swift
var precipitationChance: Double
```

<a id="discussion"></a>

## Discussion

The value is from `0` (no chance of precipitation) to `1` (100% chance of precipitation).

## See Also

### Getting the precipitation

- [precipitation](precipitation.md): A description of the precipitation for this minute.
- [precipitationIntensity](precipitationintensity.md): The forecasted precipitation intensity.
