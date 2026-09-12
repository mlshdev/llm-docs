> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/schedule-swift.enum/relative](https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.enum/relative)

# Alarm.Schedule.Relative

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that describes when an alarm alerts, relative to the device’s timezone.

## Declaration

```swift
struct Relative
```

## Topics

### Creating a scheduled alarm

- [init(time:repeats:)](relative/init%28time_repeats_%29.md): Creates an alarm that fires at a specific time.
- [Alarm.Schedule.Relative.Time](relative/time-swift.struct.md): An object that describes the hour and minute at which an alarm alerts.

### Describing an alarm

- [repeats](relative/repeats.md): The cadence at which the alarm repeats, if any.
- [time](relative/time-swift.property.md): The hour and minute at which the alarm alerts, relative to the device’s current timezone.
- [Alarm.Schedule.Relative.Recurrence](relative/recurrence.md): Describes the cadence at which an alarm will repeat, if any.

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

- [Alarm.Schedule.fixed(\_:)](fixed%28__%29.md): A one-shot alarm that fires at a specific time, not a time relative to the current time zone.
- [Alarm.Schedule.relative(\_:)](relative%28__%29.md): An alarm that can repeat and fire at a time relative to the device’s current time zone.
