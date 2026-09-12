> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationsettings/alertstyle](https://developer.apple.com/documentation/usernotifications/unnotificationsettings/alertstyle)

# alertStyle (Swift)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

The type of alert that the app may display when the device is unlocked.

## Declaration

```swift
var alertStyle: UNAlertStyle { get }
```

<a id="Discussion"></a>

## Discussion

When alerts are authorized, this property specifies the presentation style for alerts when the device is unlocked. The user may choose to display alerts as automatically disappearing banners or as modal windows that require explicit dismissal. The user may also choose not to display alerts at all.

## See Also

### Getting Interface Settings

- [UNAlertStyle](../unalertstyle.md): Constants indicating the presentation styles for alerts.
- [showPreviewsSetting](showpreviewssetting.md): The setting that indicates whether the app shows a preview of the notification’s content.
- [UNShowPreviewsSetting](../unshowpreviewssetting.md): Constants indicating the style previewing a notification’s content.
- [providesAppNotificationSettings](providesappnotificationsettings.md): A Boolean value indicating the system displays a button for in-app notification settings.

# alertStyle (Objective-C)

**Framework:** User Notifications  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+

The type of alert that the app may display when the device is unlocked.

## Declaration

```objectivec
@property (nonatomic, readonly) UNAlertStyle alertStyle;
```

```objectivec
@property (atomic, readonly) UNAlertStyle alertStyle;
```

<a id="Discussion"></a>

## Discussion

When alerts are authorized, this property specifies the presentation style for alerts when the device is unlocked. The user may choose to display alerts as automatically disappearing banners or as modal windows that require explicit dismissal. The user may also choose not to display alerts at all.

## See Also

### Getting Interface Settings

- [UNAlertStyle](../unalertstyle.md): Constants indicating the presentation styles for alerts.
- [showPreviewsSetting](showpreviewssetting.md): The setting that indicates whether the app shows a preview of the notification’s content.
- [UNShowPreviewsSetting](../unshowpreviewssetting.md): Constants indicating the style previewing a notification’s content.
- [providesAppNotificationSettings](providesappnotificationsettings.md): A Boolean value indicating the system displays a button for in-app notification settings.
