> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/centerstagecontrolmode-swift.enum/cooperative](https://developer.apple.com/documentation/avfoundation/avcapturedevice/centerstagecontrolmode-swift.enum/cooperative)

# AVCaptureDevice.CenterStageControlMode.cooperative (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

A user and app cooperatively share control of Center Stage.

## Declaration

```swift
case cooperative
```

<a id="Discussion"></a>

## Discussion

In this mode, it’s your app’s responsibilitiy to honor user intent and make center stage active when they request. Because the user can change the enabled state through Control Center, key-value observe the [isCenterStageEnabled](../iscenterstageenabled.md) property value and update your app state appropriately.

## See Also

### Control modes

- [AVCaptureDevice.CenterStageControlMode.user](user.md): The user controls Center Stage.
- [AVCaptureDevice.CenterStageControlMode.app](app.md): The app controls Center Stage.

# AVCaptureCenterStageControlModeCooperative (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

A user and app cooperatively share control of Center Stage.

## Declaration

```objectivec
AVCaptureCenterStageControlModeCooperative
```

<a id="Discussion"></a>

## Discussion

In this mode, it’s your app’s responsibilitiy to honor user intent and make center stage active when they request. Because the user can change the enabled state through Control Center, key-value observe the [centerStageEnabled](../iscenterstageenabled.md) property value and update your app state appropriately.

## See Also

### Control modes

- [AVCaptureCenterStageControlModeUser](user.md): The user controls Center Stage.
- [AVCaptureCenterStageControlModeApp](app.md): The app controls Center Stage.
