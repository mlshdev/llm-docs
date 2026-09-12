> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpvolumesettingsalertshow()](https://developer.apple.com/documentation/mediaplayer/mpvolumesettingsalertshow())

# MPVolumeSettingsAlertShow() (Swift)

**Framework:** Media Player  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 11.3) · iPadOS 2.0+ (deprecated in 11.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays an alert panel for controlling the system volume.

> Use MPVolumeView to present volume controls.

## Declaration

```swift
func MPVolumeSettingsAlertShow()
```

<a id="Discussion"></a>

## Discussion

The alert panel displayed by this function floats above the contents of the current window. It contains a slider for adjusting the system volume setting and a Done button so that the user can dismiss the panel. You can also dismiss the panel programmatically using the [MPVolumeSettingsAlertHide()](mpvolumesettingsalerthide%28%29.md) function.

## See Also

### Global volume setting methods

- [MPVolumeSettingsAlertHide()](mpvolumesettingsalerthide%28%29.md): Deprecated. Hides the alert panel that controls the system volume.
- [MPVolumeSettingsAlertIsVisible()](mpvolumesettingsalertisvisible%28%29.md): Deprecated. Returns a Boolean value indicating whether the volume alert panel is currently visible.

# MPVolumeSettingsAlertShow (Objective-C)

**Framework:** Media Player  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 11.3) · iPadOS 2.0+ (deprecated in 11.3) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays an alert panel for controlling the system volume.

> Use MPVolumeView to present volume controls.

## Declaration

```objectivec
extern void MPVolumeSettingsAlertShow();
```

<a id="Discussion"></a>

## Discussion

The alert panel displayed by this function floats above the contents of the current window. It contains a slider for adjusting the system volume setting and a Done button so that the user can dismiss the panel. You can also dismiss the panel programmatically using the [MPVolumeSettingsAlertHide](mpvolumesettingsalerthide%28%29.md) function.

## See Also

### Global volume setting methods

- [MPVolumeSettingsAlertHide](mpvolumesettingsalerthide%28%29.md): Deprecated. Hides the alert panel that controls the system volume.
- [MPVolumeSettingsAlertIsVisible](mpvolumesettingsalertisvisible%28%29.md): Deprecated. Returns a Boolean value indicating whether the volume alert panel is currently visible.
