> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionsessiondecodeframe(_:samplebuffer:flags:infoflagsout:outputhandler:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessiondecodeframe(_:samplebuffer:flags:infoflagsout:outputhandler:))

# VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:outputHandler:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.2+ · visionOS 1.0+

Decompresses a video frame and invokes the output callback when the decompression completes.

## Declaration

```swift
func VTDecompressionSessionDecodeFrame(_ session: VTDecompressionSession, sampleBuffer: CMSampleBuffer, flags decodeFlags: VTDecodeFrameFlags, infoFlagsOut: UnsafeMutablePointer<VTDecodeInfoFlags>?, outputHandler: @escaping VTDecompressionOutputHandler) -> OSStatus
```

## Parameters

- `session`: The decompression session.
- `sampleBuffer`: A [CMSampleBuffer](../coremedia/cmsamplebuffer.md) object containing one or more video frames.
- `decodeFlags`: A bitfield of directives to the decompression session and decoder.

  The [kVTDecodeFrame_EnableAsynchronousDecompression](vtdecodeframeflags/kvtdecodeframe_enableasynchronousdecompression.md) bit indicates whether the video decoder may decompress the frame asynchronously.

  The [kVTDecodeFrame_EnableTemporalProcessing](vtdecodeframeflags/kvtdecodeframe_enabletemporalprocessing.md) bit indicates whether the decoder may delay calls to the output callback so as to enable processing in temporal (display) order.

  If both flags are clear, the decompression shall complete and your output callback function will be called before `VTDecompressionSessionDecodeFrame` returns. If either flag is set, `VTDecompressionSessionDecodeFrame` may return before the output callback function is called.
- `infoFlagsOut`: A [VTEncodeInfoFlags](vtencodeinfoflags.md) pointer to receive information about the decode operation.

  The [asynchronous](vtdecodeinfoflags/asynchronous.md) bit may be set if the decode is (or was) running asynchronously.

  The [frameDropped](vtdecodeinfoflags/framedropped.md) bit may be set if the frame was dropped (synchronously).

  Pass `NULL` if you do not want to receive this information.
- `outputHandler`: The block to be called when decoding the frame is completed.

<a id="return-value"></a>

## Return Value

An `OSStatus` value that indicates the result of the operation.

<a id="Discussion"></a>

## Discussion

This function cannot be called with a session created with a [VTDecompressionOutputCallbackRecord](vtdecompressionoutputcallbackrecord.md).

## See Also

### Decoding Frames

- [VTDecompressionSessionCanAcceptFormatDescription(\_:formatDescription:)](vtdecompressionsessioncanacceptformatdescription%28__formatdescription_%29.md): Indicates whether the session can decode frames with the given format description.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md): Decompresses a video frame.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_framerefcon_infoflagsout_%29.md)
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_infoflagsout_outputhandler_%29.md)
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:completionHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_completionhandler_%29.md): Decompresses a video frame and calls the provided output closure when decompression completes.
- [VTDecompressionSessionFinishDelayedFrames(\_:)](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionWaitForAsynchronousFrames(\_:)](vtdecompressionsessionwaitforasynchronousframes%28__%29.md): Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.
- [VTDecompressionSessionCopyBlackPixelBuffer(\_:pixelBufferOut:)](vtdecompressionsessioncopyblackpixelbuffer%28__pixelbufferout_%29.md): Copies a black pixel buffer from the decompression session.

# VTDecompressionSessionDecodeFrameWithOutputHandler (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 10.2+ · visionOS 1.0+

Decompresses a video frame and invokes the output callback when the decompression completes.

## Declaration

```objectivec
extern OSStatus VTDecompressionSessionDecodeFrameWithOutputHandler(VTDecompressionSessionRef session, CMSampleBufferRef sampleBuffer, VTDecodeFrameFlags decodeFlags, VTDecodeInfoFlags *infoFlagsOut, VTDecompressionOutputHandler outputHandler);
```

## Parameters

- `session`: The decompression session.
- `sampleBuffer`: A [CMSampleBufferRef](../coremedia/cmsamplebuffer.md) object containing one or more video frames.
- `decodeFlags`: A bitfield of directives to the decompression session and decoder.

  The [kVTDecodeFrame_EnableAsynchronousDecompression](vtdecodeframeflags/kvtdecodeframe_enableasynchronousdecompression.md) bit indicates whether the video decoder may decompress the frame asynchronously.

  The [kVTDecodeFrame_EnableTemporalProcessing](vtdecodeframeflags/kvtdecodeframe_enabletemporalprocessing.md) bit indicates whether the decoder may delay calls to the output callback so as to enable processing in temporal (display) order.

  If both flags are clear, the decompression shall complete and your output callback function will be called before `VTDecompressionSessionDecodeFrame` returns. If either flag is set, `VTDecompressionSessionDecodeFrame` may return before the output callback function is called.
- `infoFlagsOut`: A [VTEncodeInfoFlags](vtencodeinfoflags.md) pointer to receive information about the decode operation.

  The [kVTDecodeInfo_Asynchronous](vtdecodeinfoflags/asynchronous.md) bit may be set if the decode is (or was) running asynchronously.

  The [kVTDecodeInfo_FrameDropped](vtdecodeinfoflags/framedropped.md) bit may be set if the frame was dropped (synchronously).

  Pass `NULL` if you do not want to receive this information.
- `outputHandler`: The block to be called when decoding the frame is completed.

<a id="return-value"></a>

## Return Value

An `OSStatus` value that indicates the result of the operation.

<a id="Discussion"></a>

## Discussion

This function cannot be called with a session created with a [VTDecompressionOutputCallbackRecord](vtdecompressionoutputcallbackrecord.md).

## See Also

### Decoding Frames

- [VTDecompressionSessionCanAcceptFormatDescription](vtdecompressionsessioncanacceptformatdescription%28__formatdescription_%29.md): Indicates whether the session can decode frames with the given format description.
- [VTDecompressionSessionDecodeFrame](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md): Decompresses a video frame.
- [VTDecompressionSessionDecodeFrameWithOptions](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_framerefcon_infoflagsout_%29.md)
- [VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_infoflagsout_outputhandler_%29.md)
- [VTDecompressionSessionFinishDelayedFrames](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionWaitForAsynchronousFrames](vtdecompressionsessionwaitforasynchronousframes%28__%29.md): Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.
- [VTDecompressionSessionCopyBlackPixelBuffer](vtdecompressionsessioncopyblackpixelbuffer%28__pixelbufferout_%29.md): Copies a black pixel buffer from the decompression session.
