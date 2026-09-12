> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutalert/power(_:unit:)-289mz](https://developer.apple.com/documentation/workoutkit/workoutalert/power(_:unit:)-289mz)

# power(\_:unit:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates an alert for the specified power threshold.

## Declaration

```swift
static func power(_ value: Double, unit: UnitPower) -> Self
```

## Parameters

- `value`: The target power threshold for the alert.
- `unit`: The power units used for the threshold.

## See Also

### Creating power alerts

- [power(\_:unit:)](power%28__unit_%29-57ekz.md): Conforms when `Self` is `PowerRangeAlert`. Creates a new power alert for the target range.
- [PowerRangeAlert](../powerrangealert.md): An alert for a range of power values.
- [PowerThresholdAlert](../powerthresholdalert.md): An alert for a power threshold.
- [power(zone:)](power%28zone_%29.md): Conforms when `Self` is `PowerZoneAlert`. Creates a new alert for the specified power zone.
- [PowerZoneAlert](../powerzonealert.md): An alert for a power zone.
