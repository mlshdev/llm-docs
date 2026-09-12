> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvthdrperframemetadatagenerationoptionskey_hdrformats](https://developer.apple.com/documentation/videotoolbox/kvthdrperframemetadatagenerationoptionskey_hdrformats)

# kVTHDRPerFrameMetadataGenerationOptionsKey_HDRFormats (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Specifies an array of HDR formats to generate.

## Declaration

```swift
let kVTHDRPerFrameMetadataGenerationOptionsKey_HDRFormats: CFString
```

<a id="Discussion"></a>

## Discussion

This key represents a CFArrayRef. Only a value of [kVTHDRPerFrameMetadataGenerationHDRFormatType_DolbyVision](kvthdrperframemetadatagenerationhdrformattype_dolbyvision.md) is supported.

## See Also

### Data types

- [VTHDRPerFrameMetadataGenerationSession](vthdrperframemetadatagenerationsession.md): An object that generates per-frame HDR metadata.
- [VTHDRPerFrameMetadataGenerationHDRFormatType](vthdrperframemetadatagenerationhdrformattype.md): The HDR format type.

# kVTHDRPerFrameMetadataGenerationOptionsKey_HDRFormats (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Specifies an array of HDR formats to generate.

## Declaration

```objectivec
extern CFStringRef const kVTHDRPerFrameMetadataGenerationOptionsKey_HDRFormats;
```

<a id="Discussion"></a>

## Discussion

This key represents a CFArrayRef. Only a value of [kVTHDRPerFrameMetadataGenerationHDRFormatType_DolbyVision](kvthdrperframemetadatagenerationhdrformattype_dolbyvision.md) is supported.

## See Also

### Data types

- [VTHDRPerFrameMetadataGenerationSessionRef](vthdrperframemetadatagenerationsessionref.md): A mechanism for generating HDR Per Frame Metadata and attaching that metadata to a pixel buffer and the backing IOSurface.
- [VTHDRPerFrameMetadataGenerationHDRFormatType](vthdrperframemetadatagenerationhdrformattype.md): The HDR format type.
- [kVTHDRPerFrameMetadataGenerationHDRFormatType_DolbyVision](kvthdrperframemetadatagenerationhdrformattype_dolbyvision.md): Specifies that DolbyVision data should be generated and attached for each pixel buffer.
