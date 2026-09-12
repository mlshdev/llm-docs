> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenter/removeschedulednotification(_:)](https://developer.apple.com/documentation/foundation/nsusernotificationcenter/removeschedulednotification(_:))

# removeScheduledNotification(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Removes the specified user notification for the scheduled notifications.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
func removeScheduledNotification(_ notification: NSUserNotification)
```

## Parameters

- `notification`: The user notification.

<a id="Discussion"></a>

## Discussion

If the user notification’s [deliveryDate](../nsusernotification/deliverydate.md) occurs before the cancellation finishes, the notification may still be delivered.

If the notification is not in the scheduled list, nothing happens.

## See Also

### Managing the Scheduled Notification Queue

- [scheduleNotification(\_:)](schedulenotification%28__%29.md): Deprecated. Schedules the specified user notification.
- [scheduledNotifications](schedulednotifications.md): Deprecated. Specifies an array of scheduled user notifications that have not yet been delivered.

# removeScheduledNotification: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Removes the specified user notification for the scheduled notifications.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
- (void) removeScheduledNotification:(NSUserNotification *) notification;
```

## Parameters

- `notification`: The user notification.

<a id="Discussion"></a>

## Discussion

If the user notification’s [deliveryDate](../nsusernotification/deliverydate.md) occurs before the cancellation finishes, the notification may still be delivered.

If the notification is not in the scheduled list, nothing happens.

## See Also

### Managing the Scheduled Notification Queue

- [scheduleNotification:](schedulenotification%28__%29.md): Deprecated. Schedules the specified user notification.
- [scheduledNotifications](schedulednotifications.md): Deprecated. Specifies an array of scheduled user notifications that have not yet been delivered.
