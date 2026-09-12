> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageoption](https://developer.apple.com/documentation/coreimage/ciimageoption)

# CIImageOption (Swift)

**Framework:** Core Image  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct CIImageOption
```

## Topics

### Initializers

- [init(rawValue:)](ciimageoption/init%28rawvalue_%29.md)

### Type Properties

- [applyOrientationProperty](ciimageoption/applyorientationproperty.md): The key for transforming an image according to orientation metadata.
- [auxiliaryDepth](ciimageoption/auxiliarydepth.md): The key into the properties dictionary indicating whether to return an auxiliary depth image.
- [auxiliaryDisparity](ciimageoption/auxiliarydisparity.md): The key into the properties dictionary indicating whether to return an auxiliary disparity image.
- [auxiliaryHDRGainMap](ciimageoption/auxiliaryhdrgainmap.md)
- [auxiliaryPortraitEffectsMatte](ciimageoption/auxiliaryportraiteffectsmatte.md): The key into the properties dictionary indicating whether to return auxiliary portrait effects matte.
- [auxiliarySemanticSegmentationGlassesMatte](ciimageoption/auxiliarysemanticsegmentationglassesmatte.md)
- [auxiliarySemanticSegmentationHairMatte](ciimageoption/auxiliarysemanticsegmentationhairmatte.md)
- [auxiliarySemanticSegmentationSkinMatte](ciimageoption/auxiliarysemanticsegmentationskinmatte.md)
- [auxiliarySemanticSegmentationSkyMatte](ciimageoption/auxiliarysemanticsegmentationskymatte.md)
- [auxiliarySemanticSegmentationTeethMatte](ciimageoption/auxiliarysemanticsegmentationteethmatte.md)
- [cacheImmediately](ciimageoption/cacheimmediately.md)
- [colorSpace](ciimageoption/colorspace.md): The key for a color space.
- [expandToHDR](ciimageoption/expandtohdr.md): A Boolean value that indicates whether to read Gain Map HDR images as HDR.
- [nearestSampling](ciimageoption/nearestsampling.md): The key into the properties dictionary to indicate whether to use nearest-neighbor sampling.
- [properties](ciimageoption/properties.md): The key for image metadata properties.
- [providerTileSize](ciimageoption/providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.
- [providerUserInfo](ciimageoption/provideruserinfo.md): A key for data needed by the image provider. The associated value is an object that contains the needed data.
- [textureFormat](ciimageoption/textureformat.md): Deprecated. The key for an OpenGL texture format.
- [textureTarget](ciimageoption/texturetarget.md): Deprecated. The key for an OpenGL texture target.
- [toneMapHDRtoSDR](ciimageoption/tonemaphdrtosdr.md)
- [contentHeadroom](ciimageoption/contentheadroom.md)
- [applyCleanAperture](ciimageoption/applycleanaperture.md): A Boolean value to control whether an image created with a CVPixelBuffer or an IOSurface should be cropped and offset according clean aperture attachments.
- [contentAverageLightLevel](ciimageoption/contentaveragelightlevel.md): A value for overriding the automatic behavior of the Content Average Light Level property when creating an image.
- [subsampleFactor](ciimageoption/subsamplefactor.md): The factor by which to scale down a returned images.
- [typeIdentifierHint](ciimageoption/typeidentifierhint.md): The uniform type identifier string to use in cases where a file’s format cannot be conclusively determined based solely on its contents.
- [useHardwareAcceleration](ciimageoption/usehardwareacceleration.md): A Boolean value specifying that using hardware is preferred when decoding.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CIImageOption (Objective-C)

**Framework:** Core Image  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef NSString * CIImageOption;
```

## Topics

### Type Properties

- [kCIImageApplyOrientationProperty](ciimageoption/applyorientationproperty.md): The key for transforming an image according to orientation metadata.
- [kCIImageAuxiliaryDepth](ciimageoption/auxiliarydepth.md): The key into the properties dictionary indicating whether to return an auxiliary depth image.
- [kCIImageAuxiliaryDisparity](ciimageoption/auxiliarydisparity.md): The key into the properties dictionary indicating whether to return an auxiliary disparity image.
- [kCIImageAuxiliaryHDRGainMap](ciimageoption/auxiliaryhdrgainmap.md)
- [kCIImageAuxiliaryPortraitEffectsMatte](ciimageoption/auxiliaryportraiteffectsmatte.md): The key into the properties dictionary indicating whether to return auxiliary portrait effects matte.
- [kCIImageAuxiliarySemanticSegmentationGlassesMatte](ciimageoption/auxiliarysemanticsegmentationglassesmatte.md)
- [kCIImageAuxiliarySemanticSegmentationHairMatte](ciimageoption/auxiliarysemanticsegmentationhairmatte.md)
- [kCIImageAuxiliarySemanticSegmentationSkinMatte](ciimageoption/auxiliarysemanticsegmentationskinmatte.md)
- [kCIImageAuxiliarySemanticSegmentationSkyMatte](ciimageoption/auxiliarysemanticsegmentationskymatte.md)
- [kCIImageAuxiliarySemanticSegmentationTeethMatte](ciimageoption/auxiliarysemanticsegmentationteethmatte.md)
- [kCIImageCacheImmediately](ciimageoption/cacheimmediately.md)
- [kCIImageColorSpace](ciimageoption/colorspace.md): The key for a color space.
- [kCIImageExpandToHDR](ciimageoption/expandtohdr.md): A Boolean value that indicates whether to read Gain Map HDR images as HDR.
- [kCIImageNearestSampling](ciimageoption/nearestsampling.md): The key into the properties dictionary to indicate whether to use nearest-neighbor sampling.
- [kCIImageProperties](ciimageoption/properties.md): The key for image metadata properties.
- [kCIImageProviderTileSize](ciimageoption/providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.
- [kCIImageProviderUserInfo](ciimageoption/provideruserinfo.md): A key for data needed by the image provider. The associated value is an object that contains the needed data.
- [kCIImageTextureFormat](ciimageoption/textureformat.md): Deprecated. The key for an OpenGL texture format.
- [kCIImageTextureTarget](ciimageoption/texturetarget.md): Deprecated. The key for an OpenGL texture target.
- [kCIImageToneMapHDRtoSDR](ciimageoption/tonemaphdrtosdr.md)
- [kCIImageContentHeadroom](ciimageoption/contentheadroom.md)
