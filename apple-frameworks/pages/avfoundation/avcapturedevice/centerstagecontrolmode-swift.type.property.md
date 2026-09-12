> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/centerstagecontrolmode-swift.type.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/centerstagecontrolmode-swift.type.property)

# centerStageControlMode (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

A value that indicates the current mode of Center Stage control.

## Declaration

```swift
class var centerStageControlMode: AVCaptureDevice.CenterStageControlMode { get set }
```

<a id="Discussion"></a>

## Discussion

See Control Modes for details on choosing an appropriate control mode.

## See Also

### Configuring Center Stage

- [isCenterStageActive](iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [isCenterStageEnabled](iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageRectOfInterest](centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [AVCaptureDevice.CenterStageControlMode](centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.

# centerStageControlMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

A value that indicates the current mode of Center Stage control.

## Declaration

```objectivec
@property (class) AVCaptureCenterStageControlMode centerStageControlMode;
```

<a id="Discussion"></a>

## Discussion

See Control Modes for details on choosing an appropriate control mode.

## See Also

### Configuring Center Stage

- [centerStageActive](iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [centerStageEnabled](iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageRectOfInterest](centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [centerStageRectOfInterestSupported](centerstagerectofinterestsupported.md)
- [AVCaptureCenterStageControlMode](centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.
