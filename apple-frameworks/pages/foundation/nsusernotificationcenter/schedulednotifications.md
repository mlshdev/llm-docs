> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsusernotificationcenter/schedulednotifications](https://developer.apple.com/documentation/foundation/nsusernotificationcenter/schedulednotifications)

# scheduledNotifications (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies an array of scheduled user notifications that have not yet been delivered.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```swift
var scheduledNotifications: [NSUserNotification] { get set }
```

<a id="Discussion"></a>

## Discussion

Newly scheduled notifications are added to the end of the array. You may also bulk-schedule notifications by setting this array. Bulk setting new scheduled notifications unschedules existing notifications.

> **Note**

>  The scheduled user notification could be changing to a delivered notification at the time you are calling this method. and if that case the user notification will still be delivered.

## See Also

### Managing the Scheduled Notification Queue

- [scheduleNotification(\_:)](schedulenotification%28__%29.md): Deprecated. Schedules the specified user notification.
- [removeScheduledNotification(\_:)](removeschedulednotification%28__%29.md): Deprecated. Removes the specified user notification for the scheduled notifications.

# scheduledNotifications (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 11.0)

Specifies an array of scheduled user notifications that have not yet been delivered.

> All NSUserNotifications API should be replaced with UserNotifications.frameworks API

## Declaration

```objectivec
@property (copy) NSArray<NSUserNotification *> * scheduledNotifications;
```

<a id="Discussion"></a>

## Discussion

Newly scheduled notifications are added to the end of the array. You may also bulk-schedule notifications by setting this array. Bulk setting new scheduled notifications unschedules existing notifications.

> **Note**

>  The scheduled user notification could be changing to a delivered notification at the time you are calling this method. and if that case the user notification will still be delivered.

## See Also

### Managing the Scheduled Notification Queue

- [scheduleNotification:](schedulenotification%28__%29.md): Deprecated. Schedules the specified user notification.
- [removeScheduledNotification:](removeschedulednotification%28__%29.md): Deprecated. Removes the specified user notification for the scheduled notifications.
