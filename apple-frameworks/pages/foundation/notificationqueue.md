> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationqueue](https://developer.apple.com/documentation/foundation/notificationqueue)

# NotificationQueue (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification center buffer.

## Declaration

```swift
class NotificationQueue
```

<a id="overview"></a>

## Overview

Whereas a notification center distributes notifications when posted, notifications placed into the queue can be delayed until the end of the current pass through the run loop or until the run loop is idle. Duplicate notifications can be coalesced so that only one notification is sent although multiple notifications are posted.

A notification queue maintains notifications in first in, first out (FIFO) order. When a notification moves to the front of the queue, the queue posts it to the notification center, which in turn dispatches the notification to all objects registered as observers.

Every thread has a default notification queue, which is associated with the default notification center for the process. You can create your own notification queues and have multiple queues per center and thread.

## Topics

### Creating Notification Queues

- [init(notificationCenter:)](notificationqueue/init%28notificationcenter_%29.md): Initializes and returns a notification queue for the specified notification center.

### Getting the Default Queue

- [default](notificationqueue/default.md): Returns the default notification queue for the current thread.

### Managing Notifications

- [enqueue(\_:postingStyle:coalesceMask:forModes:)](notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.
- [enqueue(\_:postingStyle:)](notificationqueue/enqueue%28__postingstyle_%29.md): Adds a notification to the notification queue with a specified posting style.
- [dequeueNotifications(matching:coalesceMask:)](notificationqueue/dequeuenotifications%28matching_coalescemask_%29.md): Removes all notifications from the queue that match a provided notification using provided matching criteria.

### Constants

- [NotificationQueue.NotificationCoalescing](notificationqueue/notificationcoalescing.md): The constants that specify how notifications are coalesced.
- [NotificationQueue.PostingStyle](notificationqueue/postingstyle.md): The constants that specify when notifications are posted.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Notifications

- [Notification](notification.md): A container for information broadcast through a notification center to all registered observers.
- [NotificationCenter](notificationcenter.md): A notification dispatch mechanism that enables the broadcast of information to registered observers.

# NSNotificationQueue (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification center buffer.

## Declaration

```objectivec
@interface NSNotificationQueue : NSObject
```

<a id="overview"></a>

## Overview

Whereas a notification center distributes notifications when posted, notifications placed into the queue can be delayed until the end of the current pass through the run loop or until the run loop is idle. Duplicate notifications can be coalesced so that only one notification is sent although multiple notifications are posted.

A notification queue maintains notifications in first in, first out (FIFO) order. When a notification moves to the front of the queue, the queue posts it to the notification center, which in turn dispatches the notification to all objects registered as observers.

Every thread has a default notification queue, which is associated with the default notification center for the process. You can create your own notification queues and have multiple queues per center and thread.

## Topics

### Creating Notification Queues

- [initWithNotificationCenter:](notificationqueue/init%28notificationcenter_%29.md): Initializes and returns a notification queue for the specified notification center.

### Getting the Default Queue

- [defaultQueue](notificationqueue/default.md): Returns the default notification queue for the current thread.

### Managing Notifications

- [enqueueNotification:postingStyle:coalesceMask:forModes:](notificationqueue/enqueue%28__postingstyle_coalescemask_formodes_%29.md): Adds a notification to the notification queue with a specified posting style, criteria for coalescing, and run loop mode.
- [enqueueNotification:postingStyle:](notificationqueue/enqueue%28__postingstyle_%29.md): Adds a notification to the notification queue with a specified posting style.
- [dequeueNotificationsMatching:coalesceMask:](notificationqueue/dequeuenotifications%28matching_coalescemask_%29.md): Removes all notifications from the queue that match a provided notification using provided matching criteria.

### Constants

- [NSNotificationCoalescing](notificationqueue/notificationcoalescing.md): The constants that specify how notifications are coalesced.
- [NSPostingStyle](notificationqueue/postingstyle.md): The constants that specify when notifications are posted.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Notifications

- [NSNotification](nsnotification.md): A container for information broadcast through a notification center to all registered observers.
- [NSNotificationCenter](notificationcenter.md): A notification dispatch mechanism that enables the broadcast of information to registered observers.
