> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationresponse/usertext](https://developer.apple.com/documentation/accessorynotifications/notificationresponse/usertext)

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
