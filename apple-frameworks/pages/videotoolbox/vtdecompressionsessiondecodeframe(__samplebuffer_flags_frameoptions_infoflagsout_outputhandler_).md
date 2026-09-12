> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionsessiondecodeframe(_:samplebuffer:flags:frameoptions:infoflagsout:outputhandler:)](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsessiondecodeframe(_:samplebuffer:flags:frameoptions:infoflagsout:outputhandler:))

# VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:infoFlagsOut:outputHandler:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func VTDecompressionSessionDecodeFrame(_ session: VTDecompressionSession, sampleBuffer: CMSampleBuffer, flags decodeFlags: VTDecodeFrameFlags, frameOptions: CFDictionary?, infoFlagsOut: UnsafeMutablePointer<VTDecodeInfoFlags>?, outputHandler: @escaping VTDecompressionOutputHandler) -> OSStatus
```

## Parameters

- `session`: The decompression session.
- `sampleBuffer`: A CMSampleBuffer containing one or more video frames.
- `decodeFlags`: A bitfield of directives to the decompression session and decoder. The kVTDecodeFrame_EnableAsynchronousDecompression bit indicates whether the video decoder may decompress the frame asynchronously. The kVTDecodeFrame_EnableTemporalProcessing bit indicates whether the decoder may delay calls to the output callback so as to enable processing in temporal (display) order. If both flags are clear, the decompression shall complete and your output callback function will be called before VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler returns. If either flag is set, VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler may return before the output callback function is called.
- `frameOptions`: Contains key/value pairs specifying additional options for decoding this frame. Only keys with `kVTDecodeFrameOptionKey_` prefix should be used in this dictionary.
- `infoFlagsOut`: Points to a VTDecodeInfoFlags to receive information about the decode operation. The kVTDecodeInfo_Asynchronous bit may be set if the decode is (or was) running asynchronously. The kVTDecodeInfo_FrameDropped bit may be set if the frame was dropped (synchronously). Pass NULL if you do not want to receive this information.
- `outputHandler`: The block to be called when decoding the frame is completed.  If the VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler call returns an error, the block will not be called.

<a id="discussion"></a>

## Discussion

Decompresses a video frame.

Cannot be called with a session created with a VTDecompressionOutputCallbackRecord. If the VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler call returns an error, the block will not be called.

## See Also

### Decoding Frames

- [VTDecompressionSessionCanAcceptFormatDescription(\_:formatDescription:)](vtdecompressionsessioncanacceptformatdescription%28__formatdescription_%29.md): Indicates whether the session can decode frames with the given format description.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md): Decompresses a video frame.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:frameOptions:frameRefcon:infoFlagsOut:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_framerefcon_infoflagsout_%29.md)
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:outputHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md): Decompresses a video frame and invokes the output callback when the decompression completes.
- [VTDecompressionSessionDecodeFrame(\_:sampleBuffer:flags:infoFlagsOut:completionHandler:)](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_completionhandler_%29.md): Decompresses a video frame and calls the provided output closure when decompression completes.
- [VTDecompressionSessionFinishDelayedFrames(\_:)](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionWaitForAsynchronousFrames(\_:)](vtdecompressionsessionwaitforasynchronousframes%28__%29.md): Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.
- [VTDecompressionSessionCopyBlackPixelBuffer(\_:pixelBufferOut:)](vtdecompressionsessioncopyblackpixelbuffer%28__pixelbufferout_%29.md): Copies a black pixel buffer from the decompression session.

# VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
extern OSStatus VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler(VTDecompressionSessionRef session, CMSampleBufferRef sampleBuffer, VTDecodeFrameFlags decodeFlags, CFDictionaryRef frameOptions, VTDecodeInfoFlags *infoFlagsOut, VTDecompressionOutputHandler outputHandler);
```

## Parameters

- `session`: The decompression session.
- `sampleBuffer`: A CMSampleBuffer containing one or more video frames.
- `decodeFlags`: A bitfield of directives to the decompression session and decoder. The kVTDecodeFrame_EnableAsynchronousDecompression bit indicates whether the video decoder may decompress the frame asynchronously. The kVTDecodeFrame_EnableTemporalProcessing bit indicates whether the decoder may delay calls to the output callback so as to enable processing in temporal (display) order. If both flags are clear, the decompression shall complete and your output callback function will be called before VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler returns. If either flag is set, VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler may return before the output callback function is called.
- `frameOptions`: Contains key/value pairs specifying additional options for decoding this frame. Only keys with `kVTDecodeFrameOptionKey_` prefix should be used in this dictionary.
- `infoFlagsOut`: Points to a VTDecodeInfoFlags to receive information about the decode operation. The kVTDecodeInfo_Asynchronous bit may be set if the decode is (or was) running asynchronously. The kVTDecodeInfo_FrameDropped bit may be set if the frame was dropped (synchronously). Pass NULL if you do not want to receive this information.
- `outputHandler`: The block to be called when decoding the frame is completed.  If the VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler call returns an error, the block will not be called.

<a id="discussion"></a>

## Discussion

Decompresses a video frame.

Cannot be called with a session created with a VTDecompressionOutputCallbackRecord. If the VTDecompressionSessionDecodeFrameWithOptionsAndOutputHandler call returns an error, the block will not be called.

## See Also

### Decoding Frames

- [VTDecompressionSessionCanAcceptFormatDescription](vtdecompressionsessioncanacceptformatdescription%28__formatdescription_%29.md): Indicates whether the session can decode frames with the given format description.
- [VTDecompressionSessionDecodeFrame](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_framerefcon_infoflagsout_%29.md): Decompresses a video frame.
- [VTDecompressionSessionDecodeFrameWithOptions](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_frameoptions_framerefcon_infoflagsout_%29.md)
- [VTDecompressionSessionDecodeFrameWithOutputHandler](vtdecompressionsessiondecodeframe%28__samplebuffer_flags_infoflagsout_outputhandler_%29.md): Decompresses a video frame and invokes the output callback when the decompression completes.
- [VTDecompressionSessionFinishDelayedFrames](vtdecompressionsessionfinishdelayedframes%28__%29.md): Directs the decompression session to emit all delayed frames.
- [VTDecompressionSessionWaitForAsynchronousFrames](vtdecompressionsessionwaitforasynchronousframes%28__%29.md): Waits for any and all outstanding asynchronous and delayed frames to complete, then returns.
- [VTDecompressionSessionCopyBlackPixelBuffer](vtdecompressionsessioncopyblackpixelbuffer%28__pixelbufferout_%29.md): Copies a black pixel buffer from the decompression session.
