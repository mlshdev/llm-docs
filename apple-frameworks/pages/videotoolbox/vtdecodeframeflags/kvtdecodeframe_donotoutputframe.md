> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecodeframeflags/kvtdecodeframe_donotoutputframe](https://developer.apple.com/documentation/videotoolbox/vtdecodeframeflags/kvtdecodeframe_donotoutputframe)

# kVTDecodeFrame_DoNotOutputFrame

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A flag that provides a hint to the decompression session and video decoder not to return a frame.

## Declaration

```objectivec
kVTDecodeFrame_DoNotOutputFrame
```

<a id="Discussion"></a>

## Discussion

This flag indicates to return NULL for this frame instead of a [CVImageBufferRef](../../corevideo/cvimagebuffer.md).

## See Also

### Flags

- [kVTDecodeFrame_1xRealTimePlayback](kvtdecodeframe_1xrealtimeplayback.md): A flag that provides a hint to the video decoder that it’s ok to use a low-power mode that can’t decode faster than realtime.
- [kVTDecodeFrame_EnableAsynchronousDecompression](kvtdecodeframe_enableasynchronousdecompression.md): A flag that indicates to enable asynchronous decompression.
- [kVTDecodeFrame_EnableTemporalProcessing](kvtdecodeframe_enabletemporalprocessing.md): A flag that indicates to enable temporal processing.
