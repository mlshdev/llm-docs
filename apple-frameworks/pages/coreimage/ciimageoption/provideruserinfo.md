> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageoption/provideruserinfo](https://developer.apple.com/documentation/coreimage/ciimageoption/provideruserinfo)

# providerUserInfo (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

A key for data needed by the image provider. The associated value is an object that contains the needed data.

## Declaration

```swift
static let providerUserInfo: CIImageOption
```

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
- [properties](properties.md): The key for image metadata properties.

# kCIImageProviderUserInfo (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

A key for data needed by the image provider. The associated value is an object that contains the needed data.

## Declaration

```objectivec
extern CIImageOption const kCIImageProviderUserInfo;
```

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
- [kCIImageProperties](properties.md): The key for image metadata properties.
