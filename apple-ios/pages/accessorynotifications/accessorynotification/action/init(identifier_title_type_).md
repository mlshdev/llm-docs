> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/accessorynotification/action/init(identifier:title:type:)

# init(identifier:title:type:)

**Framework:** Accessory Notifications  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Initializes a notification action with the given identifier, title, and type.

## Declaration

```swift
init(identifier: String, title: String? = nil, type: AccessoryNotification.Action.ActionType)
```

## Parameters

- `identifier`: A unique identifier for the action.
- `title`: The action’s display title.
- `type`: The action’s type.
