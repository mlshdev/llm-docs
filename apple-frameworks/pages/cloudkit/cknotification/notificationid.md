> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cknotification/notificationid](https://developer.apple.com/documentation/cloudkit/cknotification/notificationid)

# notificationID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The notification’s ID.

## Declaration

```swift
@NSCopying var notificationID: CKNotification.ID? { get }
```

<a id="discussion"></a>

## Discussion

Use this property to differentiate notifications.

## See Also

### Identifying the Notification

- [CKNotification.ID](id.md): An object that uniquely identifies a push notification that a container sends.
- [notificationType](notificationtype-swift.property.md): The type of event that generates the notification.
- [CKNotification.NotificationType](notificationtype-swift.enum.md): Constants that indicate the type of event that generates the push notification.
- [containerIdentifier](containeridentifier.md): The ID of the container with the content that triggers the notification.

# notificationID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The notification’s ID.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) CKNotificationID * notificationID;
```

<a id="discussion"></a>

## Discussion

Use this property to differentiate notifications.

## See Also

### Identifying the Notification

- [CKNotificationID](id.md): An object that uniquely identifies a push notification that a container sends.
- [notificationType](notificationtype-swift.property.md): The type of event that generates the notification.
- [CKNotificationType](notificationtype-swift.enum.md): Constants that indicate the type of event that generates the push notification.
- [containerIdentifier](containeridentifier.md): The ID of the container with the content that triggers the notification.
