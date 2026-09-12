> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsettings/scheduleddeliverysetting](https://developer.apple.com/documentation/usernotifications/unnotificationsettings/scheduleddeliverysetting)

# scheduledDeliverySetting (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The setting that indicates the system schedules the notification.

## Declaration

```swift
var scheduledDeliverySetting: UNNotificationSetting { get }
```

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [lockScreenSetting](lockscreensetting.md): The setting that indicates whether your app’s notifications appear on a device’s Lock screen.
- [carPlaySetting](carplaysetting.md): The setting that indicates whether your app’s notifications appear in CarPlay.
- [alertSetting](alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [soundSetting](soundsetting.md): The authorization status for playing sounds for incoming notifications.
- [criticalAlertSetting](criticalalertsetting.md): The authorization status for playing sounds for critical alerts.
- [announcementSetting](announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [timeSensitiveSetting](timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
- [UNNotificationSetting](../unnotificationsetting.md): Constants that indicate the current status of a notification setting.

# scheduledDeliverySetting (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The setting that indicates the system schedules the notification.

## Declaration

```objectivec
@property (nonatomic, readonly) UNNotificationSetting scheduledDeliverySetting;
```

```objectivec
@property (atomic, readonly) UNNotificationSetting scheduledDeliverySetting;
```

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [lockScreenSetting](lockscreensetting.md): The setting that indicates whether your app’s notifications appear on a device’s Lock screen.
- [carPlaySetting](carplaysetting.md): The setting that indicates whether your app’s notifications appear in CarPlay.
- [alertSetting](alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [soundSetting](soundsetting.md): The authorization status for playing sounds for incoming notifications.
- [criticalAlertSetting](criticalalertsetting.md): The authorization status for playing sounds for critical alerts.
- [announcementSetting](announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [timeSensitiveSetting](timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
- [UNNotificationSetting](../unnotificationsetting.md): Constants that indicate the current status of a notification setting.
