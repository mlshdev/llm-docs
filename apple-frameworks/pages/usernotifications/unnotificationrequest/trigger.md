> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationrequest/trigger](https://developer.apple.com/documentation/usernotifications/unnotificationrequest/trigger)

# trigger (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The conditions that trigger the delivery of the notification.

## Declaration

```swift
@NSCopying var trigger: UNNotificationTrigger? { get }
```

<a id="Discussion"></a>

## Discussion

For notifications that the system has delivered, use this property to determine what caused the delivery to occur. For remote notifications, this property contains a [UNPushNotificationTrigger](../unpushnotificationtrigger.md) object. For other notifications, the system sets this type using the trigger condition specified in the original request.

## See Also

### Getting the Request Details

- [identifier](identifier.md): The unique identifier for this notification request.
- [content](content.md): The content associated with the notification.

# trigger (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The conditions that trigger the delivery of the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UNNotificationTrigger * trigger;
```

```objectivec
@property (atomic, copy, readonly, nullable) UNNotificationTrigger * trigger;
```

<a id="Discussion"></a>

## Discussion

For notifications that the system has delivered, use this property to determine what caused the delivery to occur. For remote notifications, this property contains a [UNPushNotificationTrigger](../unpushnotificationtrigger.md) object. For other notifications, the system sets this type using the trigger condition specified in the original request.

## See Also

### Getting the Request Details

- [identifier](identifier.md): The unique identifier for this notification request.
- [content](content.md): The content associated with the notification.
