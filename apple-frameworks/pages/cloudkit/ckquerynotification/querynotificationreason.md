> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckquerynotification/querynotificationreason](https://developer.apple.com/documentation/cloudkit/ckquerynotification/querynotificationreason)

# queryNotificationReason (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The event that triggers the push notification.

## Declaration

```swift
var queryNotificationReason: CKQueryNotification.Reason { get }
```

<a id="discussion"></a>

## Discussion

Subscription notifications result from the creation, deletion, or updating of a single record. The record in question must match the subscription’s predicate for an event to trigger.

## See Also

### Getting the Notification Attributes

- [CKQueryNotification.Reason](reason.md): Constants that indicate the event that triggers the notification.

# queryNotificationReason (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The event that triggers the push notification.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CKQueryNotificationReason queryNotificationReason;
```

<a id="discussion"></a>

## Discussion

Subscription notifications result from the creation, deletion, or updating of a single record. The record in question must match the subscription’s predicate for an event to trigger.

## See Also

### Getting the Notification Attributes

- [CKQueryNotificationReason](reason.md): Constants that indicate the event that triggers the notification.
