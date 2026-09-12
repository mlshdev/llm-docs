> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawdecoderversion](https://developer.apple.com/documentation/coreimage/cirawdecoderversion)

# CIRAWDecoderVersion (Swift)

**Framework:** Core Image  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct CIRAWDecoderVersion
```

## Topics

### Initializers

- [init(rawValue:)](cirawdecoderversion/init%28rawvalue_%29.md)

### Type Properties

- [none](cirawdecoderversion/none.md)
- [version6](cirawdecoderversion/version6.md)
- [version6DNG](cirawdecoderversion/version6dng.md)
- [version7](cirawdecoderversion/version7.md)
- [version7DNG](cirawdecoderversion/version7dng.md)
- [version8](cirawdecoderversion/version8.md)
- [version8DNG](cirawdecoderversion/version8dng.md)
- [version9](cirawdecoderversion/version9.md)
- [version9DNG](cirawdecoderversion/version9dng.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting supported camera models, decoders, and filters

- [supportedCameraModels](cirawfilter/supportedcameramodels.md): An array containing the names of all supported camera models.
- [supportedDecoderVersions](cirawfilter/supporteddecoderversions.md): An array of all supported decoder versions for the given image type.
- [isColorNoiseReductionSupported](cirawfilter/iscolornoisereductionsupported.md): A Boolean that indicates if the current image supports color noise reduction adjustments.
- [isContrastSupported](cirawfilter/iscontrastsupported.md): A Boolean that indicates if the current image supports contrast adjustments.
- [isDetailSupported](cirawfilter/isdetailsupported.md): A Boolean that indicates if the current image supports detail enhancement adjustments.
- [isLensCorrectionSupported](cirawfilter/islenscorrectionsupported.md): A Boolean that indicates if you can enable lens correction for the current image.
- [isLocalToneMapSupported](cirawfilter/islocaltonemapsupported.md): A Boolean that indicates if the current image supports local tone curve adjustments.
- [isLuminanceNoiseReductionSupported](cirawfilter/isluminancenoisereductionsupported.md): A Boolean that indicates if the current image supports luminance noise reduction adjustments.
- [isMoireReductionSupported](cirawfilter/ismoirereductionsupported.md): A Boolean that indicates if the current image supports moire artifact reduction adjustments.
- [isSharpnessSupported](cirawfilter/issharpnesssupported.md): A Boolean that indicates if the current image supports sharpness adjustments.
- [nativeSize](cirawfilter/nativesize.md): The full native size of the unscaled image.

# CIRAWDecoderVersion (Objective-C)

**Framework:** Core Image  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef NSString * CIRAWDecoderVersion;
```

## Topics

### Type Properties

- [CIRAWDecoderVersionNone](cirawdecoderversion/none.md)
- [CIRAWDecoderVersion6](cirawdecoderversion/version6.md)
- [CIRAWDecoderVersion6DNG](cirawdecoderversion/version6dng.md)
- [CIRAWDecoderVersion7](cirawdecoderversion/version7.md)
- [CIRAWDecoderVersion7DNG](cirawdecoderversion/version7dng.md)
- [CIRAWDecoderVersion8](cirawdecoderversion/version8.md)
- [CIRAWDecoderVersion8DNG](cirawdecoderversion/version8dng.md)

## See Also

### Inspecting supported camera models, decoders, and filters

- [supportedCameraModels](cirawfilter/supportedcameramodels.md): An array containing the names of all supported camera models.
- [supportedDecoderVersions](cirawfilter/supporteddecoderversions.md): An array of all supported decoder versions for the given image type.
- [colorNoiseReductionSupported](cirawfilter/iscolornoisereductionsupported.md): A Boolean that indicates if the current image supports color noise reduction adjustments.
- [contrastSupported](cirawfilter/iscontrastsupported.md): A Boolean that indicates if the current image supports contrast adjustments.
- [detailSupported](cirawfilter/isdetailsupported.md): A Boolean that indicates if the current image supports detail enhancement adjustments.
- [lensCorrectionSupported](cirawfilter/islenscorrectionsupported.md): A Boolean that indicates if you can enable lens correction for the current image.
- [localToneMapSupported](cirawfilter/islocaltonemapsupported.md): A Boolean that indicates if the current image supports local tone curve adjustments.
- [luminanceNoiseReductionSupported](cirawfilter/isluminancenoisereductionsupported.md): A Boolean that indicates if the current image supports luminance noise reduction adjustments.
- [moireReductionSupported](cirawfilter/ismoirereductionsupported.md): A Boolean that indicates if the current image supports moire artifact reduction adjustments.
- [sharpnessSupported](cirawfilter/issharpnesssupported.md): A Boolean that indicates if the current image supports sharpness adjustments.
- [nativeSize](cirawfilter/nativesize.md): The full native size of the unscaled image.
