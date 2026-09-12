> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_preservealphachannel](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_preservealphachannel)

# kVTCompressionPropertyKey_PreserveAlphaChannel (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A key that specifies whether to encode the alpha channel of input video frames.

## Declaration

```swift
let kVTCompressionPropertyKey_PreserveAlphaChannel: CFString
```

<a id="Discussion"></a>

## Discussion

Set this property to false in cases where you’re not interested in preserving alpha, or if you know the alpha channel to be fully opaque.

This property isn’t supported by all encoders.

## See Also

### Bitstream Configuration

- [kVTCompressionPropertyKey_Depth](kvtcompressionpropertykey_depth.md): The pixel depth of the encoded video.
- [kVTCompressionPropertyKey_H264EntropyMode](kvtcompressionpropertykey_h264entropymode.md): The entropy encoding mode for H.264 compression.
- [kVTCompressionPropertyKey_HDRMetadataInsertionMode](kvtcompressionpropertykey_hdrmetadatainsertionmode.md)
- [kVTCompressionPropertyKey_OutputBitDepth](kvtcompressionpropertykey_outputbitdepth.md)
- [kVTCompressionPropertyKey_PreserveDynamicHDRMetadata](kvtcompressionpropertykey_preservedynamichdrmetadata.md): Specifies whether to preserve dynamic HDR metadata on the input pixel buffer.
- [kVTCompressionPropertyKey_ProfileLevel](kvtcompressionpropertykey_profilelevel.md): The profile and level for the encoded bitstream.

# kVTCompressionPropertyKey_PreserveAlphaChannel (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A key that specifies whether to encode the alpha channel of input video frames.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_PreserveAlphaChannel;
```

<a id="Discussion"></a>

## Discussion

Set this property to false in cases where you’re not interested in preserving alpha, or if you know the alpha channel to be fully opaque.

This property isn’t supported by all encoders.

## See Also

### Bitstream Configuration

- [kVTCompressionPropertyKey_Depth](kvtcompressionpropertykey_depth.md): The pixel depth of the encoded video.
- [kVTCompressionPropertyKey_H264EntropyMode](kvtcompressionpropertykey_h264entropymode.md): The entropy encoding mode for H.264 compression.
- [kVTCompressionPropertyKey_HDRMetadataInsertionMode](kvtcompressionpropertykey_hdrmetadatainsertionmode.md)
- [kVTCompressionPropertyKey_OutputBitDepth](kvtcompressionpropertykey_outputbitdepth.md)
- [kVTCompressionPropertyKey_PreserveDynamicHDRMetadata](kvtcompressionpropertykey_preservedynamichdrmetadata.md): Specifies whether to preserve dynamic HDR metadata on the input pixel buffer.
- [kVTCompressionPropertyKey_ProfileLevel](kvtcompressionpropertykey_profilelevel.md): The profile and level for the encoded bitstream.
