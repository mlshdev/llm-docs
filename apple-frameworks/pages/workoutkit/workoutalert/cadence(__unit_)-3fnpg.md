> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutalert/cadence(_:unit:)-3fnpg](https://developer.apple.com/documentation/workoutkit/workoutalert/cadence(_:unit:)-3fnpg)

# cadence(\_:unit:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates an alert for the specified cadence threshold.

## Declaration

```swift
static func cadence(_ value: Double, unit: UnitFrequency = WorkoutAlertMetric.countPerMinute) -> Self
```

## Parameters

- `value`: The target cadence threshold for the alert.
- `unit`: The frequency units used for the threshold.

## See Also

### Creating cadence alerts

- [cadence(\_:unit:)](cadence%28__unit_%29-y8da.md): Conforms when `Self` is `CadenceRangeAlert`. Creates a new alert for a range of cadence values.
- [CadenceRangeAlert](../cadencerangealert.md): An alert for a range of cadence values.
- [CadenceThresholdAlert](../cadencethresholdalert.md): An alert for a cadence threshold.
