> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageoption/properties](https://developer.apple.com/documentation/coreimage/ciimageoption/properties)

# properties (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

The key for image metadata properties.

## Declaration

```swift
static let properties: CIImageOption
```

<a id="Discussion"></a>

## Discussion

To ensure that an image has no metadata properties, set the value of this key to `[NSNull null]`.

For more information about image metadata properties, see [Image Properties](../../imageio/image-properties.md) and [CGImageMetadata](../../imageio/cgimagemetadata.md).

## See Also

### Type Properties

- [applyOrientationProperty](applyorientationproperty.md): The key for transforming an image according to orientation metadata.
- [auxiliaryDepth](auxiliarydepth.md): The key into the properties dictionary indicating whether to return an auxiliary depth image.
- [auxiliaryDisparity](auxiliarydisparity.md): The key into the properties dictionary indicating whether to return an auxiliary disparity image.
- [auxiliaryHDRGainMap](auxiliaryhdrgainmap.md)
- [auxiliaryPortraitEffectsMatte](auxiliaryportraiteffectsmatte.md): The key into the properties dictionary indicating whether to return auxiliary portrait effects matte.
- [auxiliarySemanticSegmentationGlassesMatte](auxiliarysemanticsegmentationglassesmatte.md)
- [auxiliarySemanticSegmentationHairMatte](auxiliarysemanticsegmentationhairmatte.md)
- [auxiliarySemanticSegmentationSkinMatte](auxiliarysemanticsegmentationskinmatte.md)
- [auxiliarySemanticSegmentationSkyMatte](auxiliarysemanticsegmentationskymatte.md)
- [auxiliarySemanticSegmentationTeethMatte](auxiliarysemanticsegmentationteethmatte.md)
- [cacheImmediately](cacheimmediately.md)
- [colorSpace](colorspace.md): The key for a color space.
- [expandToHDR](expandtohdr.md): A Boolean value that indicates whether to read Gain Map HDR images as HDR.
- [nearestSampling](nearestsampling.md): The key into the properties dictionary to indicate whether to use nearest-neighbor sampling.
- [providerTileSize](providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.

# kCIImageProperties (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

The key for image metadata properties.

## Declaration

```objectivec
extern CIImageOption const kCIImageProperties;
```

<a id="Discussion"></a>

## Discussion

To ensure that an image has no metadata properties, set the value of this key to `[NSNull null]`.

For more information about image metadata properties, see [Image Properties](../../imageio/image-properties.md) and [CGImageMetadataRef](../../imageio/cgimagemetadata.md).

## See Also

### Type Properties

- [kCIImageApplyOrientationProperty](applyorientationproperty.md): The key for transforming an image according to orientation metadata.
- [kCIImageAuxiliaryDepth](auxiliarydepth.md): The key into the properties dictionary indicating whether to return an auxiliary depth image.
- [kCIImageAuxiliaryDisparity](auxiliarydisparity.md): The key into the properties dictionary indicating whether to return an auxiliary disparity image.
- [kCIImageAuxiliaryHDRGainMap](auxiliaryhdrgainmap.md)
- [kCIImageAuxiliaryPortraitEffectsMatte](auxiliaryportraiteffectsmatte.md): The key into the properties dictionary indicating whether to return auxiliary portrait effects matte.
- [kCIImageAuxiliarySemanticSegmentationGlassesMatte](auxiliarysemanticsegmentationglassesmatte.md)
- [kCIImageAuxiliarySemanticSegmentationHairMatte](auxiliarysemanticsegmentationhairmatte.md)
- [kCIImageAuxiliarySemanticSegmentationSkinMatte](auxiliarysemanticsegmentationskinmatte.md)
- [kCIImageAuxiliarySemanticSegmentationSkyMatte](auxiliarysemanticsegmentationskymatte.md)
- [kCIImageAuxiliarySemanticSegmentationTeethMatte](auxiliarysemanticsegmentationteethmatte.md)
- [kCIImageCacheImmediately](cacheimmediately.md)
- [kCIImageColorSpace](colorspace.md): The key for a color space.
- [kCIImageExpandToHDR](expandtohdr.md): A Boolean value that indicates whether to read Gain Map HDR images as HDR.
- [kCIImageNearestSampling](nearestsampling.md): The key into the properties dictionary to indicate whether to use nearest-neighbor sampling.
- [kCIImageProviderTileSize](providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.
