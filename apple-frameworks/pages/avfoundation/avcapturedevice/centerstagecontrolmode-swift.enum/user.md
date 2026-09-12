> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/centerstagecontrolmode-swift.enum/user](https://developer.apple.com/documentation/avfoundation/avcapturedevice/centerstagecontrolmode-swift.enum/user)

# AVCaptureDevice.CenterStageControlMode.user (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

The user controls Center Stage.

## Declaration

```swift
case user
```

<a id="Discussion"></a>

## Discussion

In this mode, the user has exclusive control of Center Stage through Control Center. The system throws an exception in this mode if an app attempts to programmatically change the enabled state of Center Stage.

## See Also

### Control modes

- [AVCaptureDevice.CenterStageControlMode.app](app.md): The app controls Center Stage.
- [AVCaptureDevice.CenterStageControlMode.cooperative](cooperative.md): A user and app cooperatively share control of Center Stage.

# AVCaptureCenterStageControlModeUser (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

The user controls Center Stage.

## Declaration

```objectivec
AVCaptureCenterStageControlModeUser
```

<a id="Discussion"></a>

## Discussion

In this mode, the user has exclusive control of Center Stage through Control Center. The system throws an exception in this mode if an app attempts to programmatically change the enabled state of Center Stage.

## See Also

### Control modes

- [AVCaptureCenterStageControlModeApp](app.md): The app controls Center Stage.
- [AVCaptureCenterStageControlModeCooperative](cooperative.md): A user and app cooperatively share control of Center Stage.
