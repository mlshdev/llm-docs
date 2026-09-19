> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/alarmid

# alarmID

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The unique ID of the alarm.

## Declaration

```swift
var alarmID: Alarm.ID
```

## See Also

### Creating an alarm state

- [init(alarmID:mode:)](init%28alarmid_mode_%29.md): Creates an instance of an alarm state.
- [mode](mode-swift.property.md): The specific state of the alarm, either alerting, countdown, or paused.
- [AlarmPresentationState.Mode](mode-swift.enum.md): A list of all modes the alarm can be in: either alert, countdown, or paused.
