> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/notificationresponse/usertext

# userText

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A text string that a person provides in response to the notification.

## Declaration

```swift
var userText: String?
```

<a id="discussion"></a>

## Discussion

This property contains text for notifications that support the [AccessoryNotification.Action.ActionType.textInput(placeholder:)](../accessorynotification/action/actiontype/textinput%28placeholder_%29.md) action type.
