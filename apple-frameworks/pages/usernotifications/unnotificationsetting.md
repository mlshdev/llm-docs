> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsetting](https://developer.apple.com/documentation/usernotifications/unnotificationsetting)

# UNNotificationSetting (Swift)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the current status of a notification setting.

## Declaration

```swift
enum UNNotificationSetting
```

## Topics

### Constants

- [UNNotificationSetting.notSupported](unnotificationsetting/notsupported.md): The setting is not available to your app.
- [UNNotificationSetting.disabled](unnotificationsetting/disabled.md): The setting is disabled.
- [UNNotificationSetting.enabled](unnotificationsetting/enabled.md): The setting is enabled.

### Initializers

- [init(rawValue:)](unnotificationsetting/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](unnotificationsettings/notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [lockScreenSetting](unnotificationsettings/lockscreensetting.md): The setting that indicates whether your app’s notifications appear on a device’s Lock screen.
- [carPlaySetting](unnotificationsettings/carplaysetting.md): The setting that indicates whether your app’s notifications appear in CarPlay.
- [alertSetting](unnotificationsettings/alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](unnotificationsettings/badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [soundSetting](unnotificationsettings/soundsetting.md): The authorization status for playing sounds for incoming notifications.
- [criticalAlertSetting](unnotificationsettings/criticalalertsetting.md): The authorization status for playing sounds for critical alerts.
- [announcementSetting](unnotificationsettings/announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [scheduledDeliverySetting](unnotificationsettings/scheduleddeliverysetting.md): The setting that indicates the system schedules the notification.
- [timeSensitiveSetting](unnotificationsettings/timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.

# UNNotificationSetting (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Constants that indicate the current status of a notification setting.

## Declaration

```objectivec
enum UNNotificationSetting : NSInteger;
```

## Topics

### Constants

- [UNNotificationSettingNotSupported](unnotificationsetting/notsupported.md): The setting is not available to your app.
- [UNNotificationSettingDisabled](unnotificationsetting/disabled.md): The setting is disabled.
- [UNNotificationSettingEnabled](unnotificationsetting/enabled.md): The setting is enabled.

## See Also

### Getting Device-Specific Settings

- [notificationCenterSetting](unnotificationsettings/notificationcentersetting.md): The setting that indicates whether your app’s notifications appear in Notification Center.
- [lockScreenSetting](unnotificationsettings/lockscreensetting.md): The setting that indicates whether your app’s notifications appear on a device’s Lock screen.
- [carPlaySetting](unnotificationsettings/carplaysetting.md): The setting that indicates whether your app’s notifications appear in CarPlay.
- [alertSetting](unnotificationsettings/alertsetting.md): The authorization status for displaying alerts.
- [badgeSetting](unnotificationsettings/badgesetting.md): The setting that indicates whether badges appear on your app’s icon.
- [soundSetting](unnotificationsettings/soundsetting.md): The authorization status for playing sounds for incoming notifications.
- [criticalAlertSetting](unnotificationsettings/criticalalertsetting.md): The authorization status for playing sounds for critical alerts.
- [announcementSetting](unnotificationsettings/announcementsetting.md): The setting that indicates whether Siri can announce your app’s notifications.
- [scheduledDeliverySetting](unnotificationsettings/scheduleddeliverysetting.md): The setting that indicates the system schedules the notification.
- [timeSensitiveSetting](unnotificationsettings/timesensitivesetting.md): The setting that indicates the system treats the notification as time-sensitive.
