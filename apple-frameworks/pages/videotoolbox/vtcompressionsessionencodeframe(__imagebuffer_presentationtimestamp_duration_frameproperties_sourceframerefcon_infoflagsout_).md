> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsessionencodeframe(_:imagebuffer:presentationtimestamp:duration:frameproperties:sourceframerefcon:infoflagsout:)](https://developer.apple.com/documentation/videotoolbox/vtcompressionsessionencodeframe(_:imagebuffer:presentationtimestamp:duration:frameproperties:sourceframerefcon:infoflagsout:))

# VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Presents frames to the compression session.

## Declaration

```swift
func VTCompressionSessionEncodeFrame(_ session: VTCompressionSession, imageBuffer: CVImageBuffer, presentationTimeStamp: CMTime, duration: CMTime, frameProperties: CFDictionary?, sourceFrameRefcon: UnsafeMutableRawPointer?, infoFlagsOut: UnsafeMutablePointer<VTEncodeInfoFlags>?) -> OSStatus
```

## Parameters

- `session`: The compression session.
- `imageBuffer`: A Core Video image buffer ([CVImageBuffer](../corevideo/cvimagebuffer.md)) containing a video frame to be compressed. The buffer must have a nonzero reference count.
- `presentationTimeStamp`: The presentation timestamp for this frame, to be attached to the sample buffer. Each presentation timestamp passed to a session must be greater than the previous one.
- `duration`: The presentation duration for this frame, to be attached to the sample buffer. If you do not have duration information, pass [invalid](../coremedia/cmtime/invalid.md).
- `frameProperties`: Key/value pairs specifying additional properties for encoding this frame. Note that some session properties may also be changed between frames. Such changes affect subsequently encoded frames.
- `sourceFrameRefcon`: Your reference value for the frame, which will be passed to the output callback function.
- `infoFlagsOut`: A pointer to a `VTEncodeInfoFlags` to receive information about the encode operation.

  The [asynchronous](vtencodeinfoflags/asynchronous.md) bit may be set if the encode is (or was) running asynchronously.

  The [frameDropped](vtencodeinfoflags/framedropped.md) bit may be set if the frame was dropped (synchronously).

  Pass `NULL` if you do not want to receive this information.

<a id="Discussion"></a>

## Discussion

Encoded frames may or may not be output before the function returns. The client should not modify the pixel data after making this call. The session and/or encoder retains the image buffer as long as necessary.

## See Also

### Encoding Frames

- [VTCompressionSessionGetPixelBufferPool(\_:)](vtcompressionsessiongetpixelbufferpool%28__%29.md): Returns a pool that provides ideal source pixel buffers for a compression session.
- [VTCompressionSessionPrepareToEncodeFrames(\_:)](vtcompressionsessionpreparetoencodeframes%28__%29.md): Enables the encoder to perform any necessary resource allocation before the encoder begins encoding frames (optional).
- [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:infoFlagsOut:outputHandler:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Presents frames to the compression session and invokes the output callback when compression is complete.
- [VTCompressionSessionCompleteFrames(\_:untilPresentationTimeStamp:)](vtcompressionsessioncompleteframes%28__untilpresentationtimestamp_%29.md): Forces the compression session to complete the encoding of frames.

# VTCompressionSessionEncodeFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Presents frames to the compression session.

## Declaration

```objectivec
extern OSStatus VTCompressionSessionEncodeFrame(VTCompressionSessionRef session, CVImageBufferRef imageBuffer, CMTime presentationTimeStamp, CMTime duration, CFDictionaryRef frameProperties, void *sourceFrameRefcon, VTEncodeInfoFlags *infoFlagsOut);
```

## Parameters

- `session`: The compression session.
- `imageBuffer`: A Core Video image buffer ([CVImageBufferRef](../corevideo/cvimagebuffer.md)) containing a video frame to be compressed. The buffer must have a nonzero reference count.
- `presentationTimeStamp`: The presentation timestamp for this frame, to be attached to the sample buffer. Each presentation timestamp passed to a session must be greater than the previous one.
- `duration`: The presentation duration for this frame, to be attached to the sample buffer. If you do not have duration information, pass [kCMTimeInvalid](../coremedia/cmtime/invalid.md).
- `frameProperties`: Key/value pairs specifying additional properties for encoding this frame. Note that some session properties may also be changed between frames. Such changes affect subsequently encoded frames.
- `sourceFrameRefcon`: Your reference value for the frame, which will be passed to the output callback function.
- `infoFlagsOut`: A pointer to a `VTEncodeInfoFlags` to receive information about the encode operation.

  The [kVTEncodeInfo_Asynchronous](vtencodeinfoflags/asynchronous.md) bit may be set if the encode is (or was) running asynchronously.

  The [kVTEncodeInfo_FrameDropped](vtencodeinfoflags/framedropped.md) bit may be set if the frame was dropped (synchronously).

  Pass `NULL` if you do not want to receive this information.

<a id="Discussion"></a>

## Discussion

Encoded frames may or may not be output before the function returns. The client should not modify the pixel data after making this call. The session and/or encoder retains the image buffer as long as necessary.

## See Also

### Encoding Frames

- [VTCompressionSessionGetPixelBufferPool](vtcompressionsessiongetpixelbufferpool%28__%29.md): Returns a pool that provides ideal source pixel buffers for a compression session.
- [VTCompressionSessionPrepareToEncodeFrames](vtcompressionsessionpreparetoencodeframes%28__%29.md): Enables the encoder to perform any necessary resource allocation before the encoder begins encoding frames (optional).
- [VTCompressionSessionEncodeFrameWithOutputHandler](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Presents frames to the compression session and invokes the output callback when compression is complete.
- [VTCompressionSessionCompleteFrames](vtcompressionsessioncompleteframes%28__untilpresentationtimestamp_%29.md): Forces the compression session to complete the encoding of frames.
