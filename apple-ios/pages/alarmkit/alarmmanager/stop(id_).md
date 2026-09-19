> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmmanager/stop(id:)

# stop(id:)

**Framework:** AlarmKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Stops the alarm with the specified ID.

## Declaration

```swift
func stop(id: Alarm.ID) throws
```

## Parameters

- `id`: The identifier of the alarm to stop.

<a id="discussion"></a>

## Discussion

If the alarm is a one-shot, meaning it doesn’t have a repeating schedule, then the system deletes the alarm. If the alarm repeats then it’s rescheduled to alert or begins counting down at the next scheduled time.

## See Also

### Changing an alarm state

- [cancel(id:)](cancel%28id_%29.md): Cancels the alarm with the specified ID.
- [countdown(id:)](countdown%28id_%29.md): Performs a countdown for the alarm with the specified ID if it’s currently alerting.
- [pause(id:)](pause%28id_%29.md): Pauses the alarm with the specified ID if it’s in the countdown state.
- [resume(id:)](resume%28id_%29.md): Resumes the alarm with the specified ID if it’s in the paused state.
