> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsettings/lockscreensetting](https://developer.apple.com/documentation/usernotifications/unnotificationsettings/lockscreensetting)

# lockScreenSetting (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

The setting that indicates whether your app’s notifications appear on a device’s Lock screen.

## Declaration

```swift
var lockScreenSetting: UNNotificationSetting { get }
```

<a id="Discussion"></a>

## Discussion

Even if the user disables lock screen notifications, your notifications may still appear onscreen when the device is unlocked.

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [carPlaySetting](carplaysetting.md): The setting that indicates whether your app’s notifications appear in CarPlay.
- [alertSetting](alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [soundSetting](soundsetting.md): The authorization status for playing sounds for incoming notifications.
- [criticalAlertSetting](criticalalertsetting.md): The authorization status for playing sounds for critical alerts.
- [announcementSetting](announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [scheduledDeliverySetting](scheduleddeliverysetting.md): The setting that indicates the system schedules the notification.
- [timeSensitiveSetting](timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
- [UNNotificationSetting](../unnotificationsetting.md): Constants that indicate the current status of a notification setting.

# lockScreenSetting (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

The setting that indicates whether your app’s notifications appear on a device’s Lock screen.

## Declaration

```objectivec
@property (nonatomic, readonly) UNNotificationSetting lockScreenSetting;
```

```objectivec
@property (atomic, readonly) UNNotificationSetting lockScreenSetting;
```

<a id="Discussion"></a>

## Discussion

Even if the user disables lock screen notifications, your notifications may still appear onscreen when the device is unlocked.

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [carPlaySetting](carplaysetting.md): The setting that indicates whether your app’s notifications appear in CarPlay.
- [alertSetting](alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [soundSetting](soundsetting.md): The authorization status for playing sounds for incoming notifications.
- [criticalAlertSetting](criticalalertsetting.md): The authorization status for playing sounds for critical alerts.
- [announcementSetting](announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [scheduledDeliverySetting](scheduleddeliverysetting.md): The setting that indicates the system schedules the notification.
- [timeSensitiveSetting](timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
- [UNNotificationSetting](../unnotificationsetting.md): Constants that indicate the current status of a notification setting.
