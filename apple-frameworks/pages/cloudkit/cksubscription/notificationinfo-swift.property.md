> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksubscription/notificationinfo-swift.property](https://developer.apple.com/documentation/cloudkit/cksubscription/notificationinfo-swift.property)

# notificationInfo (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

The configuration for a subscription’s push notifications.

## Declaration

```swift
@NSCopying var notificationInfo: CKSubscription.NotificationInfo? { get set }
```

<a id="discussion"></a>

## Discussion

If you want the system to display your subscription’s push notifications, assign a value to this property. The server uses the configuration you provide to determine the delivery options for notifications. For example, you can specify the text to display to the user, and the sound to play. You can also specify which fields of the record to include in the notification’s payload.

If you don’t assign a value to this property, CloudKit still sends push notifications, but the system doesn’t display them to the user. The default value of this property is `nil`.

## See Also

### Specifying the Push Notification Data

- [CKSubscription.NotificationInfo](notificationinfo-swift.class.md): An object that describes the configuration of a subscription’s push notifications.

# notificationInfo (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 6.0+

The configuration for a subscription’s push notifications.

## Declaration

```objectivec
@property (copy, nullable) CKNotificationInfo * notificationInfo;
```

<a id="discussion"></a>

## Discussion

If you want the system to display your subscription’s push notifications, assign a value to this property. The server uses the configuration you provide to determine the delivery options for notifications. For example, you can specify the text to display to the user, and the sound to play. You can also specify which fields of the record to include in the notification’s payload.

If you don’t assign a value to this property, CloudKit still sends push notifications, but the system doesn’t display them to the user. The default value of this property is `nil`.

## See Also

### Specifying the Push Notification Data

- [CKNotificationInfo](notificationinfo-swift.class.md): An object that describes the configuration of a subscription’s push notifications.
