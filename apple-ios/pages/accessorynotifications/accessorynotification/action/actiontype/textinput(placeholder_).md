> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/action/actiontype/textinput(placeholder:)](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/action/actiontype/textinput(placeholder:))

# AccessoryNotification.Action.ActionType.textInput(placeholder:)

**Framework:** Accessory Notifications  
**Kind:** Case  
**Availability:** iOS 26.5+

An action type that captures text provided by a person in response to a notification.

## Declaration

```swift
case textInput(placeholder: String)
```

## Parameters

- `placeholder`: Text that acts as a placeholder for the text input field.

## Mentioned In

- [Responding to forwarded notifications](../../../responding-to-forwarded-notifications.md)

## See Also

### Determining the type of action

- [AccessoryNotification.Action.ActionType.dismiss](dismiss.md): An action type that dismisses a notification.
- [AccessoryNotification.Action.ActionType.background](background.md): An action type that handles background interactions with a notification.
