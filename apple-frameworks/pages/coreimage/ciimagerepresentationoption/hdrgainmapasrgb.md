> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimagerepresentationoption/hdrgainmapasrgb](https://developer.apple.com/documentation/coreimage/ciimagerepresentationoption/hdrgainmapasrgb)

# hdrGainMapAsRGB (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An optional key and value to request the gain map channel to be color instead of monochrome.

## Declaration

```swift
static let hdrGainMapAsRGB: CIImageRepresentationOption
```

<a id="discussion"></a>

## Discussion

This key affects how the gain map image is calculated from the SDR receiver and the [hdrImage](hdrimage.md) image value.

The value for this is a Boolean where:

- True: the gain map is created as a color ratio between the HDR and SDR images.
- False: the gain map is created as a brightness ratio between the HDR and SDR images.
- Not specified: the default behavior False.

# kCIImageRepresentationHDRGainMapAsRGB (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

An optional key and value to request the gain map channel to be color instead of monochrome.

## Declaration

```objectivec
extern CIImageRepresentationOption const kCIImageRepresentationHDRGainMapAsRGB;
```

<a id="discussion"></a>

## Discussion

This key affects how the gain map image is calculated from the SDR receiver and the [kCIImageRepresentationHDRImage](hdrimage.md) image value.

The value for this is a Boolean where:

- True: the gain map is created as a color ratio between the HDR and SDR images.
- False: the gain map is created as a brightness ratio between the HDR and SDR images.
- Not specified: the default behavior False.
