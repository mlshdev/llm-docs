> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtdecompressionsession](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession)

# VTDecompressionSession (Swift)

**Framework:** Video Toolbox  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A reference to a decompression session.

## Declaration

```swift
class VTDecompressionSession
```

<a id="overview"></a>

## Overview

A decompression session supports the decompression of a sequence of video frames. The session is a reference-counted Core Foundation (CF) object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Data Types

- [VTDecodeFrameFlags](vtdecodeframeflags.md): Flags to pass to a decompression session and the video decoder.
- [VTDecodeInfoFlags](vtdecodeinfoflags.md): Flags that provide information about the status of a decode operation.
- [VTDecompressionOutputCallback](vtdecompressionoutputcallback.md): The prototype for the callback invoked when frame decompression is complete.
- [VTDecompressionOutputCallbackRecord](vtdecompressionoutputcallbackrecord.md)
- [VTDecompressionOutputHandler](vtdecompressionoutputhandler.md): The prototype for the block invoked when frame decompression is complete.

# VTDecompressionSessionRef (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A reference to a decompression session.

## Declaration

```objectivec
typedef struct OpaqueVTDecompressionSession * VTDecompressionSessionRef;
```

<a id="overview"></a>

## Overview

A decompression session supports the decompression of a sequence of video frames. The session is a reference-counted Core Foundation (CF) object.

## See Also

### Data Types

- [VTDecodeFrameFlags](vtdecodeframeflags.md): Flags to pass to a decompression session and the video decoder.
- [VTDecodeInfoFlags](vtdecodeinfoflags.md): Flags that provide information about the status of a decode operation.
- [VTDecompressionOutputCallback](vtdecompressionoutputcallback.md): The prototype for the callback invoked when frame decompression is complete.
- [VTDecompressionOutputCallbackRecord](vtdecompressionoutputcallbackrecord.md)
- [VTDecompressionOutputHandler](vtdecompressionoutputhandler.md): The prototype for the block invoked when frame decompression is complete.
