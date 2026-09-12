> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilter/supportedcameramodels](https://developer.apple.com/documentation/coreimage/cirawfilter/supportedcameramodels)

# supportedCameraModels (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An array containing the names of all supported camera models.

## Declaration

```swift
class var supportedCameraModels: [String] { get }
```

## See Also

### Inspecting supported camera models, decoders, and filters

- [supportedDecoderVersions](supporteddecoderversions.md): An array of all supported decoder versions for the given image type.
- [CIRAWDecoderVersion](../cirawdecoderversion.md)
- [isColorNoiseReductionSupported](iscolornoisereductionsupported.md): A Boolean that indicates if the current image supports color noise reduction adjustments.
- [isContrastSupported](iscontrastsupported.md): A Boolean that indicates if the current image supports contrast adjustments.
- [isDetailSupported](isdetailsupported.md): A Boolean that indicates if the current image supports detail enhancement adjustments.
- [isLensCorrectionSupported](islenscorrectionsupported.md): A Boolean that indicates if you can enable lens correction for the current image.
- [isLocalToneMapSupported](islocaltonemapsupported.md): A Boolean that indicates if the current image supports local tone curve adjustments.
- [isLuminanceNoiseReductionSupported](isluminancenoisereductionsupported.md): A Boolean that indicates if the current image supports luminance noise reduction adjustments.
- [isMoireReductionSupported](ismoirereductionsupported.md): A Boolean that indicates if the current image supports moire artifact reduction adjustments.
- [isSharpnessSupported](issharpnesssupported.md): A Boolean that indicates if the current image supports sharpness adjustments.
- [nativeSize](nativesize.md): The full native size of the unscaled image.

# supportedCameraModels (Objective-C)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An array containing the names of all supported camera models.

## Declaration

```objectivec
@property (class, readonly) NSArray<NSString *> * supportedCameraModels;
```

## See Also

### Inspecting supported camera models, decoders, and filters

- [supportedDecoderVersions](supporteddecoderversions.md): An array of all supported decoder versions for the given image type.
- [CIRAWDecoderVersion](../cirawdecoderversion.md)
- [colorNoiseReductionSupported](iscolornoisereductionsupported.md): A Boolean that indicates if the current image supports color noise reduction adjustments.
- [contrastSupported](iscontrastsupported.md): A Boolean that indicates if the current image supports contrast adjustments.
- [detailSupported](isdetailsupported.md): A Boolean that indicates if the current image supports detail enhancement adjustments.
- [lensCorrectionSupported](islenscorrectionsupported.md): A Boolean that indicates if you can enable lens correction for the current image.
- [localToneMapSupported](islocaltonemapsupported.md): A Boolean that indicates if the current image supports local tone curve adjustments.
- [luminanceNoiseReductionSupported](isluminancenoisereductionsupported.md): A Boolean that indicates if the current image supports luminance noise reduction adjustments.
- [moireReductionSupported](ismoirereductionsupported.md): A Boolean that indicates if the current image supports moire artifact reduction adjustments.
- [sharpnessSupported](issharpnesssupported.md): A Boolean that indicates if the current image supports sharpness adjustments.
- [nativeSize](nativesize.md): The full native size of the unscaled image.
