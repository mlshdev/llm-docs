> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/iscenterstageactive](https://developer.apple.com/documentation/avfoundation/avcapturedevice/iscenterstageactive)

# isCenterStageActive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

A Boolean value that indicates whether Center Stage is active on a device.

## Declaration

```swift
var isCenterStageActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When Center Stage is active, the camera automatically pans, tightens, or widens the field of view as it requires to keep people optimally framed. If an app or a user enables Center Stage, this property value is [true](https://developer.apple.com/documentation/swift/true) if the device supports the feature in its current configuration.

The system imposes the following restrictions on a device when Center Stage is active:

- It limits the range of values the device supports for its [minAvailableVideoZoomFactor](minavailablevideozoomfactor.md) and [maxAvailableVideoZoomFactor](maxavailablevideozoomfactor.md) properties to those of the active capture format’s [videoMinZoomFactorForCenterStage](format/videominzoomfactorforcenterstage.md) and [videoMaxZoomFactorForCenterStage](format/videomaxzoomfactorforcenterstage.md), respectively.
- It limits the [activeVideoMinFrameDuration](activevideominframeduration.md) and [activeVideoMaxFrameDuration](activevideomaxframeduration.md) to the value set by the active capture format’s [videoFrameRateRangeForCenterStage](format/videoframeraterangeforcenterstage.md) property.

The system deactivates Center Stage in the following cases:

- You enable depth data delivery on a capture output, such as [AVCaptureDepthDataOutput](../avcapturedepthdataoutput.md) or [AVCapturePhotoOutput](../avcapturephotooutput.md).
- The device supports geometric distortion correction, but you haven’t enabled it by setting the value of [isGeometricDistortionCorrectionEnabled](isgeometricdistortioncorrectionenabled.md) to [true](https://developer.apple.com/documentation/swift/true).

This property is key-value observable.

## See Also

### Configuring Center Stage

- [isCenterStageEnabled](iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageRectOfInterest](centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [centerStageControlMode](centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.
- [AVCaptureDevice.CenterStageControlMode](centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.

# centerStageActive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

A Boolean value that indicates whether Center Stage is active on a device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCenterStageActive) BOOL centerStageActive;
```

<a id="Discussion"></a>

## Discussion

When Center Stage is active, the camera automatically pans, tightens, or widens the field of view as it requires to keep people optimally framed. If an app or a user enables Center Stage, this property value is [true](https://developer.apple.com/documentation/swift/true) if the device supports the feature in its current configuration.

The system imposes the following restrictions on a device when Center Stage is active:

- It limits the range of values the device supports for its [minAvailableVideoZoomFactor](minavailablevideozoomfactor.md) and [maxAvailableVideoZoomFactor](maxavailablevideozoomfactor.md) properties to those of the active capture format’s [videoMinZoomFactorForCenterStage](format/videominzoomfactorforcenterstage.md) and [videoMaxZoomFactorForCenterStage](format/videomaxzoomfactorforcenterstage.md), respectively.
- It limits the [activeVideoMinFrameDuration](activevideominframeduration.md) and [activeVideoMaxFrameDuration](activevideomaxframeduration.md) to the value set by the active capture format’s [videoFrameRateRangeForCenterStage](format/videoframeraterangeforcenterstage.md) property.

The system deactivates Center Stage in the following cases:

- You enable depth data delivery on a capture output, such as [AVCaptureDepthDataOutput](../avcapturedepthdataoutput.md) or [AVCapturePhotoOutput](../avcapturephotooutput.md).
- The device supports geometric distortion correction, but you haven’t enabled it by setting the value of [geometricDistortionCorrectionEnabled](isgeometricdistortioncorrectionenabled.md) to [true](https://developer.apple.com/documentation/swift/true).

This property is key-value observable.

## See Also

### Configuring Center Stage

- [centerStageEnabled](iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageRectOfInterest](centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [centerStageRectOfInterestSupported](centerstagerectofinterestsupported.md)
- [centerStageControlMode](centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.
- [AVCaptureCenterStageControlMode](centerstagecontrolmode-swift.enum.md): Constants that indicate the current Center Stage control mode.
