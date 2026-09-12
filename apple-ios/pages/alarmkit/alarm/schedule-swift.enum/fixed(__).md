> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/schedule-swift.enum/fixed(_:)](https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.enum/fixed(_:))

# Alarm.Schedule.fixed(\_:)

**Framework:** AlarmKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A one-shot alarm that fires at a specific time, not a time relative to the current time zone.

## Declaration

```swift
case fixed(Date)
```

<a id="discussion"></a>

## Discussion

You can use `fixed` for events where the time won’t vary based on where the person is located. For example, like alerting the time of a sports game.

## See Also

### Setting an alarm schedule

- [Alarm.Schedule.Relative](relative.md): An object that describes when an alarm alerts, relative to the device’s timezone.
- [Alarm.Schedule.relative(\_:)](relative%28__%29.md): An alarm that can repeat and fire at a time relative to the device’s current time zone.
