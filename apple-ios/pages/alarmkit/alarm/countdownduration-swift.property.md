> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarm/countdownduration-swift.property

# countdownDuration

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The time left before an alert, in seconds.

## Declaration

```swift
var countdownDuration: Alarm.CountdownDuration?
```

<a id="discussion"></a>

## Discussion

When set to a non-nil value, the system shows the countdown in the Lock Screen for the specified duration. The UI will appear at a time equal to the next scheduled alert date minus the duration.

## See Also

### Defining a countdown duration

- [Alarm.CountdownDuration](countdownduration-swift.struct.md): An object that defines the durations used in an alarm that has a countdown.
- [id](id.md): The unique identifier of the alarm.
- [Alarm.State](state-swift.enum.md): An enum that lists all possible states of an alarm.
- [state](state-swift.property.md): The current state of the alarm.
