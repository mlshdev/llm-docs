> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/workoutkit/workoutalert/heartrate(zone:)

# heartRate(zone:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new alert for the specified heart rate zone.

## Declaration

```swift
static func heartRate(zone: Int) -> Self
```

## Parameters

- `zone`: The target heart rate zone.

## See Also

### Creating heart rate alerts

- [heartRate(\_:unit:)](heartrate%28__unit_%29.md): Conforms when `Self` is `HeartRateRangeAlert`. Creates a new heart rate alert for the target range.
- [HeartRateRangeAlert](../heartraterangealert.md): An alert for a range of heart rates.
- [HeartRateZoneAlert](../heartratezonealert.md): An alert for a heart rate zone.
