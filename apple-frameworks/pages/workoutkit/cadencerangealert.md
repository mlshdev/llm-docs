> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/cadencerangealert](https://developer.apple.com/documentation/workoutkit/cadencerangealert)

# CadenceRangeAlert

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An alert for a range of cadence values.

## Declaration

```swift
struct CadenceRangeAlert
```

## Topics

### Creating new cadence range alerts

- [init(target:)](cadencerangealert/init%28target_%29.md): Creates a cadence alert for a closed range of measurements.

### Accessing the alert data

- [target](cadencerangealert/target.md): The target range.
- [targetQuantityLowerBound](cadencerangealert/targetquantitylowerbound.md): The target’s lower bound.
- [targetQuantityUpperBound](cadencerangealert/targetquantityupperbound.md): The target’s upper bound.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [WorkoutAlert](workoutalert.md)

## See Also

### Creating cadence alerts

- [cadence(\_:unit:)](workoutalert/cadence%28__unit_%29-y8da.md): Conforms when `Self` is `CadenceRangeAlert`. Creates a new alert for a range of cadence values.
- [cadence(\_:unit:)](workoutalert/cadence%28__unit_%29-3fnpg.md): Conforms when `Self` is `CadenceThresholdAlert`. Creates an alert for the specified cadence threshold.
- [CadenceThresholdAlert](cadencethresholdalert.md): An alert for a cadence threshold.
