> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilter/islenscorrectionenabled](https://developer.apple.com/documentation/coreimage/cirawfilter/islenscorrectionenabled)

# isLensCorrectionEnabled (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean that indicates whether to enable lens correction.

## Declaration

```swift
var isLensCorrectionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value varies by image.

> **Note**

>  The [isLensCorrectionSupported](islenscorrectionsupported.md) property is `false` if the current image doesn’t support this adjustment.

## See Also

### Configuring a filter

- [baselineExposure](baselineexposure.md): A value that indicates the baseline exposure to apply to the image.
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
- [linearSpaceFilter](linearspacefilter.md): An optional filter you can apply to the RAW image while it’s in linear space.
- [localToneMapAmount](localtonemapamount.md): A value that indicates the amount of local tone curve to apply to the image.
- [luminanceNoiseReductionAmount](luminancenoisereductionamount.md): A value that indicates the amount of luminance noise reduction to apply to the image.
- [moireReductionAmount](moirereductionamount.md): A value that indicates the amount of moire artifact reduction to apply to high frequency areas of the image.

# lensCorrectionEnabled (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean that indicates whether to enable lens correction.

## Declaration

```objectivec
@property (readwrite, getter=isLensCorrectionEnabled) BOOL lensCorrectionEnabled;
```

<a id="Discussion"></a>

## Discussion

The default value varies by image.

> **Note**

>  The [lensCorrectionSupported](islenscorrectionsupported.md) property is `false` if the current image doesn’t support this adjustment.

## See Also

### Configuring a filter

- [baselineExposure](baselineexposure.md): A value that indicates the baseline exposure to apply to the image.
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
- [linearSpaceFilter](linearspacefilter.md): An optional filter you can apply to the RAW image while it’s in linear space.
- [localToneMapAmount](localtonemapamount.md): A value that indicates the amount of local tone curve to apply to the image.
- [luminanceNoiseReductionAmount](luminancenoisereductionamount.md): A value that indicates the amount of luminance noise reduction to apply to the image.
- [moireReductionAmount](moirereductionamount.md): A value that indicates the amount of moire artifact reduction to apply to high frequency areas of the image.
