> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenter/removealldeliverednotifications()](https://developer.apple.com/documentation/foundation/nsusernotificationcenter/removealldeliverednotifications())

# removeAllDeliveredNotifications() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Remove all delivered user notifications from the user notification center.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
func removeAllDeliveredNotifications()
```

## See Also

### Managing the Delivered Notifications

- [deliver(\_:)](deliver%28__%29.md): Deprecated. Deliver the specified user notification.
- [deliveredNotifications](deliverednotifications.md): Deprecated. An array of all user notifications delivered to the notification center.
- [removeDeliveredNotification(\_:)](removedeliverednotification%28__%29.md): Deprecated. Remove a delivered user notification from the user notification center.

# removeAllDeliveredNotifications (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Remove all delivered user notifications from the user notification center.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
- (void) removeAllDeliveredNotifications;
```

## See Also

### Managing the Delivered Notifications

- [deliverNotification:](deliver%28__%29.md): Deprecated. Deliver the specified user notification.
- [deliveredNotifications](deliverednotifications.md): Deprecated. An array of all user notifications delivered to the notification center.
- [removeDeliveredNotification:](removedeliverednotification%28__%29.md): Deprecated. Remove a delivered user notification from the user notification center.
