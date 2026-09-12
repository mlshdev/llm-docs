> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageoption/colorspace](https://developer.apple.com/documentation/coreimage/ciimageoption/colorspace)

# colorSpace (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The key for a color space.

## Declaration

```swift
static let colorSpace: CIImageOption
```

<a id="Discussion"></a>

## Discussion

For more information on this data type see [CGColorSpace](../../coregraphics/cgcolorspace.md). Typically you use this option when you need to load an elevation, mask, normal vector, or RAW sensor data directly from a file without color correcting it. This constant specifies to override Core Image, which, by default, assumes that data is in GenericRGB.

The value you supply for this dictionary key must be a [CGColorSpace](../../coregraphics/cgcolorspace.md) data type. If a value for this key isn’t supplied, the image’s [colorSpace](../ciimage/colorspace.md) dictionary are populated automatically by calling [CGImageSourceCopyPropertiesAtIndex(\_:\_:\_:)](../../imageio/cgimagesourcecopypropertiesatindex%28______%29.md). To request that Core Image perform no color management, specify the [NSNull](../../foundation/nsnull.md) object as the value for this key. Use this option for images that don’t contain color data (such as elevation maps, normal vector maps, and sampled function tables).

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
- [expandToHDR](expandtohdr.md): A Boolean value that indicates whether to read Gain Map HDR images as HDR.
- [nearestSampling](nearestsampling.md): The key into the properties dictionary to indicate whether to use nearest-neighbor sampling.
- [properties](properties.md): The key for image metadata properties.
- [providerTileSize](providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.

# kCIImageColorSpace (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The key for a color space.

## Declaration

```objectivec
extern CIImageOption const kCIImageColorSpace;
```

<a id="Discussion"></a>

## Discussion

For more information on this data type see [CGColorSpaceRef](../../coregraphics/cgcolorspace.md). Typically you use this option when you need to load an elevation, mask, normal vector, or RAW sensor data directly from a file without color correcting it. This constant specifies to override Core Image, which, by default, assumes that data is in GenericRGB.

The value you supply for this dictionary key must be a [CGColorSpaceRef](../../coregraphics/cgcolorspace.md) data type. If a value for this key isn’t supplied, the image’s [colorSpace](../ciimage/colorspace.md) dictionary are populated automatically by calling [CGImageSourceCopyPropertiesAtIndex](../../imageio/cgimagesourcecopypropertiesatindex%28______%29.md). To request that Core Image perform no color management, specify the [NSNull](../../foundation/nsnull.md) object as the value for this key. Use this option for images that don’t contain color data (such as elevation maps, normal vector maps, and sampled function tables).

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
- [kCIImageExpandToHDR](expandtohdr.md): A Boolean value that indicates whether to read Gain Map HDR images as HDR.
- [kCIImageNearestSampling](nearestsampling.md): The key into the properties dictionary to indicate whether to use nearest-neighbor sampling.
- [kCIImageProperties](properties.md): The key for image metadata properties.
- [kCIImageProviderTileSize](providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.
