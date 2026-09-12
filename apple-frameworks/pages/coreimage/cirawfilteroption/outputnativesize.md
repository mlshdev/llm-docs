> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilteroption/outputnativesize](https://developer.apple.com/documentation/coreimage/cirawfilteroption/outputnativesize)

# outputNativeSize (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key for the full native size of the original, non-transformed RAW image. The associated value is a [CIVector](../civector.md) object whose X and Y values are the image’s width and height. This key is read-only.

> Use new CIRAWFilter class instead.

## Declaration

```swift
static let outputNativeSize: CIRAWFilterOption
```

## See Also

### Type Properties

- [activeKeys](activekeys.md): Deprecated. A key for the set of input keys available for use.
- [allowDraftMode](allowdraftmode.md): Deprecated. A key for allowing draft mode.
- [baselineExposure](baselineexposure.md): Deprecated. The amount of baseline exposure applied.
- [boostAmount](boostamount.md): Deprecated. A key for the amount of boost to apply to an image.
- [boostShadowAmount](boostshadowamount.md): Deprecated. A key for the amount to boost the shadow areas of the image.
- [ciInputEnableEDRModeKey](ciinputenableedrmodekey.md): Deprecated.
- [ciInputLocalToneMapAmountKey](ciinputlocaltonemapamountkey.md): Deprecated.
- [colorNoiseReductionAmount](colornoisereductionamount.md): Deprecated. A key for the amount of noise reduction to apply to color data in the image.
- [decoderVersion](decoderversion.md): Deprecated. A key for the version number of the method to be used for decoding. A newly initialized object defaults to the newest available decoder version for the given image type. You can request an alternative, older version to maintain compatibility with older releases. Must be one of the values listed for the [supportedDecoderVersions](supporteddecoderversions.md) key, otherwise a `nil` output image is generated. The associated value must be an `NSNumber` object that specifies an integer value in range of `0` to the current decoder version. When you request a specific version of the decoder, Core Image produces an image that is *visually* the same across different versions of the operating system. Core Image, however, does not guarantee that the same bits are produced across different versions of the operating system. That’s because the rounding behavior of floating-point arithmetic can vary due to differences in compilers or hardware. Note that this option has no effect if the image used for initialization is not RAW.
- [disableGamutMap](disablegamutmap.md): Deprecated. Whether or not to disable gamut mapping.
- [enableChromaticNoiseTracking](enablechromaticnoisetracking.md): Deprecated. A key for progressive chromatic noise tracking (based on ISO and exposure time).
- [enableSharpening](enablesharpening.md): Deprecated. A key for the sharpening state.
- [enableVendorLensCorrection](enablevendorlenscorrection.md): Deprecated. A key for whether to automatically correct for image distortion from known lenses.
- [ignoreImageOrientation](ignoreimageorientation.md): Deprecated. A key for specifying whether to ignore the image orientation
- [imageOrientation](imageorientation.md): Deprecated. A key for the image orientation.

# kCIOutputNativeSizeKey (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A key for the full native size of the original, non-transformed RAW image. The associated value is a [CIVector](../civector.md) object whose X and Y values are the image’s width and height. This key is read-only.

> Use new CIRAWFilter class instead.

## Declaration

```objectivec
extern CIRAWFilterOption const kCIOutputNativeSizeKey;
```

## See Also

### Type Properties

- [kCIActiveKeys](activekeys.md): Deprecated. A key for the set of input keys available for use.
- [kCIInputAllowDraftModeKey](allowdraftmode.md): Deprecated. A key for allowing draft mode.
- [kCIInputBaselineExposureKey](baselineexposure.md): Deprecated. The amount of baseline exposure applied.
- [kCIInputBoostKey](boostamount.md): Deprecated. A key for the amount of boost to apply to an image.
- [kCIInputBoostShadowAmountKey](boostshadowamount.md): Deprecated. A key for the amount to boost the shadow areas of the image.
- [kCIInputEnableEDRModeKey](ciinputenableedrmodekey.md): Deprecated.
- [kCIInputLocalToneMapAmountKey](ciinputlocaltonemapamountkey.md): Deprecated.
- [kCIInputColorNoiseReductionAmountKey](colornoisereductionamount.md): Deprecated. A key for the amount of noise reduction to apply to color data in the image.
- [kCIInputDecoderVersionKey](decoderversion.md): Deprecated. A key for the version number of the method to be used for decoding. A newly initialized object defaults to the newest available decoder version for the given image type. You can request an alternative, older version to maintain compatibility with older releases. Must be one of the values listed for the [kCISupportedDecoderVersionsKey](supporteddecoderversions.md) key, otherwise a `nil` output image is generated. The associated value must be an `NSNumber` object that specifies an integer value in range of `0` to the current decoder version. When you request a specific version of the decoder, Core Image produces an image that is *visually* the same across different versions of the operating system. Core Image, however, does not guarantee that the same bits are produced across different versions of the operating system. That’s because the rounding behavior of floating-point arithmetic can vary due to differences in compilers or hardware. Note that this option has no effect if the image used for initialization is not RAW.
- [kCIInputDisableGamutMapKey](disablegamutmap.md): Deprecated. Whether or not to disable gamut mapping.
- [kCIInputEnableChromaticNoiseTrackingKey](enablechromaticnoisetracking.md): Deprecated. A key for progressive chromatic noise tracking (based on ISO and exposure time).
- [kCIInputEnableSharpeningKey](enablesharpening.md): Deprecated. A key for the sharpening state.
- [kCIInputEnableVendorLensCorrectionKey](enablevendorlenscorrection.md): Deprecated. A key for whether to automatically correct for image distortion from known lenses.
- [kCIInputIgnoreImageOrientationKey](ignoreimageorientation.md): Deprecated. A key for specifying whether to ignore the image orientation
- [kCIInputImageOrientationKey](imageorientation.md): Deprecated. A key for the image orientation.
