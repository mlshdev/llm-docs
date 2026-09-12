> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilter/decoderversion](https://developer.apple.com/documentation/coreimage/cirawfilter/decoderversion)

# decoderVersion (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A value that indicates the decoder version to use.

## Declaration

```swift
var decoderVersion: CIRAWDecoderVersion { get set }
```

<a id="Discussion"></a>

## Discussion

The value should be in the range of `0` to the current decoder version.

A newly initialized object defaults to the newest available decoder version for the given image type. You can request an older version to maintain compatibility with older releases. However, the version you request needs to be a member of [supportedDecoderVersions](supporteddecoderversions.md), otherwise the system generates a `nil` output image.

When you request a specific version of the decoder, Core Image produces an image that looks the same across different versions. However, Core Image doesn’t guarantee that the bits are the same across versions, because the rounding behavior of floating-point arithmetic varies due to differences in compilers or hardware.

## See Also

### Configuring a filter

- [baselineExposure](baselineexposure.md): A value that indicates the baseline exposure to apply to the image.
- [boostAmount](boostamount.md): A value that indicates the amount of global tone curve to apply to the image.
- [boostShadowAmount](boostshadowamount.md): A value that indicates the amount to boost the shadow areas of the image.
- [colorNoiseReductionAmount](colornoisereductionamount.md): A value that indicates the amount of chroma noise reduction to apply to the image.
- [contrastAmount](contrastamount.md): A value that indicates the amount of local contrast to apply to the edges of the image.
- [detailAmount](detailamount.md): A value that indicates the amount of detail enhancement to apply to the edges of the image.
- [exposure](exposure.md): A value that indicates the amount of exposure to apply to the image.
- [extendedDynamicRangeAmount](extendeddynamicrangeamount.md): A value that indicates the amount of extended dynamic range (EDR) to apply to the image.
- [isDraftModeEnabled](isdraftmodeenabled.md): A Boolean that indicates whether to enable draft mode.
- [isGamutMappingEnabled](isgamutmappingenabled.md): A Boolean that indicates whether to enable gamut mapping.
- [isLensCorrectionEnabled](islenscorrectionenabled.md): A Boolean that indicates whether to enable lens correction.
- [linearSpaceFilter](linearspacefilter.md): An optional filter you can apply to the RAW image while it’s in linear space.
- [localToneMapAmount](localtonemapamount.md): A value that indicates the amount of local tone curve to apply to the image.
- [luminanceNoiseReductionAmount](luminancenoisereductionamount.md): A value that indicates the amount of luminance noise reduction to apply to the image.
- [moireReductionAmount](moirereductionamount.md): A value that indicates the amount of moire artifact reduction to apply to high frequency areas of the image.

# decoderVersion (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A value that indicates the decoder version to use.

## Declaration

```objectivec
@property (retain, readwrite) CIRAWDecoderVersion decoderVersion;
```

<a id="Discussion"></a>

## Discussion

The value should be in the range of `0` to the current decoder version.

A newly initialized object defaults to the newest available decoder version for the given image type. You can request an older version to maintain compatibility with older releases. However, the version you request needs to be a member of [supportedDecoderVersions](supporteddecoderversions.md), otherwise the system generates a `nil` output image.

When you request a specific version of the decoder, Core Image produces an image that looks the same across different versions. However, Core Image doesn’t guarantee that the bits are the same across versions, because the rounding behavior of floating-point arithmetic varies due to differences in compilers or hardware.

## See Also

### Configuring a filter

- [baselineExposure](baselineexposure.md): A value that indicates the baseline exposure to apply to the image.
- [boostAmount](boostamount.md): A value that indicates the amount of global tone curve to apply to the image.
- [boostShadowAmount](boostshadowamount.md): A value that indicates the amount to boost the shadow areas of the image.
- [colorNoiseReductionAmount](colornoisereductionamount.md): A value that indicates the amount of chroma noise reduction to apply to the image.
- [contrastAmount](contrastamount.md): A value that indicates the amount of local contrast to apply to the edges of the image.
- [detailAmount](detailamount.md): A value that indicates the amount of detail enhancement to apply to the edges of the image.
- [exposure](exposure.md): A value that indicates the amount of exposure to apply to the image.
- [extendedDynamicRangeAmount](extendeddynamicrangeamount.md): A value that indicates the amount of extended dynamic range (EDR) to apply to the image.
- [draftModeEnabled](isdraftmodeenabled.md): A Boolean that indicates whether to enable draft mode.
- [gamutMappingEnabled](isgamutmappingenabled.md): A Boolean that indicates whether to enable gamut mapping.
- [lensCorrectionEnabled](islenscorrectionenabled.md): A Boolean that indicates whether to enable lens correction.
- [linearSpaceFilter](linearspacefilter.md): An optional filter you can apply to the RAW image while it’s in linear space.
- [localToneMapAmount](localtonemapamount.md): A value that indicates the amount of local tone curve to apply to the image.
- [luminanceNoiseReductionAmount](luminancenoisereductionamount.md): A value that indicates the amount of luminance noise reduction to apply to the image.
- [moireReductionAmount](moirereductionamount.md): A value that indicates the amount of moire artifact reduction to apply to high frequency areas of the image.
