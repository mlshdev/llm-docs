> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vthdrperframemetadatagenerationsessionref](https://developer.apple.com/documentation/videotoolbox/vthdrperframemetadatagenerationsessionref)

# VTHDRPerFrameMetadataGenerationSessionRef

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A mechanism for generating HDR Per Frame Metadata and attaching that metadata to a pixel buffer and the backing IOSurface.

## Declaration

```objectivec
typedef struct OpaqueVTHDRPerFrameMetadataGenerationSession * VTHDRPerFrameMetadataGenerationSessionRef;
```

<a id="Discussion"></a>

## Discussion

This object is a CF type, so call `CFRelease` to release your object reference.

## See Also

### Data types

- [VTHDRPerFrameMetadataGenerationHDRFormatType](vthdrperframemetadatagenerationhdrformattype.md): The HDR format type.
- [kVTHDRPerFrameMetadataGenerationHDRFormatType_DolbyVision](kvthdrperframemetadatagenerationhdrformattype_dolbyvision.md): Specifies that DolbyVision data should be generated and attached for each pixel buffer.
- [kVTHDRPerFrameMetadataGenerationOptionsKey_HDRFormats](kvthdrperframemetadatagenerationoptionskey_hdrformats.md): Specifies an array of HDR formats to generate.
