> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unalertstyle](https://developer.apple.com/documentation/usernotifications/unalertstyle)

# UNAlertStyle (Swift)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Constants indicating the presentation styles for alerts.

## Declaration

```swift
enum UNAlertStyle
```

## Topics

### Presentation Styles

- [UNAlertStyle.none](unalertstyle/none.md): No alert.
- [UNAlertStyle.banner](unalertstyle/banner.md): Banner alerts.
- [UNAlertStyle.alert](unalertstyle/alert.md): Modal alerts.

### Initializers

- [init(rawValue:)](unalertstyle/init%28rawvalue_%29.md)

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
- [showPreviewsSetting](unnotificationsettings/showpreviewssetting.md): The setting that indicates whether the app shows a preview of the notification’s content.
- [UNShowPreviewsSetting](unshowpreviewssetting.md): Constants indicating the style previewing a notification’s content.
- [providesAppNotificationSettings](unnotificationsettings/providesappnotificationsettings.md): A Boolean value indicating the system displays a button for in-app notification settings.

# UNAlertStyle (Objective-C)

**Framework:** User Notifications  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

Constants indicating the presentation styles for alerts.

## Declaration

```objectivec
enum UNAlertStyle : NSInteger;
```

## Topics

### Presentation Styles

- [UNAlertStyleNone](unalertstyle/none.md): No alert.
- [UNAlertStyleBanner](unalertstyle/banner.md): Banner alerts.
- [UNAlertStyleAlert](unalertstyle/alert.md): Modal alerts.

## See Also

### Getting Interface Settings

- [alertStyle](unnotificationsettings/alertstyle.md): The type of alert that the app may display when the device is unlocked.
- [showPreviewsSetting](unnotificationsettings/showpreviewssetting.md): The setting that indicates whether the app shows a preview of the notification’s content.
- [UNShowPreviewsSetting](unshowpreviewssetting.md): Constants indicating the style previewing a notification’s content.
- [providesAppNotificationSettings](unnotificationsettings/providesappnotificationsettings.md): A Boolean value indicating the system displays a button for in-app notification settings.
