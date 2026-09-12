> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/action/actiontype](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/action/actiontype)

# AccessoryNotification.Action.ActionType

**Framework:** Accessory Notifications  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

The types of actions available for a notification.

## Declaration

```swift
enum ActionType
```

<a id="overview"></a>

## Overview

The [AccessoryNotification.Action](../action.md) structure’s [type](type.md) property is of this type.

## Topics

### Determining the type of action

- [AccessoryNotification.Action.ActionType.dismiss](actiontype/dismiss.md): An action type that dismisses a notification.
- [AccessoryNotification.Action.ActionType.background](actiontype/background.md): An action type that handles background interactions with a notification.
- [AccessoryNotification.Action.ActionType.textInput(placeholder:)](actiontype/textinput%28placeholder_%29.md): An action type that captures text provided by a person in response to a notification.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Determining the action type

- [type](type.md): A type for the action.
