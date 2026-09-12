> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentationstate/init(alarmid:mode:)](https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/init(alarmid:mode:))

# init(alarmID:mode:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates an instance of an alarm state.

## Declaration

```swift
init(alarmID: Alarm.ID, mode: AlarmPresentationState.Mode)
```

## Parameters

- `alarmID`: The unique ID of the alarm.
- `mode`: The mode the alarm is in such as alerting or countdown.

## See Also

### Creating an alarm state

- [alarmID](alarmid.md): The unique ID of the alarm.
- [mode](mode-swift.property.md): The specific state of the alarm, either alerting, countdown, or paused.
- [AlarmPresentationState.Mode](mode-swift.enum.md): A list of all modes the alarm can be in: either alert, countdown, or paused.
