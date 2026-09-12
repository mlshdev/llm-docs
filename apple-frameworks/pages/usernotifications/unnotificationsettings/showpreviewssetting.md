> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsettings/showpreviewssetting](https://developer.apple.com/documentation/usernotifications/unnotificationsettings/showpreviewssetting)

# showPreviewsSetting (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

The setting that indicates whether the app shows a preview of the notification’s content.

## Declaration

```swift
var showPreviewsSetting: UNShowPreviewsSetting { get }
```

## See Also

### Getting Interface Settings

- [alertStyle](alertstyle.md): The type of alert that the app may display when the device is unlocked.
- [UNAlertStyle](../unalertstyle.md): Constants indicating the presentation styles for alerts.
- [UNShowPreviewsSetting](../unshowpreviewssetting.md): Constants indicating the style previewing a notification’s content.
- [providesAppNotificationSettings](providesappnotificationsettings.md): A Boolean value indicating the system displays a button for in-app notification settings.

# showPreviewsSetting (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

The setting that indicates whether the app shows a preview of the notification’s content.

## Declaration

```objectivec
@property (nonatomic, readonly) UNShowPreviewsSetting showPreviewsSetting;
```

```objectivec
@property (atomic, readonly) UNShowPreviewsSetting showPreviewsSetting;
```

## See Also

### Getting Interface Settings

- [alertStyle](alertstyle.md): The type of alert that the app may display when the device is unlocked.
- [UNAlertStyle](../unalertstyle.md): Constants indicating the presentation styles for alerts.
- [UNShowPreviewsSetting](../unshowpreviewssetting.md): Constants indicating the style previewing a notification’s content.
- [providesAppNotificationSettings](providesappnotificationsettings.md): A Boolean value indicating the system displays a button for in-app notification settings.
