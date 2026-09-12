> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/schedule-swift.property](https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.property)

# schedule

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The schedule determines when the alarm alerts.

## Declaration

```swift
var schedule: Alarm.Schedule?
```

<a id="discussion"></a>

## Discussion

If no schedule is supplied then the alarm will begin counting down immediately.

## See Also

### Setting an alarm schedule

- [Alarm.Schedule](schedule-swift.enum.md): A list of all types of schedules that the framework supports.
