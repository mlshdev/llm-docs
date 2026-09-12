> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/powerrangealert](https://developer.apple.com/documentation/workoutkit/powerrangealert)

# PowerRangeAlert

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An alert for a range of power values.

## Declaration

```swift
struct PowerRangeAlert
```

## Topics

### Creating new power range alerts

- [init(target:)](powerrangealert/init%28target_%29.md): Creates a new power alert for the target range.

### Accessing the alert value

- [target](powerrangealert/target.md): The target range.
- [targetQuantityLowerBound](powerrangealert/targetquantitylowerbound.md): The target’s lower bound.
- [targetQuantityUpperBound](powerrangealert/targetquantityupperbound.md): The target’s upper bound.

### Initializers

- [init(target:metric:)](powerrangealert/init%28target_metric_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [WorkoutAlert](workoutalert.md)

## See Also

### Creating power alerts

- [power(\_:unit:)](workoutalert/power%28__unit_%29-57ekz.md): Conforms when `Self` is `PowerRangeAlert`. Creates a new power alert for the target range.
- [power(\_:unit:)](workoutalert/power%28__unit_%29-289mz.md): Conforms when `Self` is `PowerThresholdAlert`. Creates an alert for the specified power threshold.
- [PowerThresholdAlert](powerthresholdalert.md): An alert for a power threshold.
- [power(zone:)](workoutalert/power%28zone_%29.md): Conforms when `Self` is `PowerZoneAlert`. Creates a new alert for the specified power zone.
- [PowerZoneAlert](powerzonealert.md): An alert for a power zone.
