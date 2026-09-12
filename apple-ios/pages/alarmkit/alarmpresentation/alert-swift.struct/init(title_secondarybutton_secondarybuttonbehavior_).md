> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentation/alert-swift.struct/init(title:secondarybutton:secondarybuttonbehavior:)](https://developer.apple.com/documentation/alarmkit/alarmpresentation/alert-swift.struct/init(title:secondarybutton:secondarybuttonbehavior:))

# init(title:secondaryButton:secondaryButtonBehavior:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+

Creates an alert for an alarm, with a system-provided stop control and optionally a second button.

## Declaration

```swift
init(title: LocalizedStringResource, secondaryButton: AlarmButton? = nil, secondaryButtonBehavior: AlarmPresentation.Alert.SecondaryButtonBehavior? = nil)
```

## Parameters

- `title`: The title of the alert.
- `secondaryButton`: The customizable second button for an alarm.
- `secondaryButtonBehavior`: The defined behavior of the secondary button.

## See Also

### Creating an alert

- [title](title.md): The title of the alert.
