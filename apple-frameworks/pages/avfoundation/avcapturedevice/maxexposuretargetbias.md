> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/maxexposuretargetbias](https://developer.apple.com/documentation/avfoundation/avcapturedevice/maxexposuretargetbias)

# maxExposureTargetBias (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The maximum supported exposure bias, in exposure value (EV) units.

## Declaration

```swift
var maxExposureTargetBias: Float { get }
```

## See Also

### Adjusting exposure compensation

- [exposureTargetOffset](exposuretargetoffset.md): The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.
- [exposureTargetBias](exposuretargetbias.md): The bias to apply to the target exposure value, in exposure value (EV) units.
- [minExposureTargetBias](minexposuretargetbias.md): The minimum supported exposure bias, in exposure value (EV) units.
- [currentExposureTargetBias](currentexposuretargetbias.md): A special constant that represents the current exposure bias value.
- [setExposureTargetBias(\_:completionHandler:)](setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.

# maxExposureTargetBias (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The maximum supported exposure bias, in exposure value (EV) units.

## Declaration

```objectivec
@property (nonatomic, readonly) float maxExposureTargetBias;
```

## See Also

### Adjusting exposure compensation

- [exposureTargetOffset](exposuretargetoffset.md): The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.
- [exposureTargetBias](exposuretargetbias.md): The bias to apply to the target exposure value, in exposure value (EV) units.
- [minExposureTargetBias](minexposuretargetbias.md): The minimum supported exposure bias, in exposure value (EV) units.
- [AVCaptureExposureTargetBiasCurrent](currentexposuretargetbias.md): A special constant that represents the current exposure bias value.
- [setExposureTargetBias:completionHandler:](setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.
