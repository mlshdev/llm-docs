> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/powerzonealert](https://developer.apple.com/documentation/workoutkit/powerzonealert)

# PowerZoneAlert

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An alert for a power zone.

## Declaration

```swift
struct PowerZoneAlert
```

## Topics

### Creating power zone alerts

- [init(zone:)](powerzonealert/init%28zone_%29.md): Creates a new power zone alert.

### Accessing alert data

- [zone](powerzonealert/zone.md): The target power zone.

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
- [PowerRangeAlert](powerrangealert.md): An alert for a range of power values.
- [power(\_:unit:)](workoutalert/power%28__unit_%29-289mz.md): Conforms when `Self` is `PowerThresholdAlert`. Creates an alert for the specified power threshold.
- [PowerThresholdAlert](powerthresholdalert.md): An alert for a power threshold.
- [power(zone:)](workoutalert/power%28zone_%29.md): Conforms when `Self` is `PowerZoneAlert`. Creates a new alert for the specified power zone.
