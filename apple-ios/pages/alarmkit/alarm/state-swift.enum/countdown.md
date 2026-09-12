> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/state-swift.enum/countdown](https://developer.apple.com/documentation/alarmkit/alarm/state-swift.enum/countdown)

# Alarm.State.countdown

**Framework:** AlarmKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The alarm is counting down to its alert time.

## Declaration

```swift
case countdown
```

<a id="discussion"></a>

## Discussion

Alarms are in this state when they are requested with a countdown duration, or when a person snoozes the alarm.

## See Also

### Setting alarm states

- [Alarm.State.alerting](alerting.md): The alarm is currently firing.
- [Alarm.State.paused](paused.md): A person paused the countdown.
- [Alarm.State.scheduled](scheduled.md): The alarm is scheduled and ready to alert at the appropriate time.
