> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsettings](https://developer.apple.com/documentation/usernotifications/unnotificationsettings)

# UNNotificationSettings (Swift)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The object for managing notification-related settings and the authorization status of your app.

## Declaration

```swift
class UNNotificationSettings
```

## Mentioned In

- [Asking permission to use notifications](asking-permission-to-use-notifications.md)

<a id="overview"></a>

## Overview

A [UNNotificationSettings](unnotificationsettings.md) object contains the current authorization status and notification-related settings for your app. Apps must receive authorization to schedule notifications and to interact with the user. Apps that run in CarPlay must similarly receive authorization to do so. Use this object to determine what notification-related actions your app can perform. You might then use that information to enable, disable, or adjust your app’s notification-related behaviors. Regardless of whether you take action, the system enforces your app’s settings by preventing denied interactions from occurring.

You don’t create instances of this class directly. Instead, call the [getNotificationSettings(completionHandler:)](unusernotificationcenter/getnotificationsettings%28completionhandler_%29.md) method of your app’s [UNUserNotificationCenter](unusernotificationcenter.md) object to get the current settings.

For more information about requesting authorization for user interactions, see [UNUserNotificationCenter](unusernotificationcenter.md).

## Topics

### Getting the Authorization Status

- [authorizationStatus](unnotificationsettings/authorizationstatus.md): The app’s ability to schedule and receive local and remote notifications.
- [UNAuthorizationStatus](unauthorizationstatus.md): Constants indicating whether the app is allowed to schedule notifications.

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
- [UNNotificationSetting](unnotificationsetting.md): Constants that indicate the current status of a notification setting.

### Getting Interface Settings

- [alertStyle](unnotificationsettings/alertstyle.md): The type of alert that the app may display when the device is unlocked.
- [UNAlertStyle](unalertstyle.md): Constants indicating the presentation styles for alerts.
- [showPreviewsSetting](unnotificationsettings/showpreviewssetting.md): The setting that indicates whether the app shows a preview of the notification’s content.
- [UNShowPreviewsSetting](unshowpreviewssetting.md): Constants indicating the style previewing a notification’s content.
- [providesAppNotificationSettings](unnotificationsettings/providesappnotificationsettings.md): A Boolean value indicating the system displays a button for in-app notification settings.

### Instance Properties

- [directMessagesSetting](unnotificationsettings/directmessagessetting.md)

### Initializers

- [init(coder:)](unnotificationsettings/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification management

- [UNUserNotificationCenter](unusernotificationcenter.md): The central object for managing notification-related activities for your app or app extension.
- [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md): An interface for processing incoming notifications and responding to notification actions.

# UNNotificationSettings (Objective-C)

**Framework:** User Notifications  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The object for managing notification-related settings and the authorization status of your app.

## Declaration

```objectivec
@interface UNNotificationSettings : NSObject
```

## Mentioned In

- [Asking permission to use notifications](asking-permission-to-use-notifications.md)

<a id="overview"></a>

## Overview

A [UNNotificationSettings](unnotificationsettings.md) object contains the current authorization status and notification-related settings for your app. Apps must receive authorization to schedule notifications and to interact with the user. Apps that run in CarPlay must similarly receive authorization to do so. Use this object to determine what notification-related actions your app can perform. You might then use that information to enable, disable, or adjust your app’s notification-related behaviors. Regardless of whether you take action, the system enforces your app’s settings by preventing denied interactions from occurring.

You don’t create instances of this class directly. Instead, call the [getNotificationSettingsWithCompletionHandler:](unusernotificationcenter/getnotificationsettings%28completionhandler_%29.md) method of your app’s [UNUserNotificationCenter](unusernotificationcenter.md) object to get the current settings.

For more information about requesting authorization for user interactions, see [UNUserNotificationCenter](unusernotificationcenter.md).

## Topics

### Getting the Authorization Status

- [authorizationStatus](unnotificationsettings/authorizationstatus.md): The app’s ability to schedule and receive local and remote notifications.
- [UNAuthorizationStatus](unauthorizationstatus.md): Constants indicating whether the app is allowed to schedule notifications.

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
- [UNNotificationSetting](unnotificationsetting.md): Constants that indicate the current status of a notification setting.

### Getting Interface Settings

- [alertStyle](unnotificationsettings/alertstyle.md): The type of alert that the app may display when the device is unlocked.
- [UNAlertStyle](unalertstyle.md): Constants indicating the presentation styles for alerts.
- [showPreviewsSetting](unnotificationsettings/showpreviewssetting.md): The setting that indicates whether the app shows a preview of the notification’s content.
- [UNShowPreviewsSetting](unshowpreviewssetting.md): Constants indicating the style previewing a notification’s content.
- [providesAppNotificationSettings](unnotificationsettings/providesappnotificationsettings.md): A Boolean value indicating the system displays a button for in-app notification settings.

### Instance Properties

- [directMessagesSetting](unnotificationsettings/directmessagessetting.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Notification management

- [UNUserNotificationCenter](unusernotificationcenter.md): The central object for managing notification-related activities for your app or app extension.
- [UNUserNotificationCenterDelegate](unusernotificationcenterdelegate.md): An interface for processing incoming notifications and responding to notification actions.
