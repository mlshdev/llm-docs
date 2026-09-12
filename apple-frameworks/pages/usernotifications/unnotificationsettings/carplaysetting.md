> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsettings/carplaysetting](https://developer.apple.com/documentation/usernotifications/unnotificationsettings/carplaysetting)

# carPlaySetting (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The setting that indicates whether your app’s notifications appear in CarPlay.

## Declaration

```swift
var carPlaySetting: UNNotificationSetting { get }
```

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [lockScreenSetting](lockscreensetting.md): The setting that indicates whether your app’s notifications appear on a device’s Lock screen.
- [alertSetting](alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [soundSetting](soundsetting.md): The authorization status for playing sounds for incoming notifications.
- [criticalAlertSetting](criticalalertsetting.md): The authorization status for playing sounds for critical alerts.
- [announcementSetting](announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [scheduledDeliverySetting](scheduleddeliverysetting.md): The setting that indicates the system schedules the notification.
- [timeSensitiveSetting](timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
- [UNNotificationSetting](../unnotificationsetting.md): Constants that indicate the current status of a notification setting.

# carPlaySetting (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The setting that indicates whether your app’s notifications appear in CarPlay.

## Declaration

```objectivec
@property (nonatomic, readonly) UNNotificationSetting carPlaySetting;
```

```objectivec
@property (atomic, readonly) UNNotificationSetting carPlaySetting;
```

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [lockScreenSetting](lockscreensetting.md): The setting that indicates whether your app’s notifications appear on a device’s Lock screen.
- [alertSetting](alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [soundSetting](soundsetting.md): The authorization status for playing sounds for incoming notifications.
- [criticalAlertSetting](criticalalertsetting.md): The authorization status for playing sounds for critical alerts.
- [announcementSetting](announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [scheduledDeliverySetting](scheduleddeliverysetting.md): The setting that indicates the system schedules the notification.
- [timeSensitiveSetting](timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
- [UNNotificationSetting](../unnotificationsetting.md): Constants that indicate the current status of a notification setting.
