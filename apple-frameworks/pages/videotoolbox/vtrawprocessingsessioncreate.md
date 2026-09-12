> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsessioncreate](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsessioncreate)

# VTRAWProcessingSessionCreate

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 15.0+

Creates a RAW video frame processing session.

## Declaration

```objectivec
extern OSStatus VTRAWProcessingSessionCreate(CFAllocatorRef allocator, CMVideoFormatDescriptionRef formatDescription, CFDictionaryRef outputPixelBufferAttributes, CFDictionaryRef processingSessionOptions, VTRAWProcessingSessionRef*processingSessionOut);
```

## Parameters

- `allocator`: An allocator for the session. Pass `NULL` to use the default allocator.
- `formatDescription`: The [CMVideoFormatDescriptionRef](../coremedia/cmvideoformatdescription.md) corresponding to the original media samples, containing sequence-level processing parameters.
- `outputPixelBufferAttributes`: A CoreVideo pixel buffer attributes dictionary describing the client’s requirements for pixel buffers for output frames. Pass `NULL` to receive the RAW processor’s native output format.
- `processingSessionOptions`: A dictionary of creation-time options for the [VTRAWProcessingSession](vtrawprocessingsession-api-collection.md).
- `processingSessionOut`: Points to a variable to receive the new RAW processing session. When you are done with the session, call [VTRAWProcessingSessionInvalidate](vtrawprocessingsessioninvalidate.md) to tear it down and then `CFRelease` to release your object reference.
