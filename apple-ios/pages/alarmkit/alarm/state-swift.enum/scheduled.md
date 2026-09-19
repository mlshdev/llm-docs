> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarm/state-swift.enum/scheduled

# Alarm.State.scheduled

**Framework:** AlarmKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The alarm is scheduled and ready to alert at the appropriate time.

## Declaration

```swift
case scheduled
```

## See Also

### Setting alarm states

- [Alarm.State.alerting](alerting.md): The alarm is currently firing.
- [Alarm.State.countdown](countdown.md): The alarm is counting down to its alert time.
- [Alarm.State.paused](paused.md): A person paused the countdown.
