> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenter/schedulenotification(_:)](https://developer.apple.com/documentation/foundation/nsusernotificationcenter/schedulenotification(_:))

# scheduleNotification(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Schedules the specified user notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
func scheduleNotification(_ notification: NSUserNotification)
```

## Parameters

- `notification`: The user notification.

<a id="Discussion"></a>

## Discussion

Scheduled notifications are added to the end of the notification queue.

## See Also

### Related Documentation

- [deliver(\_:)](deliver%28__%29.md): Deprecated. Deliver the specified user notification.

### Managing the Scheduled Notification Queue

- [scheduledNotifications](schedulednotifications.md): Deprecated. Specifies an array of scheduled user notifications that have not yet been delivered.
- [removeScheduledNotification(\_:)](removeschedulednotification%28__%29.md): Deprecated. Removes the specified user notification for the scheduled notifications.

# scheduleNotification: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Schedules the specified user notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
- (void) scheduleNotification:(NSUserNotification *) notification;
```

## Parameters

- `notification`: The user notification.

<a id="Discussion"></a>

## Discussion

Scheduled notifications are added to the end of the notification queue.

## See Also

### Related Documentation

- [deliverNotification:](deliver%28__%29.md): Deprecated. Deliver the specified user notification.

### Managing the Scheduled Notification Queue

- [scheduledNotifications](schedulednotifications.md): Deprecated. Specifies an array of scheduled user notifications that have not yet been delivered.
- [removeScheduledNotification:](removeschedulednotification%28__%29.md): Deprecated. Removes the specified user notification for the scheduled notifications.
