> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilter/boostamount](https://developer.apple.com/documentation/coreimage/cirawfilter/boostamount)

# boostAmount (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A value that indicates the amount of global tone curve to apply to the image.

## Declaration

```swift
var boostAmount: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The value should be in the range of `0...1`. A value of `0` indicates no global tone curve (linear response), and a value of `1` indicates full global tone curve. The default value is `1`.

## See Also

### Configuring a filter

- [baselineExposure](baselineexposure.md): A value that indicates the baseline exposure to apply to the image.
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

# boostAmount (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A value that indicates the amount of global tone curve to apply to the image.

## Declaration

```objectivec
@property (readwrite) float boostAmount;
```

<a id="Discussion"></a>

## Discussion

The value should be in the range of `0...1`. A value of `0` indicates no global tone curve (linear response), and a value of `1` indicates full global tone curve. The default value is `1`.

## See Also

### Configuring a filter

- [baselineExposure](baselineexposure.md): A value that indicates the baseline exposure to apply to the image.
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
