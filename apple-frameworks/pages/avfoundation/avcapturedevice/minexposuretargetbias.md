> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/minexposuretargetbias](https://developer.apple.com/documentation/avfoundation/avcapturedevice/minexposuretargetbias)

# minExposureTargetBias (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The minimum supported exposure bias, in exposure value (EV) units.

## Declaration

```swift
var minExposureTargetBias: Float { get }
```

## See Also

### Adjusting exposure compensation

- [exposureTargetOffset](exposuretargetoffset.md): The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.
- [exposureTargetBias](exposuretargetbias.md): The bias to apply to the target exposure value, in exposure value (EV) units.
- [maxExposureTargetBias](maxexposuretargetbias.md): The maximum supported exposure bias, in exposure value (EV) units.
- [currentExposureTargetBias](currentexposuretargetbias.md): A special constant that represents the current exposure bias value.
- [setExposureTargetBias(\_:completionHandler:)](setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.

# minExposureTargetBias (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The minimum supported exposure bias, in exposure value (EV) units.

## Declaration

```objectivec
@property (nonatomic, readonly) float minExposureTargetBias;
```

## See Also

### Adjusting exposure compensation

- [exposureTargetOffset](exposuretargetoffset.md): The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.
- [exposureTargetBias](exposuretargetbias.md): The bias to apply to the target exposure value, in exposure value (EV) units.
- [maxExposureTargetBias](maxexposuretargetbias.md): The maximum supported exposure bias, in exposure value (EV) units.
- [AVCaptureExposureTargetBiasCurrent](currentexposuretargetbias.md): A special constant that represents the current exposure bias value.
- [setExposureTargetBias:completionHandler:](setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.
