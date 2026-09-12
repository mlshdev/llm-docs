> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding/accessorynotificationssession](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationssession)

# NotificationsForwarding.AccessoryNotificationsSession

**Framework:** Accessory Notifications  
**Kind:** Protocol  
**Availability:** iOS 26.5+

A protocol that enables bidirectional communication between your extension and the system.

## Declaration

```swift
protocol AccessoryNotificationsSession : Sendable
```

<a id="overview"></a>

## Overview

Use the session object provided to [didActivate(for:)](accessorynotificationshandler/didactivate%28for_%29.md) to send messages to your accessory and communicate notification responses back to the system.

## Topics

### Sending messages to accessory

- [send(message:)](accessorynotificationssession/send%28message_%29.md): Sends a message to the paired accessory.

### Communicating responses

- [sendResponse(\_:)](accessorynotificationssession/sendresponse%28__%29.md): Sends a notification response from the accessory to the system.

### Removing notifications

- [removeNotifications(identifiers:)](accessorynotificationssession/removenotifications%28identifiers_%29.md): Removes the identified notifications.
- [removeNotifications(withIdentifiers:sourceIdentifier:)](accessorynotificationssession/removenotifications%28withidentifiers_sourceidentifier_%29.md): Removes notifications using primitive identifier components.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [NotificationsForwarding.Session](session.md)

## See Also

### Managing notification sessions

- [NotificationsForwarding.Session](session.md): A session object that facilitates bidirectional communication between the system and your extension.
