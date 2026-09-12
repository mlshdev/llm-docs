> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/schedule-swift.enum/relative/time-swift.struct](https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.enum/relative/time-swift.struct)

# Alarm.Schedule.Relative.Time

**Framework:** AlarmKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An object that describes the hour and minute at which an alarm alerts.

## Declaration

```swift
struct Time
```

## Topics

### Creating a scheduled time

- [init(hour:minute:)](time-swift.struct/init%28hour_minute_%29.md): Creates an instance of time.
- [hour](time-swift.struct/hour.md): The hour mark the alarm alerts.
- [minute](time-swift.struct/minute.md): The minute of the hour the alarm alerts.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a scheduled alarm

- [init(time:repeats:)](init%28time_repeats_%29.md): Creates an alarm that fires at a specific time.
