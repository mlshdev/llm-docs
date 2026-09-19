> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkit/cknotification/containeridentifier

# containerIdentifier (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The ID of the container with the content that triggers the notification.

## Declaration

```swift
var containerIdentifier: String? { get }
```

<a id="discussion"></a>

## Discussion

Use this property to determine the location of the changed content.

## See Also

### Identifying the Notification

- [notificationID](notificationid.md): The notification’s ID.
- [CKNotification.ID](id.md): An object that uniquely identifies a push notification that a container sends.
- [notificationType](notificationtype-swift.property.md): The type of event that generates the notification.
- [CKNotification.NotificationType](notificationtype-swift.enum.md): Constants that indicate the type of event that generates the push notification.

# containerIdentifier (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The ID of the container with the content that triggers the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * containerIdentifier;
```

<a id="discussion"></a>

## Discussion

Use this property to determine the location of the changed content.

## See Also

### Identifying the Notification

- [notificationID](notificationid.md): The notification’s ID.
- [CKNotificationID](id.md): An object that uniquely identifies a push notification that a container sends.
- [notificationType](notificationtype-swift.property.md): The type of event that generates the notification.
- [CKNotificationType](notificationtype-swift.enum.md): Constants that indicate the type of event that generates the push notification.
