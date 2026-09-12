> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenter](https://developer.apple.com/documentation/foundation/nsusernotificationcenter)

# NSUserNotificationCenter (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.8+ (deprecated in 11.0)

An object that delivers notifications from apps to the user.

> Use the [User Notifications](../usernotifications.md) framework instead.

## Declaration

```swift
class NSUserNotificationCenter
```

<a id="overview"></a>

## Overview

When a user notification’s delivery date has been reached, or it’s manually delivered, the notification center may display the notification to the user. The user notification center reserves the right to decide if a delivered user notification is presented to the user. For example, it may suppress the notification if the application is already frontmost (the delegate can override this action). The application can check the result of this decision by examining the [isPresented](nsusernotification/ispresented.md) property of a delivered user notification.

[NSUserNotification](nsusernotification.md) instances the `NSUserNotificationCenter` are tracking will be in one of two states: scheduled or delivered. A scheduled user notification has a [deliveryDate](nsusernotification/deliverydate.md). On that delivery date, the notification will move from being scheduled to being delivered. Note that the user notification may be displayed later than the delivery date depending on many factors.

A delivered user notification has an [actualDeliveryDate](nsusernotification/actualdeliverydate.md). That’s the date when it moved from being scheduled to delivered, or when it was manually delivered using the [deliver(\_:)](nsusernotificationcenter/deliver%28__%29.md) method.

The application and the user notification center are both ultimately subject to the user’s preferences. If the user decides to hide all alerts from your application, the `presented` property will still behave as above, but the user won’t see any animation or hear any sound.

The [NSUserNotificationCenterDelegate](nsusernotificationcenterdelegate.md) provides more information about the delivered user notification and allows forcing the display of a user notification even if the application is frontmost.

> **Note**

>  It the user wakes more than 15 minutes after a scheduled notification is scheduled to fire, it’s discarded. If the notification repeats with an interval less than 15 minutes, then it expires in 1 minute. Expired notifications are just discarded, unless they repeat, in which case, they stay in the scheduled list and just fire again later.

> **Important**

>  Many of the NSUserNotificationCenter class’s methods involve talking to a server process, so calling them repeatedly can have a negative effect on performance.

<a id="Threading-Information"></a>

### Threading Information

The `NSUserNotificationCenter` class and the [NSUserNotification](nsusernotification.md) class are both thread safe.

## Topics

### Creating the Default User Notification Center

- [default](nsusernotificationcenter/default.md): Deprecated. Returns the default user notification center.

### Managing the Scheduled Notification Queue

- [scheduleNotification(\_:)](nsusernotificationcenter/schedulenotification%28__%29.md): Deprecated. Schedules the specified user notification.
- [scheduledNotifications](nsusernotificationcenter/schedulednotifications.md): Deprecated. Specifies an array of scheduled user notifications that have not yet been delivered.
- [removeScheduledNotification(\_:)](nsusernotificationcenter/removeschedulednotification%28__%29.md): Deprecated. Removes the specified user notification for the scheduled notifications.

### Managing the Delivered Notifications

- [deliver(\_:)](nsusernotificationcenter/deliver%28__%29.md): Deprecated. Deliver the specified user notification.
- [deliveredNotifications](nsusernotificationcenter/deliverednotifications.md): Deprecated. An array of all user notifications delivered to the notification center.
- [removeDeliveredNotification(\_:)](nsusernotificationcenter/removedeliverednotification%28__%29.md): Deprecated. Remove a delivered user notification from the user notification center.
- [removeAllDeliveredNotifications()](nsusernotificationcenter/removealldeliverednotifications%28%29.md): Deprecated. Remove all delivered user notifications from the user notification center.

### Getting and Setting the Delegate

- [delegate](nsusernotificationcenter/delegate.md): Deprecated. Specifies the notification center delegate.

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

### User Notifications

- [NSUserNotification](nsusernotification.md): Deprecated. A notification that can be scheduled for display in the notification center.
- [NSUserNotificationAction](nsusernotificationaction.md): Deprecated. An action that the user can take in response to receiving a notification.
- [NSUserNotificationCenterDelegate](nsusernotificationcenterdelegate.md): An interface that enables customizing the behavior of the default notification center.

# NSUserNotificationCenter (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** macOS 10.8+ (deprecated in 11.0)

An object that delivers notifications from apps to the user.

> Use the [User Notifications](../usernotifications.md) framework instead.

## Declaration

```objectivec
@interface NSUserNotificationCenter : NSObject
```

<a id="overview"></a>

## Overview

When a user notification’s delivery date has been reached, or it’s manually delivered, the notification center may display the notification to the user. The user notification center reserves the right to decide if a delivered user notification is presented to the user. For example, it may suppress the notification if the application is already frontmost (the delegate can override this action). The application can check the result of this decision by examining the [presented](nsusernotification/ispresented.md) property of a delivered user notification.

[NSUserNotification](nsusernotification.md) instances the `NSUserNotificationCenter` are tracking will be in one of two states: scheduled or delivered. A scheduled user notification has a [deliveryDate](nsusernotification/deliverydate.md). On that delivery date, the notification will move from being scheduled to being delivered. Note that the user notification may be displayed later than the delivery date depending on many factors.

A delivered user notification has an [actualDeliveryDate](nsusernotification/actualdeliverydate.md). That’s the date when it moved from being scheduled to delivered, or when it was manually delivered using the [deliverNotification:](nsusernotificationcenter/deliver%28__%29.md) method.

The application and the user notification center are both ultimately subject to the user’s preferences. If the user decides to hide all alerts from your application, the `presented` property will still behave as above, but the user won’t see any animation or hear any sound.

The [NSUserNotificationCenterDelegate](nsusernotificationcenterdelegate.md) provides more information about the delivered user notification and allows forcing the display of a user notification even if the application is frontmost.

> **Note**

>  It the user wakes more than 15 minutes after a scheduled notification is scheduled to fire, it’s discarded. If the notification repeats with an interval less than 15 minutes, then it expires in 1 minute. Expired notifications are just discarded, unless they repeat, in which case, they stay in the scheduled list and just fire again later.

> **Important**

>  Many of the NSUserNotificationCenter class’s methods involve talking to a server process, so calling them repeatedly can have a negative effect on performance.

<a id="Threading-Information"></a>

### Threading Information

The `NSUserNotificationCenter` class and the [NSUserNotification](nsusernotification.md) class are both thread safe.

## Topics

### Creating the Default User Notification Center

- [defaultUserNotificationCenter](nsusernotificationcenter/default.md): Deprecated. Returns the default user notification center.

### Managing the Scheduled Notification Queue

- [scheduleNotification:](nsusernotificationcenter/schedulenotification%28__%29.md): Deprecated. Schedules the specified user notification.
- [scheduledNotifications](nsusernotificationcenter/schedulednotifications.md): Deprecated. Specifies an array of scheduled user notifications that have not yet been delivered.
- [removeScheduledNotification:](nsusernotificationcenter/removeschedulednotification%28__%29.md): Deprecated. Removes the specified user notification for the scheduled notifications.

### Managing the Delivered Notifications

- [deliverNotification:](nsusernotificationcenter/deliver%28__%29.md): Deprecated. Deliver the specified user notification.
- [deliveredNotifications](nsusernotificationcenter/deliverednotifications.md): Deprecated. An array of all user notifications delivered to the notification center.
- [removeDeliveredNotification:](nsusernotificationcenter/removedeliverednotification%28__%29.md): Deprecated. Remove a delivered user notification from the user notification center.
- [removeAllDeliveredNotifications](nsusernotificationcenter/removealldeliverednotifications%28%29.md): Deprecated. Remove all delivered user notifications from the user notification center.

### Getting and Setting the Delegate

- [delegate](nsusernotificationcenter/delegate.md): Deprecated. Specifies the notification center delegate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### User Notifications

- [NSUserNotification](nsusernotification.md): Deprecated. A notification that can be scheduled for display in the notification center.
- [NSUserNotificationAction](nsusernotificationaction.md): Deprecated. An action that the user can take in response to receiving a notification.
- [NSUserNotificationCenterDelegate](nsusernotificationcenterdelegate.md): An interface that enables customizing the behavior of the default notification center.
