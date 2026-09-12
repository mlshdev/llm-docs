> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecodeinfoflags](https://developer.apple.com/documentation/videotoolbox/vtdecodeinfoflags)

# VTDecodeInfoFlags (Swift)

**Framework:** Video Toolbox  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Flags that provide information about the status of a decode operation.

## Declaration

```swift
struct VTDecodeInfoFlags
```

## Topics

### Flag values

- [asynchronous](vtdecodeinfoflags/asynchronous.md): A flag that indicates the decode operation ran asynchronously.
- [frameDropped](vtdecodeinfoflags/framedropped.md): A flag that indicates the decode operation dropped a frame.
- [skippedLeadingFrameDropped](vtdecodeinfoflags/skippedleadingframedropped.md): A flag that indicates whether the decode process skips leading frames after dropping a synchronization frame.
- [imageBufferModifiable](vtdecodeinfoflags/imagebuffermodifiable.md): A flag that indicates the image buffer is safe to modify.

### Initializers

- [init(rawValue:)](vtdecodeinfoflags/init%28rawvalue_%29.md): Creates a flag from a raw unsigned-integer value.

### Type Properties

- [frameInterrupted](vtdecodeinfoflags/frameinterrupted.md)

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
- [VTDecodeFrameFlags](vtdecodeframeflags.md): Flags to pass to a decompression session and the video decoder.
- [VTDecompressionOutputCallback](vtdecompressionoutputcallback.md): The prototype for the callback invoked when frame decompression is complete.
- [VTDecompressionOutputCallbackRecord](vtdecompressionoutputcallbackrecord.md)
- [VTDecompressionOutputHandler](vtdecompressionoutputhandler.md): The prototype for the block invoked when frame decompression is complete.

# VTDecodeInfoFlags (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Flags that provide information about the status of a decode operation.

## Declaration

```objectivec
enum VTDecodeInfoFlags : UInt32;
```

## Topics

### Flag values

- [kVTDecodeInfo_Asynchronous](vtdecodeinfoflags/asynchronous.md): A flag that indicates the decode operation ran asynchronously.
- [kVTDecodeInfo_FrameDropped](vtdecodeinfoflags/framedropped.md): A flag that indicates the decode operation dropped a frame.
- [kVTDecodeInfo_SkippedLeadingFrameDropped](vtdecodeinfoflags/skippedleadingframedropped.md): A flag that indicates whether the decode process skips leading frames after dropping a synchronization frame.
- [kVTDecodeInfo_ImageBufferModifiable](vtdecodeinfoflags/imagebuffermodifiable.md): A flag that indicates the image buffer is safe to modify.

### Enumeration Cases

- [kVTDecodeInfo_FrameInterrupted](vtdecodeinfoflags/frameinterrupted.md)

## See Also

### Data Types

- [VTDecompressionSessionRef](vtdecompressionsession.md): A reference to a decompression session.
- [VTDecodeFrameFlags](vtdecodeframeflags.md): Flags to pass to a decompression session and the video decoder.
- [VTDecompressionOutputCallback](vtdecompressionoutputcallback.md): The prototype for the callback invoked when frame decompression is complete.
- [VTDecompressionOutputCallbackRecord](vtdecompressionoutputcallbackrecord.md)
- [VTDecompressionOutputHandler](vtdecompressionoutputhandler.md): The prototype for the block invoked when frame decompression is complete.
