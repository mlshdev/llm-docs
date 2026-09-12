> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionsessioncopyblackpixelbuffer(_:pixelbufferout:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessioncopyblackpixelbuffer(_:pixelbufferout:))

# VTDecompressionSessionCopyBlackPixelBuffer(\_:pixelBufferOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Copies a black pixel buffer from the decompression session.

## Declaration

```swift
func VTDecompressionSessionCopyBlackPixelBuffer(_ session: VTDecompressionSession, pixelBufferOut: UnsafeMutablePointer<CVPixelBuffer?>) -> OSStatus
```

## Parameters

- `session`: The decompression session.
- `pixelBufferOut`: A pointer to receive the copied pixel buffer.

<a id="return-value"></a>

## Return Value

An `OSStatus` value that indicates the result of the operation.

<a id="Discussion"></a>

## Discussion

The pixel buffer is in the same format as the decompression session.

## See Also

### Decoding Frames

- [VTDecompressionSessionCanAcceptFormatDescription(\_:formatDescription:)](vtdecompressionsessioncanacceptformatdescription%28__formatdescription_%29.md): Indicates whether the session can decode frames with the given format description.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md): Decompresses a video frame.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_framerefcon_infoflagsout_%29.md)
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md): Decompresses a video frame and invokes the output callback when the decompression completes.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_infoflagsout_outputhandler_%29.md)
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:completionHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_completionhandler_%29.md): Decompresses a video frame and calls the provided output closure when decompression completes.
- [VTDecompressionSessionFinishDelayedFrames(\_:)](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionWaitForAsynchronousFrames(\_:)](vtdecompressionsessionwaitforasynchronousframes%28__%29.md): Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.

# VTDecompressionSessionCopyBlackPixelBuffer (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Copies a black pixel buffer from the decompression session.

## Declaration

```objectivec
extern OSStatus VTDecompressionSessionCopyBlackPixelBuffer(VTDecompressionSessionRef session, CVPixelBufferRef*pixelBufferOut);
```

## Parameters

- `session`: The decompression session.
- `pixelBufferOut`: A pointer to receive the copied pixel buffer.

<a id="return-value"></a>

## Return Value

An `OSStatus` value that indicates the result of the operation.

<a id="Discussion"></a>

## Discussion

The pixel buffer is in the same format as the decompression session.

## See Also

### Decoding Frames

- [VTDecompressionSessionCanAcceptFormatDescription](vtdecompressionsessioncanacceptformatdescription%28__formatdescription_%29.md): Indicates whether the session can decode frames with the given format description.
- [VTDecompressionSessionDecodeFrame](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md): Decompresses a video frame.
- [VTDecompressionSessionDecodeFrameWithOptions](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_framerefcon_infoflagsout_%29.md)
- [VTDecompressionSessionDecodeFrameWithOutputHandler](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md): Decompresses a video frame and invokes the output callback when the decompression completes.
- [VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_infoflagsout_outputhandler_%29.md)
- [VTDecompressionSessionFinishDelayedFrames](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionWaitForAsynchronousFrames](vtdecompressionsessionwaitforasynchronousframes%28__%29.md): Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.
