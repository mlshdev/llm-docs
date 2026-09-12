> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutalert/speed(_:unit:metric:)-4zald](https://developer.apple.com/documentation/workoutkit/workoutalert/speed(_:unit:metric:)-4zald)

# speed(\_:unit:metric:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new speed threshold alert.

## Declaration

```swift
static func speed(_ value: Double, unit: UnitSpeed, metric: WorkoutAlertMetric = .current) -> Self
```

## Parameters

- `value`: The threshold value.
- `unit`: The speed units used by the threshold value.
- `metric`: The metric used to measure the speed.

## See Also

### Creating speed alerts

- [speed(\_:unit:metric:)](speed%28__unit_metric_%29-1o2j.md): Conforms when `Self` is `SpeedRangeAlert`. Creates a new speed alert for the provided range.
- [SpeedRangeAlert](../speedrangealert.md): An alert for a range of speed values.
- [SpeedThresholdAlert](../speedthresholdalert.md): An alert for a speed threshold.
