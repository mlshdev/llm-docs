> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/weatherkit/dayweather/precipitationchance

# precipitationChance

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The probability of precipitation during the day.

## Declaration

```swift
var precipitationChance: Double
```

<a id="discussion"></a>

## Discussion

The value is from `0` (no chance of precipitation) to `1` (100% chance of precipitation).

## See Also

### Getting precipitation

- [precipitation](precipitation.md): The description of precipitation for this day.
- [rainfallAmount](rainfallamount.md): Deprecated. The amount of liquid precipitation for the day.
- [snowfallAmount](snowfallamount.md): Deprecated. The amount of snowfall for the day.
