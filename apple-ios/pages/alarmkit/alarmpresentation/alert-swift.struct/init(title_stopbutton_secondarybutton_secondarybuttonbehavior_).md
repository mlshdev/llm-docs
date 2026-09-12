> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmpresentation/alert-swift.struct/init(title:stopbutton:secondarybutton:secondarybuttonbehavior:)](https://developer.apple.com/documentation/alarmkit/alarmpresentation/alert-swift.struct/init(title:stopbutton:secondarybutton:secondarybuttonbehavior:))

# init(title:stopButton:secondaryButton:secondaryButtonBehavior:)

**Framework:** AlarmKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ (deprecated in 26.1) · iPadOS 26.0+ (deprecated in 26.1) · Mac Catalyst 26.0+ (deprecated in 26.1)

Creates an alert for an alarm.

> stopButton is deprecated and will no longer be used

## Declaration

```swift
init(title: LocalizedStringResource, stopButton: AlarmButton, secondaryButton: AlarmButton? = nil, secondaryButtonBehavior: AlarmPresentation.Alert.SecondaryButtonBehavior? = nil)
```

## Parameters

- `title`: The title of the alert.
- `stopButton`: The end button for an alarm.
- `secondaryButton`: The customizable second button for an alarm.
- `secondaryButtonBehavior`: The defined behavior of the secondary button.

## See Also

### Deprecated

- [stopButton](stopbutton.md): Deprecated. The appearance of the stop button.
