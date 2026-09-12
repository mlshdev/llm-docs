> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue/enqueue(_:postingstyle:)](https://developer.apple.com/documentation/foundation/notificationqueue/enqueue(_:postingstyle:))

# enqueue(\_:postingStyle:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a notification to the notification queue with a specified posting style.

## Declaration

```swift
func enqueue(_ notification: Notification, postingStyle: NotificationQueue.PostingStyle)
```

## Parameters

- `notification`: The notification to add to the queue.
- `postingStyle`: The posting style for the notification. The posting style indicates when the notification queue should post the notification to its notification center.

<a id="Discussion"></a>

## Discussion

This is a convenience method for calling [enqueue(\_:postingStyle:coalesceMask:forModes:)](enqueue%28__postingstyle_coalescemask_formodes_%29.md) with coalescing criteria that will coalesce only notifications that match both the notification’s name and object and the runloop mode [default](../runloop/mode/default.md).

## See Also

### Managing Notifications

- [enqueue(\_:postingStyle:coalesceMask:forModes:)](enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.
- [dequeueNotifications(matching:coalesceMask:)](dequeuenotifications%28matching_coalescemask_%29.md): Removes all notifications from the queue that match a provided notification using provided matching criteria.

# enqueueNotification:postingStyle: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a notification to the notification queue with a specified posting style.

## Declaration

```objectivec
- (void) enqueueNotification:(NSNotification *) notification postingStyle:(NSPostingStyle) postingStyle;
```

## Parameters

- `notification`: The notification to add to the queue.
- `postingStyle`: The posting style for the notification. The posting style indicates when the notification queue should post the notification to its notification center.

<a id="Discussion"></a>

## Discussion

This is a convenience method for calling [enqueueNotification:postingStyle:coalesceMask:forModes:](enqueue%28__postingstyle_coalescemask_formodes_%29.md) with coalescing criteria that will coalesce only notifications that match both the notification’s name and object and the runloop mode [NSDefaultRunLoopMode](../runloop/mode/default.md).

## See Also

### Managing Notifications

- [enqueueNotification:postingStyle:coalesceMask:forModes:](enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.
- [dequeueNotificationsMatching:coalesceMask:](dequeuenotifications%28matching_coalescemask_%29.md): Removes all notifications from the queue that match a provided notification using provided matching criteria.
