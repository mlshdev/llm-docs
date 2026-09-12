> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/dynamicrangepolicy-swift.property](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/dynamicrangepolicy-swift.property)

# dynamicRangePolicy (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The dynamic range policy to use when generating images.

## Declaration

```swift
var dynamicRangePolicy: AVAssetImageGenerator.DynamicRangePolicy { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to [forceSDR](dynamicrangepolicy-swift.struct/forcesdr.md).

## See Also

### Configuring image generation

- [maximumSize](maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [AVAssetImageGenerator.DynamicRangePolicy](dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
- [AVAssetImageGenerator.ApertureMode](aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.

# dynamicRangePolicy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The dynamic range policy to use when generating images.

## Declaration

```objectivec
@property (nonatomic, copy) AVAssetImageGeneratorDynamicRangePolicy dynamicRangePolicy;
```

<a id="Discussion"></a>

## Discussion

This property defaults to [AVAssetImageGeneratorDynamicRangePolicyForceSDR](dynamicrangepolicy-swift.struct/forcesdr.md).

## See Also

### Configuring image generation

- [maximumSize](maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [AVAssetImageGeneratorDynamicRangePolicy](dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
- [AVAssetImageGeneratorApertureMode](aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.
