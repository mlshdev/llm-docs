> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenter/deliver(_:)](https://developer.apple.com/documentation/foundation/nsusernotificationcenter/deliver(_:))

# deliver(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Deliver the specified user notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
func deliver(_ notification: NSUserNotification)
```

## Parameters

- `notification`: The user notification.

<a id="Discussion"></a>

## Discussion

The notification will be presented to the user (subject to the user’s preferences). The [isPresented](../nsusernotification/ispresented.md) property of the [NSUserNotification](../nsusernotification.md) object will always be set to [true](https://developer.apple.com/documentation/swift/true) if a notification is delivered using this method.

## See Also

### Related Documentation

- [removeScheduledNotification(\_:)](removeschedulednotification%28__%29.md): Deprecated. Removes the specified user notification for the scheduled notifications.

### Managing the Delivered Notifications

- [deliveredNotifications](deliverednotifications.md): Deprecated. An array of all user notifications delivered to the notification center.
- [removeDeliveredNotification(\_:)](removedeliverednotification%28__%29.md): Deprecated. Remove a delivered user notification from the user notification center.
- [removeAllDeliveredNotifications()](removealldeliverednotifications%28%29.md): Deprecated. Remove all delivered user notifications from the user notification center.

# deliverNotification: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Deliver the specified user notification.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
- (void) deliverNotification:(NSUserNotification *) notification;
```

## Parameters

- `notification`: The user notification.

<a id="Discussion"></a>

## Discussion

The notification will be presented to the user (subject to the user’s preferences). The [presented](../nsusernotification/ispresented.md) property of the [NSUserNotification](../nsusernotification.md) object will always be set to [true](https://developer.apple.com/documentation/swift/true) if a notification is delivered using this method.

## See Also

### Related Documentation

- [removeScheduledNotification:](removeschedulednotification%28__%29.md): Deprecated. Removes the specified user notification for the scheduled notifications.

### Managing the Delivered Notifications

- [deliveredNotifications](deliverednotifications.md): Deprecated. An array of all user notifications delivered to the notification center.
- [removeDeliveredNotification:](removedeliverednotification%28__%29.md): Deprecated. Remove a delivered user notification from the user notification center.
- [removeAllDeliveredNotifications](removealldeliverednotifications%28%29.md): Deprecated. Remove all delivered user notifications from the user notification center.
