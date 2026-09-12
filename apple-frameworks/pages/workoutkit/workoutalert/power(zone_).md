> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutalert/power(zone:)](https://developer.apple.com/documentation/workoutkit/workoutalert/power(zone:))

# power(zone:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new alert for the specified power zone.

## Declaration

```swift
static func power(zone: Int) -> Self
```

## Parameters

- `zone`: The target heart rate zone.

## See Also

### Creating power alerts

- [power(\_:unit:)](power%28__unit_%29-57ekz.md): Conforms when `Self` is `PowerRangeAlert`. Creates a new power alert for the target range.
- [PowerRangeAlert](../powerrangealert.md): An alert for a range of power values.
- [power(\_:unit:)](power%28__unit_%29-289mz.md): Conforms when `Self` is `PowerThresholdAlert`. Creates an alert for the specified power threshold.
- [PowerThresholdAlert](../powerthresholdalert.md): An alert for a power threshold.
- [PowerZoneAlert](../powerzonealert.md): An alert for a power zone.
