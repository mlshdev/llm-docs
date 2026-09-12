> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vthdrperframemetadatagenerationhdrformattype](https://developer.apple.com/documentation/videotoolbox/vthdrperframemetadatagenerationhdrformattype)

# VTHDRPerFrameMetadataGenerationHDRFormatType (Swift)

**Framework:** Video Toolbox  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The HDR format type.

## Declaration

```swift
struct VTHDRPerFrameMetadataGenerationHDRFormatType
```

## Topics

### Initializers

- [init(\_:)](https://developer.apple.com/documentation/videotoolbox/vthdrperframemetadatagenerationhdrformattype/init%28_:%29)
- [init(rawValue:)](https://developer.apple.com/documentation/videotoolbox/vthdrperframemetadatagenerationhdrformattype/init%28rawvalue:%29)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data types

- [VTHDRPerFrameMetadataGenerationSession](vthdrperframemetadatagenerationsession.md): An object that generates per-frame HDR metadata.
- [kVTHDRPerFrameMetadataGenerationOptionsKey_HDRFormats](kvthdrperframemetadatagenerationoptionskey_hdrformats.md): Specifies an array of HDR formats to generate.

# VTHDRPerFrameMetadataGenerationHDRFormatType (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The HDR format type.

## Declaration

```objectivec
typedef CFStringRef VTHDRPerFrameMetadataGenerationHDRFormatType;
```

## See Also

### Data types

- [VTHDRPerFrameMetadataGenerationSessionRef](vthdrperframemetadatagenerationsessionref.md): A mechanism for generating HDR Per Frame Metadata and attaching that metadata to a pixel buffer and the backing IOSurface.
- [kVTHDRPerFrameMetadataGenerationHDRFormatType_DolbyVision](kvthdrperframemetadatagenerationhdrformattype_dolbyvision.md): Specifies that DolbyVision data should be generated and attached for each pixel buffer.
- [kVTHDRPerFrameMetadataGenerationOptionsKey_HDRFormats](kvthdrperframemetadatagenerationoptionskey_hdrformats.md): Specifies an array of HDR formats to generate.
