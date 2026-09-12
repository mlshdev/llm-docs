> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unshowpreviewssetting](https://developer.apple.com/documentation/usernotifications/unshowpreviewssetting)

# UNShowPreviewsSetting (Swift)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Constants indicating the style previewing a notification’s content.

## Declaration

```swift
enum UNShowPreviewsSetting
```

## Topics

### Preview Styes

- [UNShowPreviewsSetting.always](unshowpreviewssetting/always.md): The notification’s content is always shown, even when the device is locked.
- [UNShowPreviewsSetting.whenAuthenticated](unshowpreviewssetting/whenauthenticated.md): The notification’s content is shown only when the device is unlocked.
- [UNShowPreviewsSetting.never](unshowpreviewssetting/never.md): The notification’s content is never shown, even when the device is unlocked

### Initializers

- [init(rawValue:)](unshowpreviewssetting/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Interface Settings

- [alertStyle](unnotificationsettings/alertstyle.md): The type of alert that the app may display when the device is unlocked.
- [UNAlertStyle](unalertstyle.md): Constants indicating the presentation styles for alerts.
- [showPreviewsSetting](unnotificationsettings/showpreviewssetting.md): The setting that indicates whether the app shows a preview of the notification’s content.
- [providesAppNotificationSettings](unnotificationsettings/providesappnotificationsettings.md): A Boolean value indicating the system displays a button for in-app notification settings.

# UNShowPreviewsSetting (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Constants indicating the style previewing a notification’s content.

## Declaration

```objectivec
enum UNShowPreviewsSetting : NSInteger;
```

## Topics

### Preview Styes

- [UNShowPreviewsSettingAlways](unshowpreviewssetting/always.md): The notification’s content is always shown, even when the device is locked.
- [UNShowPreviewsSettingWhenAuthenticated](unshowpreviewssetting/whenauthenticated.md): The notification’s content is shown only when the device is unlocked.
- [UNShowPreviewsSettingNever](unshowpreviewssetting/never.md): The notification’s content is never shown, even when the device is unlocked

## See Also

### Getting Interface Settings

- [alertStyle](unnotificationsettings/alertstyle.md): The type of alert that the app may display when the device is unlocked.
- [UNAlertStyle](unalertstyle.md): Constants indicating the presentation styles for alerts.
- [showPreviewsSetting](unnotificationsettings/showpreviewssetting.md): The setting that indicates whether the app shows a preview of the notification’s content.
- [providesAppNotificationSettings](unnotificationsettings/providesappnotificationsettings.md): A Boolean value indicating the system displays a button for in-app notification settings.
