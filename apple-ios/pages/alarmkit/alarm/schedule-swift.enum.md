> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/schedule-swift.enum](https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.enum)

# Alarm.Schedule

**Framework:** AlarmKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A list of all types of schedules that the framework supports.

## Declaration

```swift
enum Schedule
```

## Topics

### Setting an alarm schedule

- [Alarm.Schedule.Relative](schedule-swift.enum/relative.md): An object that describes when an alarm alerts, relative to the device’s timezone.
- [Alarm.Schedule.fixed(\_:)](schedule-swift.enum/fixed%28__%29.md): A one-shot alarm that fires at a specific time, not a time relative to the current time zone.
- [Alarm.Schedule.relative(\_:)](schedule-swift.enum/relative%28__%29.md): An alarm that can repeat and fire at a time relative to the device’s current time zone.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting an alarm schedule

- [schedule](schedule-swift.property.md): The schedule determines when the alarm alerts.
