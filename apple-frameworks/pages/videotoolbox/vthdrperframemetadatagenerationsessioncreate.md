> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vthdrperframemetadatagenerationsessioncreate](https://developer.apple.com/documentation/videotoolbox/vthdrperframemetadatagenerationsessioncreate)

# VTHDRPerFrameMetadataGenerationSessionCreate

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a metadata generation session object.

## Declaration

```objectivec
extern OSStatus VTHDRPerFrameMetadataGenerationSessionCreate(CFAllocatorRef allocator, float framesPerSecond, CFDictionaryRef options, VTHDRPerFrameMetadataGenerationSessionRef*hdrPerFrameMetadataGenerationSessionOut);
```

## Parameters

- `allocator`: The allocator.
- `framesPerSecond`: Value must be greater than 0.0
- `options`: `CFDictionary` may contain the key [kVTHDRPerFrameMetadataGenerationOptionsKey_HDRFormats](kvthdrperframemetadatagenerationoptionskey_hdrformats.md).
- `hdrPerFrameMetadataGenerationSessionOut`: A pointer to a variable to receive the new session.

<a id="Discussion"></a>

## Discussion

The returned session object may be used to perform HDR Per Frame Metadata Generation.

Call CFRelease to release your object reference.
