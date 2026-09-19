> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/weatherkit/hourweather/snowfallamount

# snowfallAmount

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The amount of snowfall for the hour.

## Declaration

```swift
var snowfallAmount: Measurement<UnitLength>
```

<a id="discussion"></a>

## Discussion

Snowfall amount refers to the depth of snow rather than the liquid equivalent. The system computes this value  by applying a temperature-based conversion to crystal size.
