> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/weatherkit/hourweather/precipitationamount

# precipitationAmount

**Framework:** WeatherKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The amount of precipitation for the hour.

## Declaration

```swift
var precipitationAmount: Measurement<UnitLength>
```

<a id="discussion"></a>

## Discussion

This value refers to the liquid equivalent of all precipitation amounts. Note that since this is the amount over the hour and the precipitation intensity is also amount over the hour, this property also means precipitationIntensity
