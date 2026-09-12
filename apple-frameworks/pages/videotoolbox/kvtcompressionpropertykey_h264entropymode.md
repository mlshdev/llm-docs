> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_h264entropymode](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_h264entropymode)

# kVTCompressionPropertyKey_H264EntropyMode (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.0+

The entropy encoding mode for H.264 compression.

## Declaration

```swift
let kVTCompressionPropertyKey_H264EntropyMode: CFString
```

<a id="Discussion"></a>

## Discussion

If supported by an H.264 encoder, this property controls whether the encoder should use Context-based Adaptive Variable Length Coding (CAVLC) or Context-based Adaptive Binary Arithmetic Coding (CABAC). CABAC generally gives better compression at the expense of higher computational overhead. The default value is encoder-specific and may change depending on other encoder settings.

> **Note**

>  Changing the default entropy mode may result in a configuration that is not compatible with a requested Profile and Level.  Results in this case are undefined, and could include encode errors or a noncompliant output stream.

## Topics

### Entropy Modes

- [kVTH264EntropyMode_CAVLC](kvth264entropymode_cavlc.md)
- [kVTH264EntropyMode_CABAC](kvth264entropymode_cabac.md)

## See Also

### Bitstream Configuration

- [kVTCompressionPropertyKey_Depth](kvtcompressionpropertykey_depth.md): The pixel depth of the encoded video.
- [kVTCompressionPropertyKey_HDRMetadataInsertionMode](kvtcompressionpropertykey_hdrmetadatainsertionmode.md)
- [kVTCompressionPropertyKey_OutputBitDepth](kvtcompressionpropertykey_outputbitdepth.md)
- [kVTCompressionPropertyKey_PreserveAlphaChannel](kvtcompressionpropertykey_preservealphachannel.md): A key that specifies whether to encode the alpha channel of input video frames.
- [kVTCompressionPropertyKey_PreserveDynamicHDRMetadata](kvtcompressionpropertykey_preservedynamichdrmetadata.md): Specifies whether to preserve dynamic HDR metadata on the input pixel buffer.
- [kVTCompressionPropertyKey_ProfileLevel](kvtcompressionpropertykey_profilelevel.md): The profile and level for the encoded bitstream.

# kVTCompressionPropertyKey_H264EntropyMode (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.0+

The entropy encoding mode for H.264 compression.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_H264EntropyMode;
```

<a id="Discussion"></a>

## Discussion

If supported by an H.264 encoder, this property controls whether the encoder should use Context-based Adaptive Variable Length Coding (CAVLC) or Context-based Adaptive Binary Arithmetic Coding (CABAC). CABAC generally gives better compression at the expense of higher computational overhead. The default value is encoder-specific and may change depending on other encoder settings.

> **Note**

>  Changing the default entropy mode may result in a configuration that is not compatible with a requested Profile and Level.  Results in this case are undefined, and could include encode errors or a noncompliant output stream.

## Topics

### Entropy Modes

- [kVTH264EntropyMode_CAVLC](kvth264entropymode_cavlc.md)
- [kVTH264EntropyMode_CABAC](kvth264entropymode_cabac.md)

## See Also

### Bitstream Configuration

- [kVTCompressionPropertyKey_Depth](kvtcompressionpropertykey_depth.md): The pixel depth of the encoded video.
- [kVTCompressionPropertyKey_HDRMetadataInsertionMode](kvtcompressionpropertykey_hdrmetadatainsertionmode.md)
- [kVTCompressionPropertyKey_OutputBitDepth](kvtcompressionpropertykey_outputbitdepth.md)
- [kVTCompressionPropertyKey_PreserveAlphaChannel](kvtcompressionpropertykey_preservealphachannel.md): A key that specifies whether to encode the alpha channel of input video frames.
- [kVTCompressionPropertyKey_PreserveDynamicHDRMetadata](kvtcompressionpropertykey_preservedynamichdrmetadata.md): Specifies whether to preserve dynamic HDR metadata on the input pixel buffer.
- [kVTCompressionPropertyKey_ProfileLevel](kvtcompressionpropertykey_profilelevel.md): The profile and level for the encoded bitstream.
