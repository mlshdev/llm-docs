> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/heartraterangealert](https://developer.apple.com/documentation/workoutkit/heartraterangealert)

# HeartRateRangeAlert

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An alert for a range of heart rates.

## Declaration

```swift
struct HeartRateRangeAlert
```

## Topics

### Creating new heart rate alerts

- [init(target:)](heartraterangealert/init%28target_%29.md): Creates a new heart rate alert for a closed range of measurements.

### Accessing the alert data

- [target](heartraterangealert/target.md): The target range.
- [targetQuantityLowerBound](heartraterangealert/targetquantitylowerbound.md): The target’s lower bound.
- [targetQuantityUpperBound](heartraterangealert/targetquantityupperbound.md): The target’s upper bound.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [WorkoutAlert](workoutalert.md)

## See Also

### Creating heart rate alerts

- [heartRate(\_:unit:)](workoutalert/heartrate%28__unit_%29.md): Conforms when `Self` is `HeartRateRangeAlert`. Creates a new heart rate alert for the target range.
- [heartRate(zone:)](workoutalert/heartrate%28zone_%29.md): Conforms when `Self` is `HeartRateZoneAlert`. Creates a new alert for the specified heart rate zone.
- [HeartRateZoneAlert](heartratezonealert.md): An alert for a heart rate zone.
