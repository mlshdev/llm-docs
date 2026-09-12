> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/aperturemode-swift.struct](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/aperturemode-swift.struct)

# AVAssetImageGenerator.ApertureMode (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Constants that define aperture modes to use when generating images.

## Declaration

```swift
struct ApertureMode
```

## Topics

### Aperture modes

- [cleanAperture](aperturemode-swift.struct/cleanaperture.md): A mode that applies both pixel aspect ratio and clean aperture.
- [encodedPixels](aperturemode-swift.struct/encodedpixels.md): A mode that applies neither pixel aspect ratio nor clean aperture.
- [productionAperture](aperturemode-swift.struct/productionaperture.md): A mode that applies only pixel aspect ratio.

### Initializers

- [init(rawValue:)](aperturemode-swift.struct/init%28rawvalue_%29.md): Creates an aperture mode with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring image generation

- [maximumSize](maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [dynamicRangePolicy](dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [AVAssetImageGenerator.DynamicRangePolicy](dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](aperturemode-swift.property.md): Specifies the aperture mode for the generated image.

# AVAssetImageGeneratorApertureMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Constants that define aperture modes to use when generating images.

## Declaration

```objectivec
typedef NSString * AVAssetImageGeneratorApertureMode;
```

## Topics

### Aperture modes

- [AVAssetImageGeneratorApertureModeCleanAperture](aperturemode-swift.struct/cleanaperture.md): A mode that applies both pixel aspect ratio and clean aperture.
- [AVAssetImageGeneratorApertureModeEncodedPixels](aperturemode-swift.struct/encodedpixels.md): A mode that applies neither pixel aspect ratio nor clean aperture.
- [AVAssetImageGeneratorApertureModeProductionAperture](aperturemode-swift.struct/productionaperture.md): A mode that applies only pixel aspect ratio.

## See Also

### Configuring image generation

- [maximumSize](maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [dynamicRangePolicy](dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [AVAssetImageGeneratorDynamicRangePolicy](dynamicrangepolicy-swift.struct.md): A type that specifies the dynamic range policy to apply when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
