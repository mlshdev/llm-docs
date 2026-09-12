> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue/init(notificationcenter:)](https://developer.apple.com/documentation/foundation/notificationqueue/init(notificationcenter:))

# init(notificationCenter:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a notification queue for the specified notification center.

## Declaration

```swift
init(notificationCenter: NotificationCenter)
```

## Parameters

- `notificationCenter`: The notification center to be used by the notification queue.

<a id="return-value"></a>

## Return Value

The newly initialized notification queue.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for the [NotificationQueue](../notificationqueue.md) class.

## See Also

### Related Documentation

- [Notification Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Notifications/Introduction/introNotifications.html#//apple_ref/doc/uid/10000043i)

# initWithNotificationCenter: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a notification queue for the specified notification center.

## Declaration

```objectivec
- (instancetype) initWithNotificationCenter:(NSNotificationCenter *) notificationCenter;
```

## Parameters

- `notificationCenter`: The notification center to be used by the notification queue.

<a id="return-value"></a>

## Return Value

The newly initialized notification queue.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for the [NSNotificationQueue](../notificationqueue.md) class.

## See Also

### Related Documentation

- [Notification Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Notifications/Introduction/introNotifications.html#//apple_ref/doc/uid/10000043i)
