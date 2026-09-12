> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenter/removedeliverednotification(_:)](https://developer.apple.com/documentation/foundation/nsusernotificationcenter/removedeliverednotification(_:))

# removeDeliveredNotification(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Remove a delivered user notification from the user notification center.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
func removeDeliveredNotification(_ notification: NSUserNotification)
```

## Parameters

- `notification`: The user notification.

<a id="Discussion"></a>

## Discussion

If the user notification is not in [deliveredNotifications](deliverednotifications.md), nothing happens.

## See Also

### Managing the Delivered Notifications

- [deliver(\_:)](deliver%28__%29.md): Deprecated. Deliver the specified user notification.
- [deliveredNotifications](deliverednotifications.md): Deprecated. An array of all user notifications delivered to the notification center.
- [removeAllDeliveredNotifications()](removealldeliverednotifications%28%29.md): Deprecated. Remove all delivered user notifications from the user notification center.

# removeDeliveredNotification: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Remove a delivered user notification from the user notification center.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
- (void) removeDeliveredNotification:(NSUserNotification *) notification;
```

## Parameters

- `notification`: The user notification.

<a id="Discussion"></a>

## Discussion

If the user notification is not in [deliveredNotifications](deliverednotifications.md), nothing happens.

## See Also

### Managing the Delivered Notifications

- [deliverNotification:](deliver%28__%29.md): Deprecated. Deliver the specified user notification.
- [deliveredNotifications](deliverednotifications.md): Deprecated. An array of all user notifications delivered to the notification center.
- [removeAllDeliveredNotifications](removealldeliverednotifications%28%29.md): Deprecated. Remove all delivered user notifications from the user notification center.
