> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimagerepresentationoption/hdrgainmapimage](https://developer.apple.com/documentation/coreimage/ciimagerepresentationoption/hdrgainmapimage)

# hdrGainMapImage (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 14.1+ · iPadOS 14.1+ · Mac Catalyst 14.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An optional key and value to save a gain map channel to a JPEG or HEIF.

## Declaration

```swift
static let hdrGainMapImage: CIImageRepresentationOption
```

<a id="discussion"></a>

## Discussion

The value for this key needs to be a monochrome [CIImage](../ciimage.md) instance.

If the [hdrGainMapAsRGB](hdrgainmapasrgb.md) option it true, then it needs to be an RGB [CIImage](../ciimage.md) instance.

The `/CIImage/properties` should contain metadata information equivalent to what is returned when initializing an image using [auxiliaryHDRGainMap](../ciimageoption/auxiliaryhdrgainmap.md).

# kCIImageRepresentationHDRGainMapImage (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 14.1+ · iPadOS 14.1+ · Mac Catalyst 14.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

An optional key and value to save a gain map channel to a JPEG or HEIF.

## Declaration

```objectivec
extern CIImageRepresentationOption const kCIImageRepresentationHDRGainMapImage;
```

<a id="discussion"></a>

## Discussion

The value for this key needs to be a monochrome [CIImage](../ciimage.md) instance.

If the [kCIImageRepresentationHDRGainMapAsRGB](hdrgainmapasrgb.md) option it true, then it needs to be an RGB [CIImage](../ciimage.md) instance.

The `/CIImage/properties` should contain metadata information equivalent to what is returned when initializing an image using [kCIImageAuxiliaryHDRGainMap](../ciimageoption/auxiliaryhdrgainmap.md).
