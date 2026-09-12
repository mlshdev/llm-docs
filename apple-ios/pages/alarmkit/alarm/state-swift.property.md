> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarm/state-swift.property](https://developer.apple.com/documentation/alarmkit/alarm/state-swift.property)

# state

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The current state of the alarm.

## Declaration

```swift
var state: Alarm.State
```

<a id="discussion"></a>

## Discussion

This is a snapshot of the state captured when the alarm was fetched from the daemon.  It won’t update if the state changes on the daemon.

## See Also

### Defining a countdown duration

- [Alarm.CountdownDuration](countdownduration-swift.struct.md): An object that defines the durations used in an alarm that has a countdown.
- [countdownDuration](countdownduration-swift.property.md): The time left before an alert, in seconds.
- [id](id.md): The unique identifier of the alarm.
- [Alarm.State](state-swift.enum.md): An enum that lists all possible states of an alarm.
