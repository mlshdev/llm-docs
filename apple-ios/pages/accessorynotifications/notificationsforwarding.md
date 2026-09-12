> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding)

# NotificationsForwarding

**Framework:** Accessory Notifications  
**Kind:** Class  
**Availability:** iOS 26.5+

A class for handling notification forwarding in your accessory’s data provider extension.

## Declaration

```swift
final class NotificationsForwarding
```

<a id="overview"></a>

## Overview

Implement the [NotificationsForwarding.AccessoryNotificationsHandler](notificationsforwarding/accessorynotificationshandler.md) protocol in your [AccessoryDataProvider](../accessorytransportextension/accessorydataprovider.md) extension to receive and manage system notifications that iOS forwards to your accessory.

## Topics

### Creating a notifications forwarding object

- [init(\_:)](notificationsforwarding/init%28__%29.md): Initializes a notifications-forwarding capability with a handler factory.

### Managing notification sessions

- [NotificationsForwarding.Session](notificationsforwarding/session.md): A session object that facilitates bidirectional communication between the system and your extension.
- [NotificationsForwarding.AccessoryNotificationsSession](notificationsforwarding/accessorynotificationssession.md): A protocol that enables bidirectional communication between your extension and the system.

### Handling notification events

- [NotificationsForwarding.AccessoryNotificationsHandler](notificationsforwarding/accessorynotificationshandler.md): A protocol that defines methods for handling notification life cycle events in your extension.

## Relationships

### Conforms To

- [AccessoryFeature](../accessorytransportextension/accessoryfeature.md)
- [AppExtensionPoint.Capability](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/capability)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Notification receipt

- [Receiving iOS notifications on an accessory](../accessorytransportextension/receiving-ios-notifications-on-an-accessory.md): Create custom app extensions that manage iOS system notifications for your accessory.
- [NotificationsForwarding.AccessoryNotificationsHandler](notificationsforwarding/accessorynotificationshandler.md): A protocol that defines methods for handling notification life cycle events in your extension.
- [NotificationsForwarding.Session](notificationsforwarding/session.md): A session object that facilitates bidirectional communication between the system and your extension.
