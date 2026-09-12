> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/cancel(id:)](https://developer.apple.com/documentation/alarmkit/alarmmanager/cancel(id:))

# cancel(id:)

**Framework:** AlarmKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Cancels the alarm with the specified ID.

## Declaration

```swift
func cancel(id: Alarm.ID) throws
```

## Parameters

- `id`: The identifier of the alarm to cancel.

<a id="discussion"></a>

## Discussion

Deletes the alarm from the system even if the alarm has a repeating schedule.

## See Also

### Changing an alarm state

- [countdown(id:)](countdown%28id_%29.md): Performs a countdown for the alarm with the specified ID if it’s currently alerting.
- [pause(id:)](pause%28id_%29.md): Pauses the alarm with the specified ID if it’s in the countdown state.
- [resume(id:)](resume%28id_%29.md): Resumes the alarm with the specified ID if it’s in the paused state.
- [stop(id:)](stop%28id_%29.md): Stops the alarm with the specified ID.
