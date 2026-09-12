> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue/dequeuenotifications(matching:coalescemask:)](https://developer.apple.com/documentation/foundation/notificationqueue/dequeuenotifications(matching:coalescemask:))

# dequeueNotifications(matching:coalesceMask:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all notifications from the queue that match a provided notification using provided matching criteria.

## Declaration

```swift
func dequeueNotifications(matching notification: Notification, coalesceMask: Int)
```

## Parameters

- `notification`: The notification used for matching notifications to remove from the notification queue.
- `coalesceMask`: A mask indicating what criteria to use when matching attributes of `notification` to attributes of notifications in the queue. The mask is created by combining any of the constants [none](notificationcoalescing/none.md), [onName](notificationcoalescing/onname.md), and [onSender](notificationcoalescing/onsender.md).

## See Also

### Managing Notifications

- [enqueue(\_:postingStyle:coalesceMask:forModes:)](enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.
- [enqueue(\_:postingStyle:)](enqueue%28__postingstyle_%29.md): Adds a notification to the notification queue with a specified posting style.

# dequeueNotificationsMatching:coalesceMask: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Removes all notifications from the queue that match a provided notification using provided matching criteria.

## Declaration

```objectivec
- (void) dequeueNotificationsMatching:(NSNotification *) notification coalesceMask:(NSUInteger) coalesceMask;
```

## Parameters

- `notification`: The notification used for matching notifications to remove from the notification queue.
- `coalesceMask`: A mask indicating what criteria to use when matching attributes of `notification` to attributes of notifications in the queue. The mask is created by combining any of the constants [NSNotificationNoCoalescing](notificationcoalescing/none.md), [NSNotificationCoalescingOnName](notificationcoalescing/onname.md), and [NSNotificationCoalescingOnSender](notificationcoalescing/onsender.md).

## See Also

### Managing Notifications

- [enqueueNotification:postingStyle:coalesceMask:forModes:](enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.
- [enqueueNotification:postingStyle:](enqueue%28__postingstyle_%29.md): Adds a notification to the notification queue with a specified posting style.
