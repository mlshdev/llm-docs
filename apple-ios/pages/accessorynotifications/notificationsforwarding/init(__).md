> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding/init(_:)](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/init(_:))

# init(\_:)

**Framework:** Accessory Notifications  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Initializes a notifications-forwarding capability with a handler factory.

## Declaration

```swift
init(_ handlerFactory: @escaping @Sendable () -> any NotificationsForwarding.AccessoryNotificationsHandler)
```

## Parameters

- `handlerFactory`: A closure that creates and returns an [NotificationsForwarding.AccessoryNotificationsHandler](accessorynotificationshandler.md) instance.
