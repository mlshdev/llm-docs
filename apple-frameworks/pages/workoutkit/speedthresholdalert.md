> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/speedthresholdalert](https://developer.apple.com/documentation/workoutkit/speedthresholdalert)

# SpeedThresholdAlert

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An alert for a speed threshold.

## Declaration

```swift
struct SpeedThresholdAlert
```

## Topics

### Creating speed threshold alerts

- [init(target:metric:)](speedthresholdalert/init%28target_metric_%29.md): Creates a new speed threshold alert.

### Accessing alert data

- [target](speedthresholdalert/target.md): A speed measurement that represents the target threshold.
- [targetQuantity](speedthresholdalert/targetquantity.md): A HealthKit quantity that represents the target speed threshold.

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
- [SpeedRangeAlert](speedrangealert.md): An alert for a range of speed values.
- [speed(\_:unit:metric:)](workoutalert/speed%28__unit_metric_%29-4zald.md): Conforms when `Self` is `SpeedThresholdAlert`. Creates a new speed threshold alert.
