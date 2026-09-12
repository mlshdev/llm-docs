> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler)

# NotificationsForwarding.AccessoryNotificationsHandler

**Framework:** Accessory Notifications  
**Kind:** Protocol  
**Availability:** iOS 26.5+

A protocol that defines methods for handling notification life cycle events in your extension.

## Declaration

```swift
protocol AccessoryNotificationsHandler : Sendable
```

<a id="overview"></a>

## Overview

Implement this protocol in your app’s [didActivate(for:)](accessorynotificationshandler/didactivate%28for_%29.md) extension to receive, update, and remove notifications forwarded to your accessory.

## Topics

### Managing the session life cycle

- [didActivate(for:)](accessorynotificationshandler/didactivate%28for_%29.md): Establishes a notification session for communication with the system.
- [didInvalidate()](accessorynotificationshandler/didinvalidate%28%29.md): Handles notification session termination.

### Receiving notifications

- [addNotification(\_:alertingContext:)](accessorynotificationshandler/addnotification%28__alertingcontext_%29.md): Provides a new notification for display on your accessory.

### Updating notifications

- [updateNotification(\_:)](accessorynotificationshandler/updatenotification%28__%29.md): Updates a notification with new content.

### Removing notifications

- [removeNotification(identifier:)](accessorynotificationshandler/removenotification%28identifier_%29.md): Removes a previously-posted notification from your accessory.
- [removeAllNotifications()](accessorynotificationshandler/removeallnotifications%28%29.md): Removes all notifications from the user interface.

### Receiving accessory messages

- [messageHandler(\_:)](accessorynotificationshandler/messagehandler%28__%29.md): Handles decrypted messages received from the paired accessory.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Notification receipt

- [Receiving iOS notifications on an accessory](../../accessorytransportextension/receiving-ios-notifications-on-an-accessory.md): Create custom app extensions that manage iOS system notifications for your accessory.
- [NotificationsForwarding](../notificationsforwarding.md): A class for handling notification forwarding in your accessory’s data provider extension.
- [NotificationsForwarding.Session](session.md): A session object that facilitates bidirectional communication between the system and your extension.
