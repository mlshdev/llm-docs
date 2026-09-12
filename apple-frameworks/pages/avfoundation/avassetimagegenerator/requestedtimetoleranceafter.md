> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/requestedtimetoleranceafter](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/requestedtimetoleranceafter)

# requestedTimeToleranceAfter (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A maximum length of time after the requested time to allow image generation to occur.

## Declaration

```swift
var requestedTimeToleranceAfter: CMTime { get set }
```

## Mentioned In

- [Creating images from a video asset](../creating-images-from-a-video-asset.md)

<a id="Discussion"></a>

## Discussion

The default value is [positiveInfinity](../../coremedia/cmtime/positiveinfinity.md). Set the values of [requestedTimeToleranceBefore](requestedtimetolerancebefore.md) and [requestedTimeToleranceAfter](requestedtimetoleranceafter.md) to [zero](../../coremedia/cmtime/zero.md) to request frame-accurate image generation; this may incur additional decoding delay.

## See Also

### Configuring image generation

- [maximumSize](maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [dynamicRangePolicy](dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [AVAssetImageGenerator.DynamicRangePolicy](dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
- [AVAssetImageGenerator.ApertureMode](aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.

# requestedTimeToleranceAfter (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A maximum length of time after the requested time to allow image generation to occur.

## Declaration

```objectivec
@property (nonatomic) CMTime requestedTimeToleranceAfter;
```

## Mentioned In

- [Creating images from a video asset](../creating-images-from-a-video-asset.md)

<a id="Discussion"></a>

## Discussion

The default value is [kCMTimePositiveInfinity](../../coremedia/cmtime/positiveinfinity.md). Set the values of [requestedTimeToleranceBefore](requestedtimetolerancebefore.md) and [requestedTimeToleranceAfter](requestedtimetoleranceafter.md) to [kCMTimeZero](../../coremedia/cmtime/zero.md) to request frame-accurate image generation; this may incur additional decoding delay.

## See Also

### Configuring image generation

- [maximumSize](maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [dynamicRangePolicy](dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [AVAssetImageGeneratorDynamicRangePolicy](dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
- [AVAssetImageGeneratorApertureMode](aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.
