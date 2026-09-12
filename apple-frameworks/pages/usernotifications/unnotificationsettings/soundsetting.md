> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsettings/soundsetting](https://developer.apple.com/documentation/usernotifications/unnotificationsettings/soundsetting)

# soundSetting (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The authorization status for playing sounds for incoming notifications.

## Declaration

```swift
var soundSetting: UNNotificationSetting { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [UNNotificationSetting.enabled](../unnotificationsetting/enabled.md), the system authorizes the app to play sounds. The system tries to play a sound when the [sound](../unnotificationcontent/sound.md) property of the [UNNotificationContent](../unnotificationcontent.md) object contains a value, or when the `aps` dictionary in a remote notification contains the `sound` key.

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [lockScreenSetting](lockscreensetting.md): The setting that indicates whether your app’s notifications appear on a device’s Lock screen.
- [carPlaySetting](carplaysetting.md): The setting that indicates whether your app’s notifications appear in CarPlay.
- [alertSetting](alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [criticalAlertSetting](criticalalertsetting.md): The authorization status for playing sounds for critical alerts.
- [announcementSetting](announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [scheduledDeliverySetting](scheduleddeliverysetting.md): The setting that indicates the system schedules the notification.
- [timeSensitiveSetting](timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
- [UNNotificationSetting](../unnotificationsetting.md): Constants that indicate the current status of a notification setting.

# soundSetting (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

The authorization status for playing sounds for incoming notifications.

## Declaration

```objectivec
@property (nonatomic, readonly) UNNotificationSetting soundSetting;
```

```objectivec
@property (atomic, readonly) UNNotificationSetting soundSetting;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [UNNotificationSettingEnabled](../unnotificationsetting/enabled.md), the system authorizes the app to play sounds. The system tries to play a sound when the [sound](../unnotificationcontent/sound.md) property of the [UNNotificationContent](../unnotificationcontent.md) object contains a value, or when the `aps` dictionary in a remote notification contains the `sound` key.

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [lockScreenSetting](lockscreensetting.md): The setting that indicates whether your app’s notifications appear on a device’s Lock screen.
- [carPlaySetting](carplaysetting.md): The setting that indicates whether your app’s notifications appear in CarPlay.
- [alertSetting](alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [criticalAlertSetting](criticalalertsetting.md): The authorization status for playing sounds for critical alerts.
- [announcementSetting](announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [scheduledDeliverySetting](scheduleddeliverysetting.md): The setting that indicates the system schedules the notification.
- [timeSensitiveSetting](timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
- [UNNotificationSetting](../unnotificationsetting.md): Constants that indicate the current status of a notification setting.
