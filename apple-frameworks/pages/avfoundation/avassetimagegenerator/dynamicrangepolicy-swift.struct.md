> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/dynamicrangepolicy-swift.struct](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/dynamicrangepolicy-swift.struct)

# AVAssetImageGenerator.DynamicRangePolicy (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A type that specifies the dynamic range policy to apply when generating images.

## Declaration

```swift
struct DynamicRangePolicy
```

## Topics

### Policies

- [forceSDR](dynamicrangepolicy-swift.struct/forcesdr.md): A policy that forces conversion to standard dynamic range.
- [matchSource](dynamicrangepolicy-swift.struct/matchsource.md): A policy that preserves the color parameters of the source media.

### Initializers

- [init(rawValue:)](dynamicrangepolicy-swift.struct/init%28rawvalue_%29.md)

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
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
- [AVAssetImageGenerator.ApertureMode](aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.

# AVAssetImageGeneratorDynamicRangePolicy (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A type that specifies the dynamic range policy to apply when generating images.

## Declaration

```objectivec
typedef NSString * AVAssetImageGeneratorDynamicRangePolicy;
```

## Topics

### Policies

- [AVAssetImageGeneratorDynamicRangePolicyForceSDR](dynamicrangepolicy-swift.struct/forcesdr.md): A policy that forces conversion to standard dynamic range.
- [AVAssetImageGeneratorDynamicRangePolicyMatchSource](dynamicrangepolicy-swift.struct/matchsource.md): A policy that preserves the color parameters of the source media.

## See Also

### Configuring image generation

- [maximumSize](maximumsize.md): The maximum size of images to generate.
- [requestedTimeToleranceBefore](requestedtimetolerancebefore.md): A maximum length of time before the requested time to allow image generation to occur.
- [requestedTimeToleranceAfter](requestedtimetoleranceafter.md): A maximum length of time after the requested time to allow image generation to occur.
- [dynamicRangePolicy](dynamicrangepolicy-swift.property.md): The dynamic range policy to use when generating images.
- [appliesPreferredTrackTransform](appliespreferredtracktransform.md): A Boolean value that specifies whether to apply the track matrix or matrices when generating an image from the asset.
- [apertureMode](aperturemode-swift.property.md): Specifies the aperture mode for the generated image.
- [AVAssetImageGeneratorApertureMode](aperturemode-swift.struct.md): Constants that define aperture modes to use when generating images.
