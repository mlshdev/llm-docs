> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/aperturemode-swift.property](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/aperturemode-swift.property)

# apertureMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Specifies the aperture mode for the generated image.

## Declaration

```swift
var apertureMode: AVAssetImageGenerator.ApertureMode? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [cleanAperture](aperturemode-swift.struct/cleanaperture.md).

## See Also

### Configuring image generation

- [maximumSize](maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [dynamicRangePolicy](dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [AVAssetImageGenerator.DynamicRangePolicy](dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [AVAssetImageGenerator.ApertureMode](aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.

# apertureMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Specifies the aperture mode for the generated image.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVAssetImageGeneratorApertureMode apertureMode;
```

<a id="Discussion"></a>

## Discussion

The default value is [AVAssetImageGeneratorApertureModeCleanAperture](aperturemode-swift.struct/cleanaperture.md).

## See Also

### Configuring image generation

- [maximumSize](maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [dynamicRangePolicy](dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [AVAssetImageGeneratorDynamicRangePolicy](dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [AVAssetImageGeneratorApertureMode](aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.
