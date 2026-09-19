> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/workoutkit/workoutalert/heartrate(_:unit:)

# heartRate(\_:unit:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new heart rate alert for the target range.

## Declaration

```swift
static func heartRate(_ range: ClosedRange<Double>, unit: UnitFrequency = WorkoutAlertMetric.countPerMinute) -> Self
```

## Parameters

- `range`: A closed range of heart rate values.
- `unit`: The frequency units used by the range values.

## See Also

### Creating heart rate alerts

- [HeartRateRangeAlert](../heartraterangealert.md): An alert for a range of heart rates.
- [heartRate(zone:)](heartrate%28zone_%29.md): Conforms when `Self` is `HeartRateZoneAlert`. Creates a new alert for the specified heart rate zone.
- [HeartRateZoneAlert](../heartratezonealert.md): An alert for a heart rate zone.
