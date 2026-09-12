> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenterdelegate](https://developer.apple.com/documentation/foundation/nsusernotificationcenterdelegate)

# NSUserNotificationCenterDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An interface that enables customizing the behavior of the default notification center.

## Declaration

```swift
protocol NSUserNotificationCenterDelegate : NSObjectProtocol
```

## Topics

### User Notification Delivery Information

- [userNotificationCenter(\_:didDeliver:)](nsusernotificationcenterdelegate/usernotificationcenter%28__diddeliver_%29.md): Deprecated. Sent to the delegate when a notification delivery date has arrived.
- [userNotificationCenter(\_:didActivate:)](nsusernotificationcenterdelegate/usernotificationcenter%28__didactivate_%29.md): Deprecated. Sent to the delegate when a user clicks on a user notification presented by the user notification center.

### User Notification Display Override

- [userNotificationCenter(\_:shouldPresent:)](nsusernotificationcenterdelegate/usernotificationcenter%28__shouldpresent_%29.md): Deprecated. Sent to the delegate when the user notification center has decided not to present your notification.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### User Notifications

- [NSUserNotification](nsusernotification.md): Deprecated. A notification that can be scheduled for display in the notification center.
- [NSUserNotificationAction](nsusernotificationaction.md): Deprecated. An action that the user can take in response to receiving a notification.
- [NSUserNotificationCenter](nsusernotificationcenter.md): Deprecated. An object that delivers notifications from apps to the user.

# NSUserNotificationCenterDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An interface that enables customizing the behavior of the default notification center.

## Declaration

```objectivec
@protocol NSUserNotificationCenterDelegate <NSObject>
```

## Topics

### User Notification Delivery Information

- [userNotificationCenter:didDeliverNotification:](nsusernotificationcenterdelegate/usernotificationcenter%28__diddeliver_%29.md): Deprecated. Sent to the delegate when a notification delivery date has arrived.
- [userNotificationCenter:didActivateNotification:](nsusernotificationcenterdelegate/usernotificationcenter%28__didactivate_%29.md): Deprecated. Sent to the delegate when a user clicks on a user notification presented by the user notification center.

### User Notification Display Override

- [userNotificationCenter:shouldPresentNotification:](nsusernotificationcenterdelegate/usernotificationcenter%28__shouldpresent_%29.md): Deprecated. Sent to the delegate when the user notification center has decided not to present your notification.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### User Notifications

- [NSUserNotification](nsusernotification.md): Deprecated. A notification that can be scheduled for display in the notification center.
- [NSUserNotificationAction](nsusernotificationaction.md): Deprecated. An action that the user can take in response to receiving a notification.
- [NSUserNotificationCenter](nsusernotificationcenter.md): Deprecated. An object that delivers notifications from apps to the user.
