> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vthdrperframemetadatagenerationsessionattachmetadata](https://developer.apple.com/documentation/videotoolbox/vthdrperframemetadatagenerationsessionattachmetadata)

# VTHDRPerFrameMetadataGenerationSessionAttachMetadata

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Attaches per-frame metadata to the pixel buffer and the backing IOSurface.

## Declaration

```objectivec
extern OSStatus VTHDRPerFrameMetadataGenerationSessionAttachMetadata(VTHDRPerFrameMetadataGenerationSessionRef hdrPerFrameMetadataGenerationSession, CVPixelBufferRef pixelBuffer, Boolean sceneChange);
```

<a id="Discussion"></a>

## Discussion

Call this to analyze and attach HDR Metadata. This call will change CVPixelBuffer attachments and backing IOSurface attachments.
