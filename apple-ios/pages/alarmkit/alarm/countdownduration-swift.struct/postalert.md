> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarm/countdownduration-swift.struct/postalert

# postAlert

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The duration applied after the alarm has alerted at least once and moves back to the countdown state.

## Declaration

```swift
var postAlert: TimeInterval?
```

<a id="discussion"></a>

## Discussion

For example, this would be the snooze duration for an alarm.  A timer with a repeat button could set this value to be the same as `preAlert`, or it could leave the value as `nil`.  If the value is `nil` we will use the `preAlert` duration for post-alarm countdowns.

## See Also

### Creating a countdown duration

- [init(preAlert:postAlert:)](init%28prealert_postalert_%29.md): Creates an instance of a countdown duration.
- [preAlert](prealert.md): The duration applied before the alarm fires.
