> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/heartratezonealert](https://developer.apple.com/documentation/workoutkit/heartratezonealert)

# HeartRateZoneAlert

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An alert for a heart rate zone.

## Declaration

```swift
struct HeartRateZoneAlert
```

## Topics

### Creating new heart rate zone alerts

- [init(zone:)](heartratezonealert/init%28zone_%29.md): Creates a new alert for the target heart rate zone.

### Accessing the alert data

- [zone](heartratezonealert/zone.md): The target heart rate zone.

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
- [HeartRateRangeAlert](heartraterangealert.md): An alert for a range of heart rates.
- [heartRate(zone:)](workoutalert/heartrate%28zone_%29.md): Conforms when `Self` is `HeartRateZoneAlert`. Creates a new alert for the specified heart rate zone.
