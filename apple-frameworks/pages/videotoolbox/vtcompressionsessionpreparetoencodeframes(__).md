> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsessionpreparetoencodeframes(_:)](https://developer.apple.com/documentation/videotoolbox/vtcompressionsessionpreparetoencodeframes(_:))

# VTCompressionSessionPrepareToEncodeFrames(\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.0+

Enables the encoder to perform any necessary resource allocation before the encoder begins encoding frames (optional).

## Declaration

```swift
func VTCompressionSessionPrepareToEncodeFrames(_ session: VTCompressionSession) -> OSStatus
```

## Parameters

- `session`: The compression session.

<a id="Discussion"></a>

## Discussion

If this function isn’t called, any necessary resources are allocated on the first [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md) call.

Subsequent calls to this function have no effect.

## See Also

### Encoding Frames

- [VTCompressionSessionGetPixelBufferPool(\_:)](vtcompressionsessiongetpixelbufferpool%28__%29.md): Returns a pool that provides ideal source pixel buffers for a compression session.
- [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md): Presents frames to the compression session.
- [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:infoFlagsOut:outputHandler:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Presents frames to the compression session and invokes the output callback when compression is complete.
- [VTCompressionSessionCompleteFrames(\_:untilPresentationTimeStamp:)](vtcompressionsessioncompleteframes%28__untilpresentationtimestamp_%29.md): Forces the compression session to complete the encoding of frames.

# VTCompressionSessionPrepareToEncodeFrames (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.0+

Enables the encoder to perform any necessary resource allocation before the encoder begins encoding frames (optional).

## Declaration

```objectivec
extern OSStatus VTCompressionSessionPrepareToEncodeFrames(VTCompressionSessionRef session);
```

## Parameters

- `session`: The compression session.

<a id="Discussion"></a>

## Discussion

If this function isn’t called, any necessary resources are allocated on the first [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md) call.

Subsequent calls to this function have no effect.

## See Also

### Encoding Frames

- [VTCompressionSessionGetPixelBufferPool](vtcompressionsessiongetpixelbufferpool%28__%29.md): Returns a pool that provides ideal source pixel buffers for a compression session.
- [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md): Presents frames to the compression session.
- [VTCompressionSessionEncodeFrameWithOutputHandler](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_infoflagsout_outputhandler_%29.md): Presents frames to the compression session and invokes the output callback when compression is complete.
- [VTCompressionSessionCompleteFrames](vtcompressionsessioncompleteframes%28__untilpresentationtimestamp_%29.md): Forces the compression session to complete the encoding of frames.
