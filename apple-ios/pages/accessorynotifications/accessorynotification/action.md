> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/action](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/action)

# AccessoryNotification.Action

**Framework:** Accessory Notifications  
**Kind:** Structure  
**Availability:** iOS 26.5+

A possible user interaction with a notification.

## Declaration

```swift
struct Action
```

## Topics

### Creating an action

- [init(identifier:title:type:)](action/init%28identifier_title_type_%29.md): Initializes a notification action with the given identifier, title, and type.

### Identifying an action

- [identifier](action/identifier.md): A unique identifier for the action.
- [title](action/title.md): A title for the action.

### Determining the action type

- [type](action/type.md): A type for the action.
- [AccessoryNotification.Action.ActionType](action/actiontype.md): The types of actions available for a notification.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Handling user interactions

- [actions](actions.md): An array of possible interactions that a person can have with the notification.
