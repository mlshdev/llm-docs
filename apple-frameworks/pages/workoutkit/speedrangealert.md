> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/speedrangealert](https://developer.apple.com/documentation/workoutkit/speedrangealert)

# SpeedRangeAlert

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An alert for a range of speed values.

## Declaration

```swift
struct SpeedRangeAlert
```

## Topics

### Creating speed range alerts

- [init(target:metric:)](speedrangealert/init%28target_metric_%29.md): Creates a new speed alert for the provided range of values.

### Accessing alert data

- [target](speedrangealert/target.md): The target range of speed measurements.
- [targetQuantityLowerBound](speedrangealert/targetquantitylowerbound.md): The target range’s lower bounds.
- [targetQuantityUpperBound](speedrangealert/targetquantityupperbound.md): The target range’s upper bounds.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [WorkoutAlert](workoutalert.md)

## See Also

### Creating speed alerts

- [speed(\_:unit:metric:)](workoutalert/speed%28__unit_metric_%29-1o2j.md): Conforms when `Self` is `SpeedRangeAlert`. Creates a new speed alert for the provided range.
- [speed(\_:unit:metric:)](workoutalert/speed%28__unit_metric_%29-4zald.md): Conforms when `Self` is `SpeedThresholdAlert`. Creates a new speed threshold alert.
- [SpeedThresholdAlert](speedthresholdalert.md): An alert for a speed threshold.
