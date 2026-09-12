> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/resume(id:)](https://developer.apple.com/documentation/alarmkit/alarmmanager/resume(id:))

# resume(id:)

**Framework:** AlarmKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Resumes the alarm with the specified ID if it’s in the paused state.

## Declaration

```swift
func resume(id: Alarm.ID) throws
```

## Parameters

- `id`: The identifier of the alarm to resume.

<a id="discussion"></a>

## Discussion

The function throws otherwise. Sets the alarm to the [AlarmPresentationState.Mode.Countdown](../alarmpresentationstate/mode-swift.enum/countdown.md) state.

## See Also

### Changing an alarm state

- [cancel(id:)](cancel%28id_%29.md): Cancels the alarm with the specified ID.
- [countdown(id:)](countdown%28id_%29.md): Performs a countdown for the alarm with the specified ID if it’s currently alerting.
- [pause(id:)](pause%28id_%29.md): Pauses the alarm with the specified ID if it’s in the countdown state.
- [stop(id:)](stop%28id_%29.md): Stops the alarm with the specified ID.
