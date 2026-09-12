> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/action/actiontype/background](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/action/actiontype/background)

# AccessoryNotification.Action.ActionType.background

**Framework:** Accessory Notifications  
**Kind:** Case  
**Availability:** iOS 26.5+

An action type that handles background interactions with a notification.

## Declaration

```swift
case background
```

<a id="discussion"></a>

## Discussion

The app that sends the notification might not be running on the accessory, but your companion app can perform a task in the background when a person interacts with the notification.

## See Also

### Determining the type of action

- [AccessoryNotification.Action.ActionType.dismiss](dismiss.md): An action type that dismisses a notification.
- [AccessoryNotification.Action.ActionType.textInput(placeholder:)](textinput%28placeholder_%29.md): An action type that captures text provided by a person in response to a notification.
