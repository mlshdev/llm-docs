> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/exposuretargetbias](https://developer.apple.com/documentation/avfoundation/avcapturedevice/exposuretargetbias)

# exposureTargetBias (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The bias to apply to the target exposure value, in exposure value (EV) units.

## Declaration

```swift
var exposureTargetBias: Float { get }
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](../enhancing-your-app-experience-with-the-camera-control.md)

<a id="Discussion"></a>

## Discussion

When the device exposure mode is [AVCaptureDevice.ExposureMode.continuousAutoExposure](exposuremode-swift.enum/continuousautoexposure.md) or [AVCaptureDevice.ExposureMode.locked](exposuremode-swift.enum/locked.md), the bias affects both metering ([exposureTargetOffset](exposuretargetoffset.md)), and the actual exposure level ([exposureDuration](exposureduration.md) and [iso](iso.md)).  When the exposure mode is [AVCaptureDevice.ExposureMode.custom](exposuremode-swift.enum/custom.md), it only affects metering.

This property is key-value observable.

## See Also

### Adjusting exposure compensation

- [exposureTargetOffset](exposuretargetoffset.md): The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.
- [minExposureTargetBias](minexposuretargetbias.md): The minimum supported exposure bias, in exposure value (EV) units.
- [maxExposureTargetBias](maxexposuretargetbias.md): The maximum supported exposure bias, in exposure value (EV) units.
- [currentExposureTargetBias](currentexposuretargetbias.md): A special constant that represents the current exposure bias value.
- [setExposureTargetBias(\_:completionHandler:)](setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.

# exposureTargetBias (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The bias to apply to the target exposure value, in exposure value (EV) units.

## Declaration

```objectivec
@property (nonatomic, readonly) float exposureTargetBias;
```

## Mentioned In

- [Enhancing your app experience with the Camera Control](../enhancing-your-app-experience-with-the-camera-control.md)

<a id="Discussion"></a>

## Discussion

When the device exposure mode is [AVCaptureExposureModeContinuousAutoExposure](exposuremode-swift.enum/continuousautoexposure.md) or [AVCaptureExposureModeLocked](exposuremode-swift.enum/locked.md), the bias affects both metering ([exposureTargetOffset](exposuretargetoffset.md)), and the actual exposure level ([exposureDuration](exposureduration.md) and [ISO](iso.md)).  When the exposure mode is [AVCaptureExposureModeCustom](exposuremode-swift.enum/custom.md), it only affects metering.

This property is key-value observable.

## See Also

### Adjusting exposure compensation

- [exposureTargetOffset](exposuretargetoffset.md): The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.
- [minExposureTargetBias](minexposuretargetbias.md): The minimum supported exposure bias, in exposure value (EV) units.
- [maxExposureTargetBias](maxexposuretargetbias.md): The maximum supported exposure bias, in exposure value (EV) units.
- [AVCaptureExposureTargetBiasCurrent](currentexposuretargetbias.md): A special constant that represents the current exposure bias value.
- [setExposureTargetBias:completionHandler:](setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.
