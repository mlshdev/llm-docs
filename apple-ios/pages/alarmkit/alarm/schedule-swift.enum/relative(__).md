> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/schedule-swift.enum/relative(_:)](https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.enum/relative(_:))

# Alarm.Schedule.relative(\_:)

**Framework:** AlarmKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An alarm that can repeat and fire at a time relative to the device’s current time zone.

## Declaration

```swift
case relative(Alarm.Schedule.Relative)
```

<a id="discussion"></a>

## Discussion

You can use `relative` for events which need to take into account the current time zone. For example, a wake up alarm.

## See Also

### Setting an alarm schedule

- [Alarm.Schedule.Relative](relative.md): An object that describes when an alarm alerts, relative to the device’s timezone.
- [Alarm.Schedule.fixed(\_:)](fixed%28__%29.md): A one-shot alarm that fires at a specific time, not a time relative to the current time zone.
