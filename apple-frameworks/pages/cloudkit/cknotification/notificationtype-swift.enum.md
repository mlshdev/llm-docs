> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cknotification/notificationtype-swift.enum](https://developer.apple.com/documentation/cloudkit/cknotification/notificationtype-swift.enum)

# CKNotification.NotificationType (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the type of event that generates the push notification.

## Declaration

```swift
enum NotificationType
```

## Topics

### Notification Types

- [CKNotification.NotificationType.query](notificationtype-swift.enum/query.md): A notification that CloudKit generates from a query subscription’s predicate.
- [CKNotification.NotificationType.database](notificationtype-swift.enum/database.md): A notification that CloudKit generates when the contents of a database change.
- [CKNotification.NotificationType.recordZone](notificationtype-swift.enum/recordzone.md): A notification that CloudKit generates when the contents of a record zone change.
- [CKNotification.NotificationType.readNotification](notificationtype-swift.enum/readnotification.md): A notification that your app marks as read.

### Initializers

- [init(rawValue:)](notificationtype-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying the Notification

- [notificationID](notificationid.md): The notification’s ID.
- [CKNotification.ID](id.md): An object that uniquely identifies a push notification that a container sends.
- [notificationType](notificationtype-swift.property.md): The type of event that generates the notification.
- [containerIdentifier](containeridentifier.md): The ID of the container with the content that triggers the notification.

# CKNotificationType (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the type of event that generates the push notification.

## Declaration

```objectivec
enum CKNotificationType : NSInteger;
```

## Topics

### Notification Types

- [CKNotificationTypeQuery](notificationtype-swift.enum/query.md): A notification that CloudKit generates from a query subscription’s predicate.
- [CKNotificationTypeDatabase](notificationtype-swift.enum/database.md): A notification that CloudKit generates when the contents of a database change.
- [CKNotificationTypeRecordZone](notificationtype-swift.enum/recordzone.md): A notification that CloudKit generates when the contents of a record zone change.
- [CKNotificationTypeReadNotification](notificationtype-swift.enum/readnotification.md): A notification that your app marks as read.

## See Also

### Identifying the Notification

- [notificationID](notificationid.md): The notification’s ID.
- [CKNotificationID](id.md): An object that uniquely identifies a push notification that a container sends.
- [notificationType](notificationtype-swift.property.md): The type of event that generates the notification.
- [containerIdentifier](containeridentifier.md): The ID of the container with the content that triggers the notification.
