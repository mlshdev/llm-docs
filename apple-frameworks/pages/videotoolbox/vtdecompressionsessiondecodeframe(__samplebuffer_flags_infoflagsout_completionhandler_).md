> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionsessiondecodeframe(_:samplebuffer:flags:infoflagsout:completionhandler:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessiondecodeframe(_:samplebuffer:flags:infoflagsout:completionhandler:))

# VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:completionHandler:)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Decompresses a video frame and calls the provided output closure when decompression completes.

## Declaration

```swift
func VTDecompressionSessionDecodeFrame(_ session: VTDecompressionSession, sampleBuffer: CMSampleBuffer, flags decodeFlags: VTDecodeFrameFlags, infoFlagsOut: UnsafeMutablePointer<VTDecodeInfoFlags>?, completionHandler: @escaping @Sendable (OSStatus, VTDecodeInfoFlags, CVImageBuffer?, [CMTaggedBuffer]?, CMTime, CMTime) -> Void) -> OSStatus
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
- `completionHandler`: The closure to be called when decoding the frame is completed. If the VTDecompressionSessionDecodeFrame call returns an error, the closure will not be called.

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
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md): Decompresses a video frame and invokes the output callback when the decompression completes.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_infoflagsout_outputhandler_%29.md)
- [VTDecompressionSessionFinishDelayedFrames(\_:)](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionWaitForAsynchronousFrames(\_:)](vtdecompressionsessionwaitforasynchronousframes%28__%29.md): Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.
- [VTDecompressionSessionCopyBlackPixelBuffer(\_:pixelBufferOut:)](vtdecompressionsessioncopyblackpixelbuffer%28__pixelbufferout_%29.md): Copies a black pixel buffer from the decompression session.
