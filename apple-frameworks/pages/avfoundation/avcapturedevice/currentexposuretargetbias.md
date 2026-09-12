> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/currentexposuretargetbias](https://developer.apple.com/documentation/avfoundation/avcapturedevice/currentexposuretargetbias)

# currentExposureTargetBias (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A special constant that represents the current exposure bias value.

## Declaration

```swift
class let currentExposureTargetBias: Float
```

<a id="Discussion"></a>

## Discussion

Pass this value to the [setExposureTargetBias(\_:completionHandler:)](setexposuretargetbias%28__completionhandler_%29.md) method to lock exposure bias to its current value, which disables autoexposure.

## See Also

### Adjusting exposure compensation

- [exposureTargetOffset](exposuretargetoffset.md): The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.
- [exposureTargetBias](exposuretargetbias.md): The bias to apply to the target exposure value, in exposure value (EV) units.
- [minExposureTargetBias](minexposuretargetbias.md): The minimum supported exposure bias, in exposure value (EV) units.
- [maxExposureTargetBias](maxexposuretargetbias.md): The maximum supported exposure bias, in exposure value (EV) units.
- [setExposureTargetBias(\_:completionHandler:)](setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.

# AVCaptureExposureTargetBiasCurrent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A special constant that represents the current exposure bias value.

## Declaration

```objectivec
extern const float AVCaptureExposureTargetBiasCurrent;
```

<a id="Discussion"></a>

## Discussion

Pass this value to the [setExposureTargetBias:completionHandler:](setexposuretargetbias%28__completionhandler_%29.md) method to lock exposure bias to its current value, which disables autoexposure.

## See Also

### Adjusting exposure compensation

- [exposureTargetOffset](exposuretargetoffset.md): The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.
- [exposureTargetBias](exposuretargetbias.md): The bias to apply to the target exposure value, in exposure value (EV) units.
- [minExposureTargetBias](minexposuretargetbias.md): The minimum supported exposure bias, in exposure value (EV) units.
- [maxExposureTargetBias](maxexposuretargetbias.md): The maximum supported exposure bias, in exposure value (EV) units.
- [setExposureTargetBias:completionHandler:](setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.
