> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/exposuretargetoffset](https://developer.apple.com/documentation/avfoundation/avcapturedevice/exposuretargetoffset)

# exposureTargetOffset (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.

## Declaration

```swift
var exposureTargetOffset: Float { get }
```

<a id="Discussion"></a>

## Discussion

The value of property indicates the difference between the metered exposure level of the current scene and the target exposure value.

This property is key-value observable.

## See Also

### Adjusting exposure compensation

- [exposureTargetBias](exposuretargetbias.md): The bias to apply to the target exposure value, in exposure value (EV) units.
- [minExposureTargetBias](minexposuretargetbias.md): The minimum supported exposure bias, in exposure value (EV) units.
- [maxExposureTargetBias](maxexposuretargetbias.md): The maximum supported exposure bias, in exposure value (EV) units.
- [currentExposureTargetBias](currentexposuretargetbias.md): A special constant that represents the current exposure bias value.
- [setExposureTargetBias(\_:completionHandler:)](setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.

# exposureTargetOffset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

The metered exposure level’s offset from the target exposure value, in exposure value (EV) units.

## Declaration

```objectivec
@property (nonatomic, readonly) float exposureTargetOffset;
```

<a id="Discussion"></a>

## Discussion

The value of property indicates the difference between the metered exposure level of the current scene and the target exposure value.

This property is key-value observable.

## See Also

### Adjusting exposure compensation

- [exposureTargetBias](exposuretargetbias.md): The bias to apply to the target exposure value, in exposure value (EV) units.
- [minExposureTargetBias](minexposuretargetbias.md): The minimum supported exposure bias, in exposure value (EV) units.
- [maxExposureTargetBias](maxexposuretargetbias.md): The maximum supported exposure bias, in exposure value (EV) units.
- [AVCaptureExposureTargetBiasCurrent](currentexposuretargetbias.md): A special constant that represents the current exposure bias value.
- [setExposureTargetBias:completionHandler:](setexposuretargetbias%28__completionhandler_%29.md): Sets the bias to apply to the target exposure value.
