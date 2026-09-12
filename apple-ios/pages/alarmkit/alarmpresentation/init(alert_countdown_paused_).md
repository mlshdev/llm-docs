> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentation/init(alert:countdown:paused:)](https://developer.apple.com/documentation/alarmkit/alarmpresentation/init(alert:countdown:paused:))

# init(alert:countdown:paused:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Configures an alert with an optional countdown and paused state.

## Declaration

```swift
init(alert: AlarmPresentation.Alert, countdown: AlarmPresentation.Countdown? = nil, paused: AlarmPresentation.Paused? = nil)
```

## Parameters

- `alert`: The required content for the alert mode of the alarm.
- `countdown`: An optional parameter with a default `nil` value. Provide a [AlarmPresentation.Countdown](countdown-swift.struct.md) object.
- `paused`: An optional parameter with a default `nil` value. Provide a [AlarmPresentation.Paused](paused-swift.struct.md) object.

## See Also

### Defining the alarm UI

- [alert](alert-swift.property.md): The content for the alert mode of the alarm.
- [countdown](countdown-swift.property.md): The content for the snooze or countdown mode of the alarm.
- [paused](paused-swift.property.md): The content for the pause mode of the alarm.
