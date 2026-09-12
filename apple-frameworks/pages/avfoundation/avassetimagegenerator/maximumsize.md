> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/maximumsize](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/maximumsize)

# maximumSize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The maximum size of images to generate.

## Declaration

```swift
var maximumSize: CGSize { get set }
```

## Mentioned In

- [Creating images from a video asset](../creating-images-from-a-video-asset.md)

<a id="Discussion"></a>

## Discussion

The default value is [zero](../../corefoundation/cgsize/zero.md), which generates images at the asset’s unscaled dimensions.

Setting a size scales images to fit their defined bounding boxes. You define the aspect ratio of the scaled image by setting a value for the [apertureMode](aperturemode-swift.property.md) property.

## See Also

### Configuring image generation

- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [dynamicRangePolicy](dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [AVAssetImageGenerator.DynamicRangePolicy](dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
- [AVAssetImageGenerator.ApertureMode](aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.

# maximumSize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The maximum size of images to generate.

## Declaration

```objectivec
@property (nonatomic) CGSize maximumSize;
```

## Mentioned In

- [Creating images from a video asset](../creating-images-from-a-video-asset.md)

<a id="Discussion"></a>

## Discussion

The default value is [zero](../../corefoundation/cgsize/zero.md), which generates images at the asset’s unscaled dimensions.

Setting a size scales images to fit their defined bounding boxes. You define the aspect ratio of the scaled image by setting a value for the [apertureMode](aperturemode-swift.property.md) property.

## See Also

### Configuring image generation

- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [dynamicRangePolicy](dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [AVAssetImageGeneratorDynamicRangePolicy](dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
- [AVAssetImageGeneratorApertureMode](aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.
