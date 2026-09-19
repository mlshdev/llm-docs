> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmpresentation/countdown-swift.property

# countdown

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The content for the snooze or countdown mode of the alarm.

## Declaration

```swift
var countdown: AlarmPresentation.Countdown?
```

<a id="discussion"></a>

## Discussion

This value can be `nil` if the alarm doesn’t support countdown mode.

## See Also

### Defining the alarm UI

- [init(alert:countdown:paused:)](init%28alert_countdown_paused_%29.md): Configures an alert with an optional countdown and paused state.
- [alert](alert-swift.property.md): The content for the alert mode of the alarm.
- [paused](paused-swift.property.md): The content for the pause mode of the alarm.
