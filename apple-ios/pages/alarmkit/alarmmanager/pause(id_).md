> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/pause(id:)](https://developer.apple.com/documentation/alarmkit/alarmmanager/pause(id:))

# pause(id:)

**Framework:** AlarmKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Pauses the alarm with the specified ID if it’s in the countdown state.

## Declaration

```swift
func pause(id: Alarm.ID) throws
```

## Parameters

- `id`: The identifier of the alarm to pause.

<a id="discussion"></a>

## Discussion

The function throws otherwise. Sets the alarm to the [AlarmPresentationState.Mode.paused(\_:)](../alarmpresentationstate/mode-swift.enum/paused%28__%29.md) state.

## See Also

### Changing an alarm state

- [cancel(id:)](cancel%28id_%29.md): Cancels the alarm with the specified ID.
- [countdown(id:)](countdown%28id_%29.md): Performs a countdown for the alarm with the specified ID if it’s currently alerting.
- [resume(id:)](resume%28id_%29.md): Resumes the alarm with the specified ID if it’s in the paused state.
- [stop(id:)](stop%28id_%29.md): Stops the alarm with the specified ID.
