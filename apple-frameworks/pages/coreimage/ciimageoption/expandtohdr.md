> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageoption/expandtohdr](https://developer.apple.com/documentation/coreimage/ciimageoption/expandtohdr)

# expandToHDR (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether to read Gain Map HDR images as HDR.

## Declaration

```swift
static let expandToHDR: CIImageOption
```

## See Also

### Related Documentation

- [Applying Apple HDR effect to your photos](https://developer.apple.com/documentation/appkit/applying-apple-hdr-effect-to-your-photos): You can decode and apply Apple’s HDR gain map to your own images.

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
- [nearestSampling](nearestsampling.md): The key into the properties dictionary to indicate whether to use nearest-neighbor sampling.
- [properties](properties.md): The key for image metadata properties.
- [providerTileSize](providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.

# kCIImageExpandToHDR (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether to read Gain Map HDR images as HDR.

## Declaration

```objectivec
extern CIImageOption const kCIImageExpandToHDR;
```

## See Also

### Related Documentation

- [Applying Apple HDR effect to your photos](https://developer.apple.com/documentation/appkit/applying-apple-hdr-effect-to-your-photos): You can decode and apply Apple’s HDR gain map to your own images.

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
- [kCIImageNearestSampling](nearestsampling.md): The key into the properties dictionary to indicate whether to use nearest-neighbor sampling.
- [kCIImageProperties](properties.md): The key for image metadata properties.
- [kCIImageProviderTileSize](providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.
