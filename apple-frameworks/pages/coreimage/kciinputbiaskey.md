> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/kciinputbiaskey](https://developer.apple.com/documentation/coreimage/kciinputbiaskey)

# kCIInputBiasKey (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Simple bias value.

## Declaration

```swift
let kCIInputBiasKey: String
```

<a id="discussion"></a>

## Discussion

A key for the simple bias value to use along with the exposure adjustment ([kCIInputEVKey](kciinputevkey.md)). The associated value must be an [NSNumber](../foundation/nsnumber.md) object that specifies floating-point value. The value has no effect if the image used for initialization is not RAW.

## See Also

### Constants

- [decoderVersion](cirawfilteroption/decoderversion.md): Deprecated. A key for the version number of the method to be used for decoding. A newly initialized object defaults to the newest available decoder version for the given image type. You can request an alternative, older version to maintain compatibility with older releases. Must be one of the values listed for the [supportedDecoderVersions](cirawfilteroption/supporteddecoderversions.md) key, otherwise a `nil` output image is generated. The associated value must be an `NSNumber` object that specifies an integer value in range of `0` to the current decoder version. When you request a specific version of the decoder, Core Image produces an image that is *visually* the same across different versions of the operating system. Core Image, however, does not guarantee that the same bits are produced across different versions of the operating system. That’s because the rounding behavior of floating-point arithmetic can vary due to differences in compilers or hardware. Note that this option has no effect if the image used for initialization is not RAW.
- [supportedDecoderVersions](cirawfilteroption/supporteddecoderversions.md): Deprecated. A key for the supported decoder versions.
- [boostAmount](cirawfilteroption/boostamount.md): Deprecated. A key for the amount of boost to apply to an image.
- [neutralChromaticityX](cirawfilteroption/neutralchromaticityx.md): Deprecated. The x value of the chromaticity.
- [neutralChromaticityY](cirawfilteroption/neutralchromaticityy.md): Deprecated. The y value of the chromaticity.
- [neutralTemperature](cirawfilteroption/neutraltemperature.md): Deprecated. A key for neutral temperature.
- [neutralTint](cirawfilteroption/neutraltint.md): Deprecated. A key for the neutral tint.
- [neutralLocation](cirawfilteroption/neutrallocation.md): Deprecated. A key for the neutral position. Use this key to set the location in geometric coordinates of the unrotated output image that should be used as neutral. You cannot query this value; it is undefined for reading. The associated value is a two-element [CIVector](civector.md) object that specifies the location (`x`, `y`).
- [scaleFactor](cirawfilteroption/scalefactor.md): Deprecated. A key for the scale factor.
- [allowDraftMode](cirawfilteroption/allowdraftmode.md): Deprecated. A key for allowing draft mode.
- [ignoreImageOrientation](cirawfilteroption/ignoreimageorientation.md): Deprecated. A key for specifying whether to ignore the image orientation
- [imageOrientation](cirawfilteroption/imageorientation.md): Deprecated. A key for the image orientation.
- [enableSharpening](cirawfilteroption/enablesharpening.md): Deprecated. A key for the sharpening state.
- [enableChromaticNoiseTracking](cirawfilteroption/enablechromaticnoisetracking.md): Deprecated. A key for progressive chromatic noise tracking (based on ISO and exposure time).
- [noiseReductionAmount](cirawfilteroption/noisereductionamount.md): Deprecated. A key for the amount to reduce noise in the image.

# kCIInputBiasKey (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Simple bias value.

## Declaration

```objectivec
extern NSString * const kCIInputBiasKey;
```

<a id="discussion"></a>

## Discussion

A key for the simple bias value to use along with the exposure adjustment ([kCIInputEVKey](kciinputevkey.md)). The associated value must be an [NSNumber](../foundation/nsnumber.md) object that specifies floating-point value. The value has no effect if the image used for initialization is not RAW.

## See Also

### Constants

- [kCIInputDecoderVersionKey](cirawfilteroption/decoderversion.md): Deprecated. A key for the version number of the method to be used for decoding. A newly initialized object defaults to the newest available decoder version for the given image type. You can request an alternative, older version to maintain compatibility with older releases. Must be one of the values listed for the [kCISupportedDecoderVersionsKey](cirawfilteroption/supporteddecoderversions.md) key, otherwise a `nil` output image is generated. The associated value must be an `NSNumber` object that specifies an integer value in range of `0` to the current decoder version. When you request a specific version of the decoder, Core Image produces an image that is *visually* the same across different versions of the operating system. Core Image, however, does not guarantee that the same bits are produced across different versions of the operating system. That’s because the rounding behavior of floating-point arithmetic can vary due to differences in compilers or hardware. Note that this option has no effect if the image used for initialization is not RAW.
- [kCISupportedDecoderVersionsKey](cirawfilteroption/supporteddecoderversions.md): Deprecated. A key for the supported decoder versions.
- [kCIInputBoostKey](cirawfilteroption/boostamount.md): Deprecated. A key for the amount of boost to apply to an image.
- [kCIInputNeutralChromaticityXKey](cirawfilteroption/neutralchromaticityx.md): Deprecated. The x value of the chromaticity.
- [kCIInputNeutralChromaticityYKey](cirawfilteroption/neutralchromaticityy.md): Deprecated. The y value of the chromaticity.
- [kCIInputNeutralTemperatureKey](cirawfilteroption/neutraltemperature.md): Deprecated. A key for neutral temperature.
- [kCIInputNeutralTintKey](cirawfilteroption/neutraltint.md): Deprecated. A key for the neutral tint.
- [kCIInputNeutralLocationKey](cirawfilteroption/neutrallocation.md): Deprecated. A key for the neutral position. Use this key to set the location in geometric coordinates of the unrotated output image that should be used as neutral. You cannot query this value; it is undefined for reading. The associated value is a two-element [CIVector](civector.md) object that specifies the location (`x`, `y`).
- [kCIInputScaleFactorKey](cirawfilteroption/scalefactor.md): Deprecated. A key for the scale factor.
- [kCIInputAllowDraftModeKey](cirawfilteroption/allowdraftmode.md): Deprecated. A key for allowing draft mode.
- [kCIInputIgnoreImageOrientationKey](cirawfilteroption/ignoreimageorientation.md): Deprecated. A key for specifying whether to ignore the image orientation
- [kCIInputImageOrientationKey](cirawfilteroption/imageorientation.md): Deprecated. A key for the image orientation.
- [kCIInputEnableSharpeningKey](cirawfilteroption/enablesharpening.md): Deprecated. A key for the sharpening state.
- [kCIInputEnableChromaticNoiseTrackingKey](cirawfilteroption/enablechromaticnoisetracking.md): Deprecated. A key for progressive chromatic noise tracking (based on ISO and exposure time).
- [kCIInputNoiseReductionAmountKey](cirawfilteroption/noisereductionamount.md): Deprecated. A key for the amount to reduce noise in the image.
