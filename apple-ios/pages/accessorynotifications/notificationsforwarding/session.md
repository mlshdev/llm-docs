> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding/session](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/session)

# NotificationsForwarding.Session

**Framework:** Accessory Notifications  
**Kind:** Class  
**Availability:** iOS 26.5+

A session object that facilitates bidirectional communication between the system and your extension.

## Declaration

```swift
final class Session
```

## Relationships

### Conforms To

- [AccessoryFeatureSession](../../accessorytransportextension/accessoryfeaturesession.md)
- [NotificationsForwarding.AccessoryNotificationsSession](accessorynotificationssession.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Notification receipt

- [Receiving iOS notifications on an accessory](../../accessorytransportextension/receiving-ios-notifications-on-an-accessory.md): Create custom app extensions that manage iOS system notifications for your accessory.
- [NotificationsForwarding](../notificationsforwarding.md): A class for handling notification forwarding in your accessory’s data provider extension.
- [NotificationsForwarding.AccessoryNotificationsHandler](accessorynotificationshandler.md): A protocol that defines methods for handling notification life cycle events in your extension.
