> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/centerstagerectofinterest](https://developer.apple.com/documentation/avfoundation/avcapturedevice/centerstagerectofinterest)

# centerStageRectOfInterest (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+

The effective region within the output pixel buffer to perform Center Stage framing.

## Declaration

```swift
var centerStageRectOfInterest: CGRect { get set }
```

<a id="Discussion"></a>

## Discussion

Apps that require cropping the output from Center Stage can use this property to guide how it performs its framing. The rectangle’s origin is top-left and is relative to the coordinate space of the output pixel buffer. The default value of this property is a rectangle with a normalized (`0`-`1`) coordinate space, where (`0`,`0`) represents the top left of the picture area, and (`1`,`1`) represents the bottom-right of the unrotated picture. The system applies the rectangle of interest prior to rotation, mirroring, or scaling.

> **Note**

>  Setting this property has no impact on the configuration or output of [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) instances that you associate with a capture session.

Attempting to set a rectangle of interest in the following cases results in the system throwing an illegal argument exception:

- If none of the capture device’s supported formats support Center Stage.
- If the capture device’s [isCenterStageEnabled](iscenterstageenabled.md) property value is [false](https://developer.apple.com/documentation/swift/false).
- If you specify a value that’s outside the normalized (`0`-`1`)  coordinate space.

> **Important**

>  Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you’re done configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock.

## See Also

### Configuring Center Stage

- [isCenterStageActive](iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [isCenterStageEnabled](iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageControlMode](centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.
- [AVCaptureDevice.CenterStageControlMode](centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.

# centerStageRectOfInterest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+

The effective region within the output pixel buffer to perform Center Stage framing.

## Declaration

```objectivec
@property (nonatomic) CGRect centerStageRectOfInterest;
```

<a id="Discussion"></a>

## Discussion

Apps that require cropping the output from Center Stage can use this property to guide how it performs its framing. The rectangle’s origin is top-left and is relative to the coordinate space of the output pixel buffer. The default value of this property is a rectangle with a normalized (`0`-`1`) coordinate space, where (`0`,`0`) represents the top left of the picture area, and (`1`,`1`) represents the bottom-right of the unrotated picture. The system applies the rectangle of interest prior to rotation, mirroring, or scaling.

> **Note**

>  Setting this property has no impact on the configuration or output of [AVCaptureMetadataOutput](../avcapturemetadataoutput.md) instances that you associate with a capture session.

Attempting to set a rectangle of interest in the following cases results in the system throwing an illegal argument exception:

- If none of the capture device’s supported formats support Center Stage.
- If the capture device’s [centerStageEnabled](iscenterstageenabled.md) property value is [false](https://developer.apple.com/documentation/swift/false).
- If you specify a value that’s outside the normalized (`0`-`1`)  coordinate space.

> **Important**

>  Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you’re done configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock.

## See Also

### Configuring Center Stage

- [centerStageActive](iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [centerStageEnabled](iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageRectOfInterestSupported](centerstagerectofinterestsupported.md)
- [centerStageControlMode](centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.
- [AVCaptureCenterStageControlMode](centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.
