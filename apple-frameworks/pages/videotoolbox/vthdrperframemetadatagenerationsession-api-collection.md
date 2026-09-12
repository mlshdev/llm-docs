> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vthdrperframemetadatagenerationsession-api-collection](https://developer.apple.com/documentation/videotoolbox/vthdrperframemetadatagenerationsession-api-collection)

# VTHDRPerFrameMetadataGenerationSession (Swift)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object that generates per-frame HDR metadata.

## Topics

### Data types

- [VTHDRPerFrameMetadataGenerationSession](vthdrperframemetadatagenerationsession.md): An object that generates per-frame HDR metadata.
- [VTHDRPerFrameMetadataGenerationHDRFormatType](vthdrperframemetadatagenerationhdrformattype.md): The HDR format type.
- [kVTHDRPerFrameMetadataGenerationOptionsKey_HDRFormats](kvthdrperframemetadatagenerationoptionskey_hdrformats.md): Specifies an array of HDR formats to generate.

# VTHDRPerFrameMetadataGenerationSession (Objective-C)

**Framework:** Video Toolbox  
**Kind:** API Collection

An object that generates per-frame HDR metadata.

## Topics

### Creating a session

- [VTHDRPerFrameMetadataGenerationSessionCreate](vthdrperframemetadatagenerationsessioncreate.md): Creates a metadata generation session object.

### Attaching metadata

- [VTHDRPerFrameMetadataGenerationSessionAttachMetadata](vthdrperframemetadatagenerationsessionattachmetadata.md): Attaches per-frame metadata to the pixel buffer and the backing IOSurface.

### Accessing the type identifier

- [VTHDRPerFrameMetadataGenerationSessionGetTypeID](vthdrperframemetadatagenerationsessiongettypeid.md): Retrieves the Core Foundation type identifier for the session.

### Data types

- [VTHDRPerFrameMetadataGenerationSessionRef](vthdrperframemetadatagenerationsessionref.md): A mechanism for generating HDR Per Frame Metadata and attaching that metadata to a pixel buffer and the backing IOSurface.
- [VTHDRPerFrameMetadataGenerationHDRFormatType](vthdrperframemetadatagenerationhdrformattype.md): The HDR format type.
- [kVTHDRPerFrameMetadataGenerationHDRFormatType_DolbyVision](kvthdrperframemetadatagenerationhdrformattype_dolbyvision.md): Specifies that DolbyVision data should be generated and attached for each pixel buffer.
- [kVTHDRPerFrameMetadataGenerationOptionsKey_HDRFormats](kvthdrperframemetadatagenerationoptionskey_hdrformats.md): Specifies an array of HDR formats to generate.
