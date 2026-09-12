> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/iscenterstageenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/iscenterstageenabled)

# isCenterStageEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

A Boolean value that indicates whether a user or an app enabled Center Stage on a device.

## Declaration

```swift
class var isCenterStageEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

You can only set this value when Center Stage is under app or cooperative control. Attempting to change the enabled state when the control mode is [AVCaptureDevice.CenterStageControlMode.user](centerstagecontrolmode-swift.enum/user.md), results in the system throwing an exception.

> **Note**

>  When Center Stage is under user or cooperative control, the user may change the feature’s enabled state in Control Center. Key-value observe this property value to monitor these changes.

## See Also

### Configuring Center Stage

- [isCenterStageActive](iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [centerStageRectOfInterest](centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [centerStageControlMode](centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.
- [AVCaptureDevice.CenterStageControlMode](centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.

# centerStageEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

A Boolean value that indicates whether a user or an app enabled Center Stage on a device.

## Declaration

```objectivec
@property (class, getter=isCenterStageEnabled) BOOL centerStageEnabled;
```

<a id="Discussion"></a>

## Discussion

You can only set this value when Center Stage is under app or cooperative control. Attempting to change the enabled state when the control mode is [AVCaptureCenterStageControlModeUser](centerstagecontrolmode-swift.enum/user.md), results in the system throwing an exception.

> **Note**

>  When Center Stage is under user or cooperative control, the user may change the feature’s enabled state in Control Center. Key-value observe this property value to monitor these changes.

## See Also

### Configuring Center Stage

- [centerStageActive](iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [centerStageRectOfInterest](centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [centerStageRectOfInterestSupported](centerstagerectofinterestsupported.md)
- [centerStageControlMode](centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.
- [AVCaptureCenterStageControlMode](centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.
