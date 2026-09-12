> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentationstate/mode-swift.property](https://developer.apple.com/documentation/alarmkit/alarmpresentationstate/mode-swift.property)

# mode

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The specific state of the alarm, either alerting, countdown, or paused.

## Declaration

```swift
var mode: AlarmPresentationState.Mode
```

<a id="discussion"></a>

## Discussion

Use `mode` to determine which mode the alarm is in, so that a widget extension can produce the appropriate UI.

## See Also

### Creating an alarm state

- [init(alarmID:mode:)](init%28alarmid_mode_%29.md): Creates an instance of an alarm state.
- [alarmID](alarmid.md): The unique ID of the alarm.
- [AlarmPresentationState.Mode](mode-swift.enum.md): A list of all modes the alarm can be in: either alert, countdown, or paused.
