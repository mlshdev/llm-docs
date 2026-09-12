> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffergeneratorbatch](https://developer.apple.com/documentation/avfoundation/avsamplebuffergeneratorbatch)

# AVSampleBufferGeneratorBatch (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that generates sample buffers in a batch.

## Declaration

```swift
class AVSampleBufferGeneratorBatch
```

<a id="overview"></a>

## Overview

The benefit of batching is it aggregates adjacent I/O requests and overlaps them when possible for all sample buffers within the batch.

## Topics

### Preparing a batch

- [makeDataReady(completionHandler:)](avsamplebuffergeneratorbatch/makedataready%28completionhandler_%29.md): Loads sample data asynchronously for all sample buffers within a batch.

### Canceling a batch

- [cancel()](avsamplebuffergeneratorbatch/cancel%28%29.md): Cancels any I/O for this batch.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sample buffer generation

- [Playing custom audio with your own player](../avfaudio/playing-custom-audio-with-your-own-player.md): Construct an audio player to play your custom audio data, and optionally take advantage of the advanced features of AirPlay 2.
- [AVSampleBufferRequest](avsamplebufferrequest.md): An object that describes a sample buffer creation request.
- [AVSampleBufferGenerator](avsamplebuffergenerator.md): An object that creates sample buffers.

# AVSampleBufferGeneratorBatch (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that generates sample buffers in a batch.

## Declaration

```objectivec
@interface AVSampleBufferGeneratorBatch : NSObject
```

<a id="overview"></a>

## Overview

The benefit of batching is it aggregates adjacent I/O requests and overlaps them when possible for all sample buffers within the batch.

## Topics

### Preparing a batch

- [makeDataReadyWithCompletionHandler:](avsamplebuffergeneratorbatch/makedataready%28completionhandler_%29.md): Loads sample data asynchronously for all sample buffers within a batch.

### Canceling a batch

- [cancel](avsamplebuffergeneratorbatch/cancel%28%29.md): Cancels any I/O for this batch.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sample buffer generation

- [Playing custom audio with your own player](../avfaudio/playing-custom-audio-with-your-own-player.md): Construct an audio player to play your custom audio data, and optionally take advantage of the advanced features of AirPlay 2.
- [AVSampleBufferRequest](avsamplebufferrequest.md): An object that describes a sample buffer creation request.
- [AVSampleBufferGenerator](avsamplebuffergenerator.md): An object that creates sample buffers.
