> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerynotification/reason](https://developer.apple.com/documentation/cloudkit/ckquerynotification/reason)

# CKQueryNotification.Reason (Swift)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the event that triggers the notification.

## Declaration

```swift
enum Reason
```

## Topics

### Constants

- [CKQueryNotification.Reason.recordCreated](reason/recordcreated.md): A notification that indicates the creation of a record matching the subscription’s predicate.
- [CKQueryNotification.Reason.recordUpdated](reason/recordupdated.md): A notification that indicates the update of a record matching the subscription’s predicate.
- [CKQueryNotification.Reason.recordDeleted](reason/recorddeleted.md): A notification that indicates the deletion of a record matching the subscription’s predicate.

### Initializers

- [init(rawValue:)](reason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Notification Attributes

- [queryNotificationReason](querynotificationreason.md): The event that triggers the push notification.

# CKQueryNotificationReason (Objective-C)

**Framework:** CloudKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the event that triggers the notification.

## Declaration

```objectivec
enum CKQueryNotificationReason : NSInteger;
```

## Topics

### Constants

- [CKQueryNotificationReasonRecordCreated](reason/recordcreated.md): A notification that indicates the creation of a record matching the subscription’s predicate.
- [CKQueryNotificationReasonRecordUpdated](reason/recordupdated.md): A notification that indicates the update of a record matching the subscription’s predicate.
- [CKQueryNotificationReasonRecordDeleted](reason/recorddeleted.md): A notification that indicates the deletion of a record matching the subscription’s predicate.

## See Also

### Getting the Notification Attributes

- [queryNotificationReason](querynotificationreason.md): The event that triggers the push notification.
