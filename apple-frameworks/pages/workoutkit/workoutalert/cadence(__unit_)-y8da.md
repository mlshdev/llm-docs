> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutalert/cadence(_:unit:)-y8da](https://developer.apple.com/documentation/workoutkit/workoutalert/cadence(_:unit:)-y8da)

# cadence(\_:unit:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new alert for a range of cadence values.

## Declaration

```swift
static func cadence(_ range: ClosedRange<Double>, unit: UnitFrequency = WorkoutAlertMetric.countPerMinute) -> Self
```

## Parameters

- `range`: A closed range representing the cadence’s value.
- `unit`: The frequency units for the specified range.

## See Also

### Creating cadence alerts

- [CadenceRangeAlert](../cadencerangealert.md): An alert for a range of cadence values.
- [cadence(\_:unit:)](cadence%28__unit_%29-3fnpg.md): Conforms when `Self` is `CadenceThresholdAlert`. Creates an alert for the specified cadence threshold.
- [CadenceThresholdAlert](../cadencethresholdalert.md): An alert for a cadence threshold.
