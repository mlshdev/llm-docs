> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenterdelegate/usernotificationcenter(_:diddeliver:)](https://developer.apple.com/documentation/foundation/nsusernotificationcenterdelegate/usernotificationcenter(_:diddeliver:))

# userNotificationCenter(\_:didDeliver:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Sent to the delegate when a notification delivery date has arrived.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
optional func userNotificationCenter(_ center: NSUserNotificationCenter, didDeliver notification: NSUserNotification)
```

## Parameters

- `center`: The user notification center.
- `notification`: The user notification object.

<a id="Discussion"></a>

## Discussion

This method is always called, regardless of your application state and even if you deliver the user notification yourself using [deliver(\_:)](../nsusernotificationcenter/deliver%28__%29.md).

This delegate method is invoked before the [userNotificationCenter(\_:shouldPresent:)](usernotificationcenter%28__shouldpresent_%29.md) delegate method.

## See Also

### User Notification Delivery Information

- [userNotificationCenter(\_:didActivate:)](usernotificationcenter%28__didactivate_%29.md): Deprecated. Sent to the delegate when a user clicks on a user notification presented by the user notification center.

# userNotificationCenter:didDeliverNotification: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Sent to the delegate when a notification delivery date has arrived.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
- (void) userNotificationCenter:(NSUserNotificationCenter *) center didDeliverNotification:(NSUserNotification *) notification;
```

## Parameters

- `center`: The user notification center.
- `notification`: The user notification object.

<a id="Discussion"></a>

## Discussion

This method is always called, regardless of your application state and even if you deliver the user notification yourself using [deliverNotification:](../nsusernotificationcenter/deliver%28__%29.md).

This delegate method is invoked before the [userNotificationCenter:shouldPresentNotification:](usernotificationcenter%28__shouldpresent_%29.md) delegate method.

## See Also

### User Notification Delivery Information

- [userNotificationCenter:didActivateNotification:](usernotificationcenter%28__didactivate_%29.md): Deprecated. Sent to the delegate when a user clicks on a user notification presented by the user notification center.
