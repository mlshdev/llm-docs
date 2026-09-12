> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsettings/criticalalertsetting](https://developer.apple.com/documentation/usernotifications/unnotificationsettings/criticalalertsetting)

# criticalAlertSetting (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 5.0+

The authorization status for playing sounds for critical alerts.

## Declaration

```swift
var criticalAlertSetting: UNNotificationSetting { get }
```

<a id="Discussion"></a>

## Discussion

When [UNNotificationSetting.enabled](../unnotificationsetting/enabled.md), this property authorizes the app to play critical sounds that ignore Do Not Disturb and the device’s mute switch.

For local notifications, the system attempts to play a critical sound when the [sound](../unnotificationcontent/sound.md) property of the [UNNotificationContent](../unnotificationcontent.md) object contains an object returned by the [defaultCritical](../unnotificationsound/defaultcritical.md) property, the [criticalSoundNamed(\_:)](../unnotificationsound/criticalsoundnamed%28__%29.md) method, or a related method.

For remote notifications, the system attempts to play a critical sound when the notification’s payload contains a `sound` directory that contains the `critical` key.

Critical alerts require a special entitlement issued by Apple.

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [lockScreenSetting](lockscreensetting.md): The setting that indicates whether your app’s notifications appear on a device’s Lock screen.
- [carPlaySetting](carplaysetting.md): The setting that indicates whether your app’s notifications appear in CarPlay.
- [alertSetting](alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [soundSetting](soundsetting.md): The authorization status for playing sounds for incoming notifications.
- [announcementSetting](announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [scheduledDeliverySetting](scheduleddeliverysetting.md): The setting that indicates the system schedules the notification.
- [timeSensitiveSetting](timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
- [UNNotificationSetting](../unnotificationsetting.md): Constants that indicate the current status of a notification setting.

# criticalAlertSetting (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 5.0+

The authorization status for playing sounds for critical alerts.

## Declaration

```objectivec
@property (nonatomic, readonly) UNNotificationSetting criticalAlertSetting;
```

```objectivec
@property (atomic, readonly) UNNotificationSetting criticalAlertSetting;
```

<a id="Discussion"></a>

## Discussion

When [UNNotificationSettingEnabled](../unnotificationsetting/enabled.md), this property authorizes the app to play critical sounds that ignore Do Not Disturb and the device’s mute switch.

For local notifications, the system attempts to play a critical sound when the [sound](../unnotificationcontent/sound.md) property of the [UNNotificationContent](../unnotificationcontent.md) object contains an object returned by the [defaultCriticalSound](../unnotificationsound/defaultcritical.md) property, the [criticalSoundNamed:](../unnotificationsound/criticalsoundnamed%28__%29.md) method, or a related method.

For remote notifications, the system attempts to play a critical sound when the notification’s payload contains a `sound` directory that contains the `critical` key.

Critical alerts require a special entitlement issued by Apple.

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [lockScreenSetting](lockscreensetting.md): The setting that indicates whether your app’s notifications appear on a device’s Lock screen.
- [carPlaySetting](carplaysetting.md): The setting that indicates whether your app’s notifications appear in CarPlay.
- [alertSetting](alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [soundSetting](soundsetting.md): The authorization status for playing sounds for incoming notifications.
- [announcementSetting](announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [scheduledDeliverySetting](scheduleddeliverysetting.md): The setting that indicates the system schedules the notification.
- [timeSensitiveSetting](timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
- [UNNotificationSetting](../unnotificationsetting.md): Constants that indicate the current status of a notification setting.
