> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilter/baselineexposure](https://developer.apple.com/documentation/coreimage/cirawfilter/baselineexposure)

# baselineExposure (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A value that indicates the baseline exposure to apply to the image.

## Declaration

```swift
var baselineExposure: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The default value varies with camera settings. A value of `0` indicates linear response.

## See Also

### Configuring a filter

- [boostAmount](boostamount.md): A value that indicates the amount of global tone curve to apply to the image.
- [boostShadowAmount](boostshadowamount.md): A value that indicates the amount to boost the shadow areas of the image.
- [colorNoiseReductionAmount](colornoisereductionamount.md): A value that indicates the amount of chroma noise reduction to apply to the image.
- [contrastAmount](contrastamount.md): A value that indicates the amount of local contrast to apply to the edges of the image.
- [decoderVersion](decoderversion.md): A value that indicates the decoder version to use.
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

# baselineExposure (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A value that indicates the baseline exposure to apply to the image.

## Declaration

```objectivec
@property (readwrite) float baselineExposure;
```

<a id="Discussion"></a>

## Discussion

The default value varies with camera settings. A value of `0` indicates linear response.

## See Also

### Configuring a filter

- [boostAmount](boostamount.md): A value that indicates the amount of global tone curve to apply to the image.
- [boostShadowAmount](boostshadowamount.md): A value that indicates the amount to boost the shadow areas of the image.
- [colorNoiseReductionAmount](colornoisereductionamount.md): A value that indicates the amount of chroma noise reduction to apply to the image.
- [contrastAmount](contrastamount.md): A value that indicates the amount of local contrast to apply to the edges of the image.
- [decoderVersion](decoderversion.md): A value that indicates the decoder version to use.
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
