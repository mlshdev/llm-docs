> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scpresenteroverlayalertsetting](https://developer.apple.com/documentation/screencapturekit/scpresenteroverlayalertsetting)

# SCPresenterOverlayAlertSetting (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Configures how to present streaming notifications to a streamer of Presenter Overlay.

## Declaration

```swift
enum SCPresenterOverlayAlertSetting
```

## Topics

### Alerting Presenters

- [SCPresenterOverlayAlertSetting.always](scpresenteroverlayalertsetting/always.md): Always display an alert when using Presenter Overlay.
- [SCPresenterOverlayAlertSetting.never](scpresenteroverlayalertsetting/never.md): Never display an alert when using Presenter Overlay.
- [SCPresenterOverlayAlertSetting.system](scpresenteroverlayalertsetting/system.md): Displays an alert when using Presenter Overlay based on the System Settings.

### Initializers

- [init(rawValue:)](scpresenteroverlayalertsetting/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Notifying presenters

- [presenterOverlayPrivacyAlertSetting](scstreamconfiguration/presenteroverlayprivacyalertsetting.md): A value indicating if alerts appear to presenters while using Presenter Overlay.

# SCPresenterOverlayAlertSetting (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

Configures how to present streaming notifications to a streamer of Presenter Overlay.

## Declaration

```objectivec
enum SCPresenterOverlayAlertSetting : NSInteger;
```

## Topics

### Alerting Presenters

- [SCPresenterOverlayAlertSettingAlways](scpresenteroverlayalertsetting/always.md): Always display an alert when using Presenter Overlay.
- [SCPresenterOverlayAlertSettingNever](scpresenteroverlayalertsetting/never.md): Never display an alert when using Presenter Overlay.
- [SCPresenterOverlayAlertSettingSystem](scpresenteroverlayalertsetting/system.md): Displays an alert when using Presenter Overlay based on the System Settings.

## See Also

### Notifying presenters

- [presenterOverlayPrivacyAlertSetting](scstreamconfiguration/presenteroverlayprivacyalertsetting.md): A value indicating if alerts appear to presenters while using Presenter Overlay.
