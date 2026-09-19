> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.property

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
