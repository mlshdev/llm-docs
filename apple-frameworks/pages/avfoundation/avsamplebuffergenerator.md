> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffergenerator](https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator)

# AVSampleBufferGenerator (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that creates sample buffers.

## Declaration

```swift
class AVSampleBufferGenerator
```

<a id="overview"></a>

## Overview

Each request for `CMSampleBuffer` creation is described in an `AVSampleBufferRequest` object. The [CMSampleBuffer](../coremedia/cmsamplebuffer.md) opaque objects are returned synchronously. If requested, sample data may be loaded asynchronously (depending on file format support).

## Topics

### Creating sample buffer generators

- [init(asset:timebase:)](avsamplebuffergenerator/init%28asset_timebase_%29.md): Creates a new sample buffer generator.

### Creating a sample buffer

- [makeSampleBuffer(for:)](avsamplebuffergenerator/makesamplebuffer%28for_%29.md): Creates a sample buffer, and attempts to load its data asynchronously if requested.
- [makeBatch()](avsamplebuffergenerator/makebatch%28%29.md): Creates a batch object to handle generating multiple sample buffers.
- [makeSampleBuffer(for:addTo:)](avsamplebuffergenerator/makesamplebuffer%28for_addto_%29.md): Creates a sample buffer and attempts to defer I/O for its data.
- [createSampleBuffer(for:)](avsamplebuffergenerator/createsamplebuffer%28for_%29.md): Deprecated. Creates a new sample buffer reference for the specified buffer request.

### Retrieving sample buffer data

- [notifyOfDataReady(for:completionHandler:)](avsamplebuffergenerator/notifyofdataready%28for_completionhandler_%29.md): Notifies the sample buffer generator when data is ready for the sample buffer reference or an error has occurred.

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
- [AVSampleBufferGeneratorBatch](avsamplebuffergeneratorbatch.md): An object that generates sample buffers in a batch.

# AVSampleBufferGenerator (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that creates sample buffers.

## Declaration

```objectivec
@interface AVSampleBufferGenerator : NSObject
```

<a id="overview"></a>

## Overview

Each request for `CMSampleBuffer` creation is described in an `AVSampleBufferRequest` object. The [CMSampleBufferRef](../coremedia/cmsamplebuffer.md) opaque objects are returned synchronously. If requested, sample data may be loaded asynchronously (depending on file format support).

## Topics

### Creating sample buffer generators

- [initWithAsset:timebase:](avsamplebuffergenerator/init%28asset_timebase_%29.md): Creates a new sample buffer generator.

### Creating a sample buffer

- [createSampleBufferForRequest:error:](avsamplebuffergenerator/makesamplebuffer%28for_%29.md): Creates a sample buffer, and attempts to load its data asynchronously if requested.
- [makeBatch](avsamplebuffergenerator/makebatch%28%29.md): Creates a batch object to handle generating multiple sample buffers.
- [createSampleBufferForRequest:addingToBatch:error:](avsamplebuffergenerator/makesamplebuffer%28for_addto_%29.md): Creates a sample buffer and attempts to defer I/O for its data.
- [createSampleBufferForRequest:](avsamplebuffergenerator/createsamplebuffer%28for_%29.md): Deprecated. Creates a new sample buffer reference for the specified buffer request.

### Retrieving sample buffer data

- [notifyOfDataReadyForSampleBuffer:completionHandler:](avsamplebuffergenerator/notifyofdataready%28for_completionhandler_%29.md): Notifies the sample buffer generator when data is ready for the sample buffer reference or an error has occurred.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sample buffer generation

- [Playing custom audio with your own player](../avfaudio/playing-custom-audio-with-your-own-player.md): Construct an audio player to play your custom audio data, and optionally take advantage of the advanced features of AirPlay 2.
- [AVSampleBufferRequest](avsamplebufferrequest.md): An object that describes a sample buffer creation request.
- [AVSampleBufferGeneratorBatch](avsamplebuffergeneratorbatch.md): An object that generates sample buffers in a batch.
