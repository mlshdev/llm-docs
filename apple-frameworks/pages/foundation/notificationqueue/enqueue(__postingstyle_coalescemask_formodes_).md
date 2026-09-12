> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue/enqueue(_:postingstyle:coalescemask:formodes:)](https://developer.apple.com/documentation/foundation/notificationqueue/enqueue(_:postingstyle:coalescemask:formodes:))

# enqueue(\_:postingStyle:coalesceMask:forModes:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

## Declaration

```swift
func enqueue(_ notification: Notification, postingStyle: NotificationQueue.PostingStyle, coalesceMask: NotificationQueue.NotificationCoalescing, forModes modes: [RunLoop.Mode]?)
```

## Parameters

- `notification`: The notification to add to the queue.
- `postingStyle`: The posting style for the notification. The posting style indicates when the notification queue should post the notification to its notification center.
- `coalesceMask`: A mask indicating what criteria to use when matching attributes of `notification` to attributes of notifications in the queue. The mask is created by combining any of the constants [none](notificationcoalescing/none.md), [onName](notificationcoalescing/onname.md), and [onSender](notificationcoalescing/onsender.md).
- `modes`: The list of modes the notification may be posted in. The notification queue will only post the notification to its notification center if the run loop is in one of the modes provided in the array.

  This parameter may be `nil`, in which case it defaults to [default](../runloop/mode/default.md).

## See Also

### Managing Notifications

- [enqueue(\_:postingStyle:)](enqueue%28__postingstyle_%29.md): Adds a notification to the notification queue with a specified posting style.
- [dequeueNotifications(matching:coalesceMask:)](dequeuenotifications%28matching_coalescemask_%29.md): Removes all notifications from the queue that match a provided notification using provided matching criteria.

# enqueueNotification:postingStyle:coalesceMask:forModes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.

## Declaration

```objectivec
- (void) enqueueNotification:(NSNotification *) notification postingStyle:(NSPostingStyle) postingStyle coalesceMask:(NSNotificationCoalescing) coalesceMask forModes:(NSArray<NSString *> *) modes;
```

## Parameters

- `notification`: The notification to add to the queue.
- `postingStyle`: The posting style for the notification. The posting style indicates when the notification queue should post the notification to its notification center.
- `coalesceMask`: A mask indicating what criteria to use when matching attributes of `notification` to attributes of notifications in the queue. The mask is created by combining any of the constants [NSNotificationNoCoalescing](notificationcoalescing/none.md), [NSNotificationCoalescingOnName](notificationcoalescing/onname.md), and [NSNotificationCoalescingOnSender](notificationcoalescing/onsender.md).
- `modes`: The list of modes the notification may be posted in. The notification queue will only post the notification to its notification center if the run loop is in one of the modes provided in the array.

  This parameter may be `nil`, in which case it defaults to [NSDefaultRunLoopMode](../runloop/mode/default.md).

## See Also

### Managing Notifications

- [enqueueNotification:postingStyle:](enqueue%28__postingstyle_%29.md): Adds a notification to the notification queue with a specified posting style.
- [dequeueNotificationsMatching:coalesceMask:](dequeuenotifications%28matching_coalescemask_%29.md): Removes all notifications from the queue that match a provided notification using provided matching criteria.
