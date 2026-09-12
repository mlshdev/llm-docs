> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/cadencethresholdalert](https://developer.apple.com/documentation/workoutkit/cadencethresholdalert)

# CadenceThresholdAlert

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An alert for a cadence threshold.

## Declaration

```swift
struct CadenceThresholdAlert
```

## Topics

### Creating new cadence threshold alerts

- [init(target:)](cadencethresholdalert/init%28target_%29.md): Create a new cadence threshold alert for the target measurement.

### Accessing the alert data

- [target](cadencethresholdalert/target.md): The target threshold.
- [targetQuantity](cadencethresholdalert/targetquantity.md): A HealthKit quantity that represents the target cadence threshold.

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
- [CadenceRangeAlert](cadencerangealert.md): An alert for a range of cadence values.
- [cadence(\_:unit:)](workoutalert/cadence%28__unit_%29-3fnpg.md): Conforms when `Self` is `CadenceThresholdAlert`. Creates an alert for the specified cadence threshold.
