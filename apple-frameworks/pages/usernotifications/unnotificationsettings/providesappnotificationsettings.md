> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsettings/providesappnotificationsettings](https://developer.apple.com/documentation/usernotifications/unnotificationsettings/providesappnotificationsettings)

# providesAppNotificationSettings (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 5.0+

A Boolean value indicating the system displays a button for in-app notification settings.

## Declaration

```swift
var providesAppNotificationSettings: Bool { get }
```

## See Also

### Getting Interface Settings

- [alertStyle](alertstyle.md): The type of alert that the app may display when the device is unlocked.
- [UNAlertStyle](../unalertstyle.md): Constants indicating the presentation styles for alerts.
- [showPreviewsSetting](showpreviewssetting.md): The setting that indicates whether the app shows a preview of the notification’s content.
- [UNShowPreviewsSetting](../unshowpreviewssetting.md): Constants indicating the style previewing a notification’s content.

# providesAppNotificationSettings (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 5.0+

A Boolean value indicating the system displays a button for in-app notification settings.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL providesAppNotificationSettings;
```

```objectivec
@property (atomic, readonly) BOOL providesAppNotificationSettings;
```

## See Also

### Getting Interface Settings

- [alertStyle](alertstyle.md): The type of alert that the app may display when the device is unlocked.
- [UNAlertStyle](../unalertstyle.md): Constants indicating the presentation styles for alerts.
- [showPreviewsSetting](showpreviewssetting.md): The setting that indicates whether the app shows a preview of the notification’s content.
- [UNShowPreviewsSetting](../unshowpreviewssetting.md): Constants indicating the style previewing a notification’s content.
