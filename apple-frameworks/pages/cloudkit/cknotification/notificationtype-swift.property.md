> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cknotification/notificationtype-swift.property](https://developer.apple.com/documentation/cloudkit/cknotification/notificationtype-swift.property)

# notificationType (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The type of event that generates the notification.

## Declaration

```swift
var notificationType: CKNotification.NotificationType { get }
```

<a id="discussion"></a>

## Discussion

Different notification types correspond to different subclasses of [CKNotification](../cknotification.md), so you can use the value in this property to determine how to handle the notification data.

## See Also

### Identifying the Notification

- [notificationID](notificationid.md): The notification’s ID.
- [CKNotification.ID](id.md): An object that uniquely identifies a push notification that a container sends.
- [CKNotification.NotificationType](notificationtype-swift.enum.md): Constants that indicate the type of event that generates the push notification.
- [containerIdentifier](containeridentifier.md): The ID of the container with the content that triggers the notification.

# notificationType (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The type of event that generates the notification.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CKNotificationType notificationType;
```

<a id="discussion"></a>

## Discussion

Different notification types correspond to different subclasses of [CKNotification](../cknotification.md), so you can use the value in this property to determine how to handle the notification data.

## See Also

### Identifying the Notification

- [notificationID](notificationid.md): The notification’s ID.
- [CKNotificationID](id.md): An object that uniquely identifies a push notification that a container sends.
- [CKNotificationType](notificationtype-swift.enum.md): Constants that indicate the type of event that generates the push notification.
- [containerIdentifier](containeridentifier.md): The ID of the container with the content that triggers the notification.
