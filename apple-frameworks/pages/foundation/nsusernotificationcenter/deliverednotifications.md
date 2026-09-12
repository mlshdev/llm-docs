> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenter/deliverednotifications](https://developer.apple.com/documentation/foundation/nsusernotificationcenter/deliverednotifications)

# deliveredNotifications (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

An array of all user notifications delivered to the notification center.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var deliveredNotifications: [NSUserNotification] { get }
```

<a id="Discussion"></a>

## Discussion

The number of notifications the user actually sees in the user interface may be less than the size of this array.

Note that these may or may not have been actually presented to the user. See the [isPresented](../nsusernotification/ispresented.md) property in the [NSUserNotification](../nsusernotification.md) class.

> **Note**

>  A scheduled user notification that specifies a [deliveryRepeatInterval](../nsusernotification/deliveryrepeatinterval.md) remains in the [scheduledNotifications](schedulednotifications.md) list, even though it has been delivered.  The item that goes into the `deliveredNotifications` list is a copy of the user notification item.

## See Also

### Managing the Delivered Notifications

- [deliver(\_:)](deliver%28__%29.md): Deprecated. Deliver the specified user notification.
- [removeDeliveredNotification(\_:)](removedeliverednotification%28__%29.md): Deprecated. Remove a delivered user notification from the user notification center.
- [removeAllDeliveredNotifications()](removealldeliverednotifications%28%29.md): Deprecated. Remove all delivered user notifications from the user notification center.

# deliveredNotifications (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

An array of all user notifications delivered to the notification center.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSUserNotification *> * deliveredNotifications;
```

<a id="Discussion"></a>

## Discussion

The number of notifications the user actually sees in the user interface may be less than the size of this array.

Note that these may or may not have been actually presented to the user. See the [presented](../nsusernotification/ispresented.md) property in the [NSUserNotification](../nsusernotification.md) class.

> **Note**

>  A scheduled user notification that specifies a [deliveryRepeatInterval](../nsusernotification/deliveryrepeatinterval.md) remains in the [scheduledNotifications](schedulednotifications.md) list, even though it has been delivered.  The item that goes into the `deliveredNotifications` list is a copy of the user notification item.

## See Also

### Managing the Delivered Notifications

- [deliverNotification:](deliver%28__%29.md): Deprecated. Deliver the specified user notification.
- [removeDeliveredNotification:](removedeliverednotification%28__%29.md): Deprecated. Remove a delivered user notification from the user notification center.
- [removeAllDeliveredNotifications](removealldeliverednotifications%28%29.md): Deprecated. Remove all delivered user notifications from the user notification center.
