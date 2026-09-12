> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutalert/power(_:unit:)-57ekz](https://developer.apple.com/documentation/workoutkit/workoutalert/power(_:unit:)-57ekz)

# power(\_:unit:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new power alert for the target range.

## Declaration

```swift
static func power(_ range: ClosedRange<Double>, unit: UnitPower) -> Self
```

## Parameters

- `range`: A closed range of power values.
- `unit`: The power units used by the range values.

## See Also

### Creating power alerts

- [PowerRangeAlert](../powerrangealert.md): An alert for a range of power values.
- [power(\_:unit:)](power%28__unit_%29-289mz.md): Conforms when `Self` is `PowerThresholdAlert`. Creates an alert for the specified power threshold.
- [PowerThresholdAlert](../powerthresholdalert.md): An alert for a power threshold.
- [power(zone:)](power%28zone_%29.md): Conforms when `Self` is `PowerZoneAlert`. Creates a new alert for the specified power zone.
- [PowerZoneAlert](../powerzonealert.md): An alert for a power zone.
