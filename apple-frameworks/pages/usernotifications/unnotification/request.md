> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotification/request](https://developer.apple.com/documentation/usernotifications/unnotification/request)

# request (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The notification request containing the payload and trigger condition for the notification.

## Declaration

```swift
@NSCopying var request: UNNotificationRequest { get }
```

<a id="Discussion"></a>

## Discussion

For local notifications, the request object is a copy of the one you originally configured. For remote notifications, the system synthesizes the request object from information received from Apple Push Notification service.

## See Also

### Getting the Notification Details

- [date](date.md): The delivery date of the notification.

# request (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The notification request containing the payload and trigger condition for the notification.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UNNotificationRequest * request;
```

```objectivec
@property (atomic, copy, readonly) UNNotificationRequest * request;
```

<a id="Discussion"></a>

## Discussion

For local notifications, the request object is a copy of the one you originally configured. For remote notifications, the system synthesizes the request object from information received from Apple Push Notification service.

## See Also

### Getting the Notification Details

- [date](date.md): The delivery date of the notification.
