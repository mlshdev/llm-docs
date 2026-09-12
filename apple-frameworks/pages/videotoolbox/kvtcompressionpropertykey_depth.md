> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_depth](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_depth)

# kVTCompressionPropertyKey_Depth (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The pixel depth of the encoded video.

## Declaration

```swift
let kVTCompressionPropertyKey_Depth: CFString
```

<a id="Discussion"></a>

## Discussion

This property is only supported by video encoders for formats that are tied to particular pixel formats (for example, 16-bit RGB, 24-bit RGB).

## See Also

### Bitstream Configuration

- [kVTCompressionPropertyKey_H264EntropyMode](kvtcompressionpropertykey_h264entropymode.md): The entropy encoding mode for H.264 compression.
- [kVTCompressionPropertyKey_HDRMetadataInsertionMode](kvtcompressionpropertykey_hdrmetadatainsertionmode.md)
- [kVTCompressionPropertyKey_OutputBitDepth](kvtcompressionpropertykey_outputbitdepth.md)
- [kVTCompressionPropertyKey_PreserveAlphaChannel](kvtcompressionpropertykey_preservealphachannel.md): A key that specifies whether to encode the alpha channel of input video frames.
- [kVTCompressionPropertyKey_PreserveDynamicHDRMetadata](kvtcompressionpropertykey_preservedynamichdrmetadata.md): Specifies whether to preserve dynamic HDR metadata on the input pixel buffer.
- [kVTCompressionPropertyKey_ProfileLevel](kvtcompressionpropertykey_profilelevel.md): The profile and level for the encoded bitstream.

# kVTCompressionPropertyKey_Depth (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The pixel depth of the encoded video.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_Depth;
```

<a id="Discussion"></a>

## Discussion

This property is only supported by video encoders for formats that are tied to particular pixel formats (for example, 16-bit RGB, 24-bit RGB).

## See Also

### Bitstream Configuration

- [kVTCompressionPropertyKey_H264EntropyMode](kvtcompressionpropertykey_h264entropymode.md): The entropy encoding mode for H.264 compression.
- [kVTCompressionPropertyKey_HDRMetadataInsertionMode](kvtcompressionpropertykey_hdrmetadatainsertionmode.md)
- [kVTCompressionPropertyKey_OutputBitDepth](kvtcompressionpropertykey_outputbitdepth.md)
- [kVTCompressionPropertyKey_PreserveAlphaChannel](kvtcompressionpropertykey_preservealphachannel.md): A key that specifies whether to encode the alpha channel of input video frames.
- [kVTCompressionPropertyKey_PreserveDynamicHDRMetadata](kvtcompressionpropertykey_preservedynamichdrmetadata.md): Specifies whether to preserve dynamic HDR metadata on the input pixel buffer.
- [kVTCompressionPropertyKey_ProfileLevel](kvtcompressionpropertykey_profilelevel.md): The profile and level for the encoded bitstream.
