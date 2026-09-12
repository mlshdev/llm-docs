> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionsessionwaitforasynchronousframes(_:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessionwaitforasynchronousframes(_:))

# VTDecompressionSessionWaitForAsynchronousFrames(\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.

## Declaration

```swift
func VTDecompressionSessionWaitForAsynchronousFrames(_ session: VTDecompressionSession) -> OSStatus
```

## Parameters

- `session`: The decompression session.

<a id="return-value"></a>

## Return Value

An `OSStatus` value that indicates the result of the operation.

<a id="Discussion"></a>

## Discussion

This function automatically calls [VTDecompressionSessionFinishDelayedFrames(\_:)](vtdecompressionsessionfinishdelayedframes%28__%29.md),  so clients don’t have to call both.

## See Also

### Decoding Frames

- [VTDecompressionSessionCanAcceptFormatDescription(\_:formatDescription:)](vtdecompressionsessioncanacceptformatdescription%28__formatdescription_%29.md): Indicates whether the session can decode frames with the given format description.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md): Decompresses a video frame.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_framerefcon_infoflagsout_%29.md)
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md): Decompresses a video frame and invokes the output callback when the decompression completes.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_infoflagsout_outputhandler_%29.md)
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:completionHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_completionhandler_%29.md): Decompresses a video frame and calls the provided output closure when decompression completes.
- [VTDecompressionSessionFinishDelayedFrames(\_:)](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionCopyBlackPixelBuffer(\_:pixelBufferOut:)](vtdecompressionsessioncopyblackpixelbuffer%28__pixelbufferout_%29.md): Copies a black pixel buffer from the decompression session.

# VTDecompressionSessionWaitForAsynchronousFrames (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.

## Declaration

```objectivec
extern OSStatus VTDecompressionSessionWaitForAsynchronousFrames(VTDecompressionSessionRef session);
```

## Parameters

- `session`: The decompression session.

<a id="return-value"></a>

## Return Value

An `OSStatus` value that indicates the result of the operation.

<a id="Discussion"></a>

## Discussion

This function automatically calls [VTDecompressionSessionFinishDelayedFrames](vtdecompressionsessionfinishdelayedframes%28__%29.md),  so clients don’t have to call both.

## See Also

### Decoding Frames

- [VTDecompressionSessionCanAcceptFormatDescription](vtdecompressionsessioncanacceptformatdescription%28__formatdescription_%29.md): Indicates whether the session can decode frames with the given format description.
- [VTDecompressionSessionDecodeFrame](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md): Decompresses a video frame.
- [VTDecompressionSessionDecodeFrameWithOptions](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_framerefcon_infoflagsout_%29.md)
- [VTDecompressionSessionDecodeFrameWithOutputHandler](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md): Decompresses a video frame and invokes the output callback when the decompression completes.
- [VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_infoflagsout_outputhandler_%29.md)
- [VTDecompressionSessionFinishDelayedFrames](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionCopyBlackPixelBuffer](vtdecompressionsessioncopyblackpixelbuffer%28__pixelbufferout_%29.md): Copies a black pixel buffer from the decompression session.
