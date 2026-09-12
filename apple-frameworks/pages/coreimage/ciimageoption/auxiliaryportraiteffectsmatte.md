> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageoption/auxiliaryportraiteffectsmatte](https://developer.apple.com/documentation/coreimage/ciimageoption/auxiliaryportraiteffectsmatte)

# auxiliaryPortraitEffectsMatte (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The key into the properties dictionary indicating whether to return auxiliary portrait effects matte.

## Declaration

```swift
static let auxiliaryPortraitEffectsMatte: CIImageOption
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../foundation/nsnumber.md) containing a Boolean `true` or `false`.

## See Also

### Type Properties

- [applyOrientationProperty](applyorientationproperty.md): The key for transforming an image according to orientation metadata.
- [auxiliaryDepth](auxiliarydepth.md): The key into the properties dictionary indicating whether to return an auxiliary depth image.
- [auxiliaryDisparity](auxiliarydisparity.md): The key into the properties dictionary indicating whether to return an auxiliary disparity image.
- [auxiliaryHDRGainMap](auxiliaryhdrgainmap.md)
- [auxiliarySemanticSegmentationGlassesMatte](auxiliarysemanticsegmentationglassesmatte.md)
- [auxiliarySemanticSegmentationHairMatte](auxiliarysemanticsegmentationhairmatte.md)
- [auxiliarySemanticSegmentationSkinMatte](auxiliarysemanticsegmentationskinmatte.md)
- [auxiliarySemanticSegmentationSkyMatte](auxiliarysemanticsegmentationskymatte.md)
- [auxiliarySemanticSegmentationTeethMatte](auxiliarysemanticsegmentationteethmatte.md)
- [cacheImmediately](cacheimmediately.md)
- [colorSpace](colorspace.md): The key for a color space.
- [expandToHDR](expandtohdr.md): A Boolean value that indicates whether to read Gain Map HDR images as HDR.
- [nearestSampling](nearestsampling.md): The key into the properties dictionary to indicate whether to use nearest-neighbor sampling.
- [properties](properties.md): The key for image metadata properties.
- [providerTileSize](providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.

# kCIImageAuxiliaryPortraitEffectsMatte (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The key into the properties dictionary indicating whether to return auxiliary portrait effects matte.

## Declaration

```objectivec
extern CIImageOption const kCIImageAuxiliaryPortraitEffectsMatte;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../foundation/nsnumber.md) containing a Boolean `true` or `false`.

## See Also

### Type Properties

- [kCIImageApplyOrientationProperty](applyorientationproperty.md): The key for transforming an image according to orientation metadata.
- [kCIImageAuxiliaryDepth](auxiliarydepth.md): The key into the properties dictionary indicating whether to return an auxiliary depth image.
- [kCIImageAuxiliaryDisparity](auxiliarydisparity.md): The key into the properties dictionary indicating whether to return an auxiliary disparity image.
- [kCIImageAuxiliaryHDRGainMap](auxiliaryhdrgainmap.md)
- [kCIImageAuxiliarySemanticSegmentationGlassesMatte](auxiliarysemanticsegmentationglassesmatte.md)
- [kCIImageAuxiliarySemanticSegmentationHairMatte](auxiliarysemanticsegmentationhairmatte.md)
- [kCIImageAuxiliarySemanticSegmentationSkinMatte](auxiliarysemanticsegmentationskinmatte.md)
- [kCIImageAuxiliarySemanticSegmentationSkyMatte](auxiliarysemanticsegmentationskymatte.md)
- [kCIImageAuxiliarySemanticSegmentationTeethMatte](auxiliarysemanticsegmentationteethmatte.md)
- [kCIImageCacheImmediately](cacheimmediately.md)
- [kCIImageColorSpace](colorspace.md): The key for a color space.
- [kCIImageExpandToHDR](expandtohdr.md): A Boolean value that indicates whether to read Gain Map HDR images as HDR.
- [kCIImageNearestSampling](nearestsampling.md): The key into the properties dictionary to indicate whether to use nearest-neighbor sampling.
- [kCIImageProperties](properties.md): The key for image metadata properties.
- [kCIImageProviderTileSize](providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.
