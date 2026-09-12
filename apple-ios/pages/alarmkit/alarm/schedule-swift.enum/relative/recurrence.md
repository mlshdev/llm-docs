> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/schedule-swift.enum/relative/recurrence](https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.enum/relative/recurrence)

# Alarm.Schedule.Relative.Recurrence

**Framework:** AlarmKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Describes the cadence at which an alarm will repeat, if any.

## Declaration

```swift
enum Recurrence
```

## Topics

### Recurring alarms

- [Alarm.Schedule.Relative.Recurrence.never](recurrence/never.md): An alarm that never repeats.
- [Alarm.Schedule.Relative.Recurrence.weekly(\_:)](recurrence/weekly%28__%29.md): An alarm that repeats weekly, on the specified day.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing an alarm

- [repeats](repeats.md): The cadence at which the alarm repeats, if any.
- [time](time-swift.property.md): The hour and minute at which the alarm alerts, relative to the device’s current timezone.
