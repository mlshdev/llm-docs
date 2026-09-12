> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.class/collapseidkey](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.class/collapseidkey)

# collapseIDKey (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A value that the system uses to coalesce unseen push notifications.

## Declaration

```swift
var collapseIDKey: String? { get set }
```

<a id="discussion"></a>

## Discussion

When CloudKit generates a push notification, it sets the notification’s `apns-collapse-id` header to this property’s value. The system uses this header to coalesce unseen notifications.

See [Sending notification requests to APNs](../../../usernotifications/sending-notification-requests-to-apns.md) for more information about sending notifications using the Apple Push Notification service.

## See Also

### Grouping Notifications

- [category](category.md): The name of the action group that corresponds to this notification.

# collapseIDKey (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A value that the system uses to coalesce unseen push notifications.

## Declaration

```objectivec
@property (copy, nullable) NSString * collapseIDKey;
```

<a id="discussion"></a>

## Discussion

When CloudKit generates a push notification, it sets the notification’s `apns-collapse-id` header to this property’s value. The system uses this header to coalesce unseen notifications.

See [Sending notification requests to APNs](../../../usernotifications/sending-notification-requests-to-apns.md) for more information about sending notifications using the Apple Push Notification service.

## See Also

### Grouping Notifications

- [category](category.md): The name of the action group that corresponds to this notification.
