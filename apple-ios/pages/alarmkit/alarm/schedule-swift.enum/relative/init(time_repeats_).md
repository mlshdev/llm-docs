> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/schedule-swift.enum/relative/init(time:repeats:)](https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.enum/relative/init(time:repeats:))

# init(time:repeats:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates an alarm that fires at a specific time.

## Declaration

```swift
init(time: Alarm.Schedule.Relative.Time, repeats: Alarm.Schedule.Relative.Recurrence = .never)
```

## Parameters

- `time`: The time at which the alarm will alert.
- `repeats`: The cadence at which the alarm repeats, if any.

## See Also

### Creating a scheduled alarm

- [Alarm.Schedule.Relative.Time](time-swift.struct.md): An object that describes the hour and minute at which an alarm alerts.
