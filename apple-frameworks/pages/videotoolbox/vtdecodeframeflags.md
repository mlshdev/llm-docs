> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecodeframeflags](https://developer.apple.com/documentation/videotoolbox/vtdecodeframeflags)

# VTDecodeFrameFlags (Swift)

**Framework:** Video Toolbox  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Flags to pass to a decompression session and the video decoder.

## Declaration

```swift
struct VTDecodeFrameFlags
```

## Topics

### Flags

- [init(rawValue:)](vtdecodeframeflags/init%28rawvalue_%29.md): Creates a flags structure with a raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Data Types

- [VTDecompressionSession](vtdecompressionsession.md): A reference to a decompression session.
- [VTDecodeInfoFlags](vtdecodeinfoflags.md): Flags that provide information about the status of a decode operation.
- [VTDecompressionOutputCallback](vtdecompressionoutputcallback.md): The prototype for the callback invoked when frame decompression is complete.
- [VTDecompressionOutputCallbackRecord](vtdecompressionoutputcallbackrecord.md)
- [VTDecompressionOutputHandler](vtdecompressionoutputhandler.md): The prototype for the block invoked when frame decompression is complete.

# VTDecodeFrameFlags (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Flags to pass to a decompression session and the video decoder.

## Declaration

```objectivec
enum VTDecodeFrameFlags : uint32_t;
```

## Topics

### Flags

- [kVTDecodeFrame_1xRealTimePlayback](vtdecodeframeflags/kvtdecodeframe_1xrealtimeplayback.md): A flag that provides a hint to the video decoder that it’s ok to use a low-power mode that can’t decode faster than realtime.
- [kVTDecodeFrame_DoNotOutputFrame](vtdecodeframeflags/kvtdecodeframe_donotoutputframe.md): A flag that provides a hint to the decompression session and video decoder not to return a frame.
- [kVTDecodeFrame_EnableAsynchronousDecompression](vtdecodeframeflags/kvtdecodeframe_enableasynchronousdecompression.md): A flag that indicates to enable asynchronous decompression.
- [kVTDecodeFrame_EnableTemporalProcessing](vtdecodeframeflags/kvtdecodeframe_enabletemporalprocessing.md): A flag that indicates to enable temporal processing.

## See Also

### Data Types

- [VTDecompressionSessionRef](vtdecompressionsession.md): A reference to a decompression session.
- [VTDecodeInfoFlags](vtdecodeinfoflags.md): Flags that provide information about the status of a decode operation.
- [VTDecompressionOutputCallback](vtdecompressionoutputcallback.md): The prototype for the callback invoked when frame decompression is complete.
- [VTDecompressionOutputCallbackRecord](vtdecompressionoutputcallbackrecord.md)
- [VTDecompressionOutputHandler](vtdecompressionoutputhandler.md): The prototype for the block invoked when frame decompression is complete.
