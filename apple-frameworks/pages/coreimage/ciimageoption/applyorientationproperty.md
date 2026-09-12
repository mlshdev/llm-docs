> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageoption/applyorientationproperty](https://developer.apple.com/documentation/coreimage/ciimageoption/applyorientationproperty)

# applyOrientationProperty (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The key for transforming an image according to orientation metadata.

## Declaration

```swift
static let applyOrientationProperty: CIImageOption
```

<a id="Discussion"></a>

## Discussion

Images can contain metadata that reveals the orientation at capture time.  You can load this metadata into [CIImage](../ciimage.md) with [imageWithContentsOfURL:](../ciimage/imagewithcontentsofurl_.md) or [init(data:)](../ciimage/init%28data_%29.md) when the captured image contains orientation metadata.  Use any of the `initWith:options:` methods if the [properties](properties.md) ([NSDictionary](../../foundation/nsdictionary.md) of metadata properties) option is also provided.

If the value of this key is true, then calls to [imageWithContentsOfURL:options:](../ciimage/imagewithcontentsofurl_options_.md) and [imageWithData:options:](../ciimage/imagewithdata_options_.md) will return the image transformed according to its orientation metadata.

## See Also

### Type Properties

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
- [providerTileSize](providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.

# kCIImageApplyOrientationProperty (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The key for transforming an image according to orientation metadata.

## Declaration

```objectivec
extern CIImageOption const kCIImageApplyOrientationProperty;
```

<a id="Discussion"></a>

## Discussion

Images can contain metadata that reveals the orientation at capture time.  You can load this metadata into [CIImage](../ciimage.md) with [imageWithContentsOfURL:](../ciimage/imagewithcontentsofurl_.md) or [initWithData:](../ciimage/init%28data_%29.md) when the captured image contains orientation metadata.  Use any of the `initWith:options:` methods if the [kCIImageProperties](properties.md) ([NSDictionary](../../foundation/nsdictionary.md) of metadata properties) option is also provided.

If the value of this key is true, then calls to [imageWithContentsOfURL:options:](../ciimage/imagewithcontentsofurl_options_.md) and [imageWithData:options:](../ciimage/imagewithdata_options_.md) will return the image transformed according to its orientation metadata.

## See Also

### Type Properties

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
- [kCIImageProviderTileSize](providertilesize.md): A key for the image tiles size. The associated value is an `NSArray` that contains`NSNumber` objects for the dimensions of the image tiles requested from the image provider.
