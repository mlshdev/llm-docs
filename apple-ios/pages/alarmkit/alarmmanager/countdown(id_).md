> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/countdown(id:)](https://developer.apple.com/documentation/alarmkit/alarmmanager/countdown(id:))

# countdown(id:)

**Framework:** AlarmKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Performs a countdown for the alarm with the specified ID if it’s currently alerting.

## Declaration

```swift
func countdown(id: Alarm.ID) throws
```

## Parameters

- `id`: The identifier of the alarm to perform a countdown for.

<a id="discussion"></a>

## Discussion

The function throws otherwise. This is identical to the repeat function of a timer, or the snooze function of an alarm.

## See Also

### Changing an alarm state

- [cancel(id:)](cancel%28id_%29.md): Cancels the alarm with the specified ID.
- [pause(id:)](pause%28id_%29.md): Pauses the alarm with the specified ID if it’s in the countdown state.
- [resume(id:)](resume%28id_%29.md): Resumes the alarm with the specified ID if it’s in the paused state.
- [stop(id:)](stop%28id_%29.md): Stops the alarm with the specified ID.
