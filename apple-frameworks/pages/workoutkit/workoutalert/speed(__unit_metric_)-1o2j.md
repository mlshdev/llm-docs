> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutalert/speed(_:unit:metric:)-1o2j](https://developer.apple.com/documentation/workoutkit/workoutalert/speed(_:unit:metric:)-1o2j)

# speed(\_:unit:metric:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new speed alert for the provided range.

## Declaration

```swift
static func speed(_ range: ClosedRange<Double>, unit: UnitSpeed, metric: WorkoutAlertMetric = .current) -> Self
```

## Parameters

- `range`: A closed range of speed values.
- `unit`: The speed units used by the range.
- `metric`: The metric used for the speed measurements.

## See Also

### Creating speed alerts

- [SpeedRangeAlert](../speedrangealert.md): An alert for a range of speed values.
- [speed(\_:unit:metric:)](speed%28__unit_metric_%29-4zald.md): Conforms when `Self` is `SpeedThresholdAlert`. Creates a new speed threshold alert.
- [SpeedThresholdAlert](../speedthresholdalert.md): An alert for a speed threshold.
