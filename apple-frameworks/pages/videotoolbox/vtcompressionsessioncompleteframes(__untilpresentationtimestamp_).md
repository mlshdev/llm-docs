> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsessioncompleteframes(_:untilpresentationtimestamp:)](https://developer.apple.com/documentation/videotoolbox/vtcompressionsessioncompleteframes(_:untilpresentationtimestamp:))

# VTCompressionSessionCompleteFrames(\_:untilPresentationTimeStamp:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Forces the compression session to complete the encoding of frames.

## Declaration

```swift
func VTCompressionSessionCompleteFrames(_ session: VTCompressionSession, untilPresentationTimeStamp completeUntilPresentationTimeStamp: CMTime) -> OSStatus
```

## Parameters

- `session`: The compression session.
- `completeUntilPresentationTimeStamp`: The timestamp at which to complete frame encoding.

<a id="Discussion"></a>

## Discussion

If `completeUntilPresentationTimeStamp` is numeric, frames with presentation timestamps up to and including this timestamp are emitted before the function returns.

If `completeUntilPresentationTimeStamp` is non-numeric, all pending frames are emitted before the function returns.

## See Also

### Encoding Frames

- [VTCompressionSessionGetPixelBufferPool(\_:)](vtcompressionsessiongetpixelbufferpool%28__%29.md): Returns a pool that provides ideal source pixel buffers for a compression session.
- [VTCompressionSessionPrepareToEncodeFrames(\_:)](vtcompressionsessionpreparetoencodeframes%28__%29.md): Enables the encoder to perform any necessary resource allocation before the encoder begins encoding frames (optional).
- [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md): Presents frames to the compression session.
- [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:infoFlagsOut:outputHandler:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Presents frames to the compression session and invokes the output callback when compression is complete.

# VTCompressionSessionCompleteFrames (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Forces the compression session to complete the encoding of frames.

## Declaration

```objectivec
extern OSStatus VTCompressionSessionCompleteFrames(VTCompressionSessionRef session, CMTime completeUntilPresentationTimeStamp);
```

## Parameters

- `session`: The compression session.
- `completeUntilPresentationTimeStamp`: The timestamp at which to complete frame encoding.

<a id="Discussion"></a>

## Discussion

If `completeUntilPresentationTimeStamp` is numeric, frames with presentation timestamps up to and including this timestamp are emitted before the function returns.

If `completeUntilPresentationTimeStamp` is non-numeric, all pending frames are emitted before the function returns.

## See Also

### Encoding Frames

- [VTCompressionSessionGetPixelBufferPool](vtcompressionsessiongetpixelbufferpool%28__%29.md): Returns a pool that provides ideal source pixel buffers for a compression session.
- [VTCompressionSessionPrepareToEncodeFrames](vtcompressionsessionpreparetoencodeframes%28__%29.md): Enables the encoder to perform any necessary resource allocation before the encoder begins encoding frames (optional).
- [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md): Presents frames to the compression session.
- [VTCompressionSessionEncodeFrameWithOutputHandler](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Presents frames to the compression session and invokes the output callback when compression is complete.
