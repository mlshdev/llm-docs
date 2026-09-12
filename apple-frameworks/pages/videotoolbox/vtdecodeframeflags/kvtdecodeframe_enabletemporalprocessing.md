> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecodeframeflags/kvtdecodeframe_enabletemporalprocessing](https://developer.apple.com/documentation/videotoolbox/vtdecodeframeflags/kvtdecodeframe_enabletemporalprocessing)

# kVTDecodeFrame_EnableTemporalProcessing

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A flag that indicates to enable temporal processing.

## Declaration

```objectivec
kVTDecodeFrame_EnableTemporalProcessing
```

<a id="Discussion"></a>

## Discussion

With this bit cleared, the video decoder should emit every frame once that frame’s decoding is done–frames may not be delayed indefinitely.  With the bit set, it is legal for the decoder to delay frames indefinitely–at least until [VTDecompressionSessionFinishDelayedFrames](../vtdecompressionsessionfinishdelayedframes%28__%29.md) or [VTDecompressionSessionInvalidate](../vtdecompressionsessioninvalidate%28__%29.md) is called.

## See Also

### Flags

- [kVTDecodeFrame_1xRealTimePlayback](kvtdecodeframe_1xrealtimeplayback.md): A flag that provides a hint to the video decoder that it’s ok to use a low-power mode that can’t decode faster than realtime.
- [kVTDecodeFrame_DoNotOutputFrame](kvtdecodeframe_donotoutputframe.md): A flag that provides a hint to the decompression session and video decoder not to return a frame.
- [kVTDecodeFrame_EnableAsynchronousDecompression](kvtdecodeframe_enableasynchronousdecompression.md): A flag that indicates to enable asynchronous decompression.
