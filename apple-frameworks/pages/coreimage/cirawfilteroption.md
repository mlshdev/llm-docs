> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilteroption](https://developer.apple.com/documentation/coreimage/cirawfilteroption)

# CIRAWFilterOption (Swift)

**Framework:** Core Image  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

> Use new CIRAWFilter class instead.

## Declaration

```swift
struct CIRAWFilterOption
```

## Topics

### Initializers

- [init(rawValue:)](cirawfilteroption/init%28rawvalue_%29.md): Deprecated.

### Type Properties

- [activeKeys](cirawfilteroption/activekeys.md): Deprecated. A key for the set of input keys available for use.
- [allowDraftMode](cirawfilteroption/allowdraftmode.md): Deprecated. A key for allowing draft mode.
- [baselineExposure](cirawfilteroption/baselineexposure.md): Deprecated. The amount of baseline exposure applied.
- [boostAmount](cirawfilteroption/boostamount.md): Deprecated. A key for the amount of boost to apply to an image.
- [boostShadowAmount](cirawfilteroption/boostshadowamount.md): Deprecated. A key for the amount to boost the shadow areas of the image.
- [ciInputEnableEDRModeKey](cirawfilteroption/ciinputenableedrmodekey.md): Deprecated.
- [ciInputLocalToneMapAmountKey](cirawfilteroption/ciinputlocaltonemapamountkey.md): Deprecated.
- [colorNoiseReductionAmount](cirawfilteroption/colornoisereductionamount.md): Deprecated. A key for the amount of noise reduction to apply to color data in the image.
- [decoderVersion](cirawfilteroption/decoderversion.md): Deprecated. A key for the version number of the method to be used for decoding. A newly initialized object defaults to the newest available decoder version for the given image type. You can request an alternative, older version to maintain compatibility with older releases. Must be one of the values listed for the [supportedDecoderVersions](cirawfilteroption/supporteddecoderversions.md) key, otherwise a `nil` output image is generated. The associated value must be an `NSNumber` object that specifies an integer value in range of `0` to the current decoder version. When you request a specific version of the decoder, Core Image produces an image that is *visually* the same across different versions of the operating system. Core Image, however, does not guarantee that the same bits are produced across different versions of the operating system. That’s because the rounding behavior of floating-point arithmetic can vary due to differences in compilers or hardware. Note that this option has no effect if the image used for initialization is not RAW.
- [disableGamutMap](cirawfilteroption/disablegamutmap.md): Deprecated. Whether or not to disable gamut mapping.
- [enableChromaticNoiseTracking](cirawfilteroption/enablechromaticnoisetracking.md): Deprecated. A key for progressive chromatic noise tracking (based on ISO and exposure time).
- [enableSharpening](cirawfilteroption/enablesharpening.md): Deprecated. A key for the sharpening state.
- [enableVendorLensCorrection](cirawfilteroption/enablevendorlenscorrection.md): Deprecated. A key for whether to automatically correct for image distortion from known lenses.
- [ignoreImageOrientation](cirawfilteroption/ignoreimageorientation.md): Deprecated. A key for specifying whether to ignore the image orientation
- [imageOrientation](cirawfilteroption/imageorientation.md): Deprecated. A key for the image orientation.
- [linearSpaceFilter](cirawfilteroption/linearspacefilter.md): Deprecated. A key for the filter to apply to the image while it is temporarily in a linear color space as part of RAW image processing. The associated value must be a [CIFilter](cifilter-swift.class.md) object.
- [luminanceNoiseReductionAmount](cirawfilteroption/luminancenoisereductionamount.md): Deprecated. A key for the amount of noise reduction to apply to luminance data in the image.
- [moireAmount](cirawfilteroption/moireamount.md): Deprecated. The amount of moiré reduction to apply.
- [neutralChromaticityX](cirawfilteroption/neutralchromaticityx.md): Deprecated. The x value of the chromaticity.
- [neutralChromaticityY](cirawfilteroption/neutralchromaticityy.md): Deprecated. The y value of the chromaticity.
- [neutralLocation](cirawfilteroption/neutrallocation.md): Deprecated. A key for the neutral position. Use this key to set the location in geometric coordinates of the unrotated output image that should be used as neutral. You cannot query this value; it is undefined for reading. The associated value is a two-element [CIVector](civector.md) object that specifies the location (`x`, `y`).
- [neutralTemperature](cirawfilteroption/neutraltemperature.md): Deprecated. A key for neutral temperature.
- [neutralTint](cirawfilteroption/neutraltint.md): Deprecated. A key for the neutral tint.
- [noiseReductionAmount](cirawfilteroption/noisereductionamount.md): Deprecated. A key for the amount to reduce noise in the image.
- [noiseReductionContrastAmount](cirawfilteroption/noisereductioncontrastamount.md): Deprecated. A key for the amount of contrast enhancement to apply during noise reduction.
- [noiseReductionDetailAmount](cirawfilteroption/noisereductiondetailamount.md): Deprecated. A key for the amount of detail enhancement to apply during noise reduction.
- [noiseReductionSharpnessAmount](cirawfilteroption/noisereductionsharpnessamount.md): Deprecated. A key for the amount of sharpness enhancement to apply during noise reduction.
- [outputNativeSize](cirawfilteroption/outputnativesize.md): Deprecated. A key for the full native size of the original, non-transformed RAW image. The associated value is a [CIVector](civector.md) object whose X and Y values are the image’s width and height. This key is read-only.
- [propertiesKey](cirawfilteroption/propertieskey.md): Deprecated.
- [scaleFactor](cirawfilteroption/scalefactor.md): Deprecated. A key for the scale factor.
- [supportedDecoderVersions](cirawfilteroption/supporteddecoderversions.md): Deprecated. A key for the supported decoder versions.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [init(CVPixelBuffer:properties:options:)](cifilter-swift.class/init%28cvpixelbuffer_properties_options_%29-7qpsv.md): Deprecated. Creates a filter from a Core Video pixel buffer.
- [init(imageData:options:)](cifilter-swift.class/init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [init(imageURL:options:)](cifilter-swift.class/init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [serializedXMP(from:inputImageExtent:)](cifilter-swift.class/serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [filterArray(fromSerializedXMP:inputImageExtent:error:)](cifilter-swift.class/filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels()](cifilter-swift.class/supportedrawcameramodels%28%29.md): Deprecated.

# CIRAWFilterOption (Objective-C)

**Framework:** Core Image  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

> Use new CIRAWFilter class instead.

## Declaration

```objectivec
typedef NSString * CIRAWFilterOption;
```

## Topics

### Type Properties

- [kCIActiveKeys](cirawfilteroption/activekeys.md): Deprecated. A key for the set of input keys available for use.
- [kCIInputAllowDraftModeKey](cirawfilteroption/allowdraftmode.md): Deprecated. A key for allowing draft mode.
- [kCIInputBaselineExposureKey](cirawfilteroption/baselineexposure.md): Deprecated. The amount of baseline exposure applied.
- [kCIInputBoostKey](cirawfilteroption/boostamount.md): Deprecated. A key for the amount of boost to apply to an image.
- [kCIInputBoostShadowAmountKey](cirawfilteroption/boostshadowamount.md): Deprecated. A key for the amount to boost the shadow areas of the image.
- [kCIInputEnableEDRModeKey](cirawfilteroption/ciinputenableedrmodekey.md): Deprecated.
- [kCIInputLocalToneMapAmountKey](cirawfilteroption/ciinputlocaltonemapamountkey.md): Deprecated.
- [kCIInputColorNoiseReductionAmountKey](cirawfilteroption/colornoisereductionamount.md): Deprecated. A key for the amount of noise reduction to apply to color data in the image.
- [kCIInputDecoderVersionKey](cirawfilteroption/decoderversion.md): Deprecated. A key for the version number of the method to be used for decoding. A newly initialized object defaults to the newest available decoder version for the given image type. You can request an alternative, older version to maintain compatibility with older releases. Must be one of the values listed for the [kCISupportedDecoderVersionsKey](cirawfilteroption/supporteddecoderversions.md) key, otherwise a `nil` output image is generated. The associated value must be an `NSNumber` object that specifies an integer value in range of `0` to the current decoder version. When you request a specific version of the decoder, Core Image produces an image that is *visually* the same across different versions of the operating system. Core Image, however, does not guarantee that the same bits are produced across different versions of the operating system. That’s because the rounding behavior of floating-point arithmetic can vary due to differences in compilers or hardware. Note that this option has no effect if the image used for initialization is not RAW.
- [kCIInputDisableGamutMapKey](cirawfilteroption/disablegamutmap.md): Deprecated. Whether or not to disable gamut mapping.
- [kCIInputEnableChromaticNoiseTrackingKey](cirawfilteroption/enablechromaticnoisetracking.md): Deprecated. A key for progressive chromatic noise tracking (based on ISO and exposure time).
- [kCIInputEnableSharpeningKey](cirawfilteroption/enablesharpening.md): Deprecated. A key for the sharpening state.
- [kCIInputEnableVendorLensCorrectionKey](cirawfilteroption/enablevendorlenscorrection.md): Deprecated. A key for whether to automatically correct for image distortion from known lenses.
- [kCIInputIgnoreImageOrientationKey](cirawfilteroption/ignoreimageorientation.md): Deprecated. A key for specifying whether to ignore the image orientation
- [kCIInputImageOrientationKey](cirawfilteroption/imageorientation.md): Deprecated. A key for the image orientation.
- [kCIInputLinearSpaceFilter](cirawfilteroption/linearspacefilter.md): Deprecated. A key for the filter to apply to the image while it is temporarily in a linear color space as part of RAW image processing. The associated value must be a [CIFilter](cifilter-swift.class.md) object.
- [kCIInputLuminanceNoiseReductionAmountKey](cirawfilteroption/luminancenoisereductionamount.md): Deprecated. A key for the amount of noise reduction to apply to luminance data in the image.
- [kCIInputMoireAmountKey](cirawfilteroption/moireamount.md): Deprecated. The amount of moiré reduction to apply.
- [kCIInputNeutralChromaticityXKey](cirawfilteroption/neutralchromaticityx.md): Deprecated. The x value of the chromaticity.
- [kCIInputNeutralChromaticityYKey](cirawfilteroption/neutralchromaticityy.md): Deprecated. The y value of the chromaticity.
- [kCIInputNeutralLocationKey](cirawfilteroption/neutrallocation.md): Deprecated. A key for the neutral position. Use this key to set the location in geometric coordinates of the unrotated output image that should be used as neutral. You cannot query this value; it is undefined for reading. The associated value is a two-element [CIVector](civector.md) object that specifies the location (`x`, `y`).
- [kCIInputNeutralTemperatureKey](cirawfilteroption/neutraltemperature.md): Deprecated. A key for neutral temperature.
- [kCIInputNeutralTintKey](cirawfilteroption/neutraltint.md): Deprecated. A key for the neutral tint.
- [kCIInputNoiseReductionAmountKey](cirawfilteroption/noisereductionamount.md): Deprecated. A key for the amount to reduce noise in the image.
- [kCIInputNoiseReductionContrastAmountKey](cirawfilteroption/noisereductioncontrastamount.md): Deprecated. A key for the amount of contrast enhancement to apply during noise reduction.
- [kCIInputNoiseReductionDetailAmountKey](cirawfilteroption/noisereductiondetailamount.md): Deprecated. A key for the amount of detail enhancement to apply during noise reduction.
- [kCIInputNoiseReductionSharpnessAmountKey](cirawfilteroption/noisereductionsharpnessamount.md): Deprecated. A key for the amount of sharpness enhancement to apply during noise reduction.
- [kCIOutputNativeSizeKey](cirawfilteroption/outputnativesize.md): Deprecated. A key for the full native size of the original, non-transformed RAW image. The associated value is a [CIVector](civector.md) object whose X and Y values are the image’s width and height. This key is read-only.
- [kCIPropertiesKey](cirawfilteroption/propertieskey.md): Deprecated.
- [kCIInputScaleFactorKey](cirawfilteroption/scalefactor.md): Deprecated. A key for the scale factor.
- [kCISupportedDecoderVersionsKey](cirawfilteroption/supporteddecoderversions.md): Deprecated. A key for the supported decoder versions.

## See Also

### Deprecated

- [filterWithImageData:options:](cifilter-swift.class/init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [filterWithImageURL:options:](cifilter-swift.class/init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [serializedXMPFromFilters:inputImageExtent:](cifilter-swift.class/serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [filterArrayFromSerializedXMP:inputImageExtent:error:](cifilter-swift.class/filterarray%28fromserializedxmp_inputimageextent_error_%29.md): Deprecated. Returns an array of filter objects de-serialized from XMP data.
- [supportedRawCameraModels](cifilter-swift.class/supportedrawcameramodels%28%29.md): Deprecated.
