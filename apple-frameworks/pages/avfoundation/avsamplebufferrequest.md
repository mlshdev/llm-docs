> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrequest](https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest)

# AVSampleBufferRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that describes a sample buffer creation request.

## Declaration

```swift
class AVSampleBufferRequest
```

## Topics

### Creating a request

- [init(start:)](avsamplebufferrequest/init%28start_%29.md): Creates a newly allocated sample buffer request with the specified sample cursor.

### Configuring sample buffer request parameters

- [direction](avsamplebufferrequest/direction-swift.property.md): The buffer sample direction.
- [AVSampleBufferRequest.Direction](avsamplebufferrequest/direction-swift.enum.md): The modes that describe the buffer request direction.
- [limitCursor](avsamplebufferrequest/limitcursor.md): The limiting position for sample loading.
- [maxSampleCount](avsamplebufferrequest/maxsamplecount.md): The maximum number of samples to load.
- [mode](avsamplebufferrequest/mode-swift.property.md): The sample buffer request mode.
- [AVSampleBufferRequest.Mode](avsamplebufferrequest/mode-swift.enum.md): The modes in which a sample buffer generator processes a request.
- [overrideTime](avsamplebufferrequest/overridetime.md): The deadline for sample data and output PTS for the sample buffer.
- [preferredMinSampleCount](avsamplebufferrequest/preferredminsamplecount.md): The preferred minimum number of samples to load.
- [startCursor](avsamplebufferrequest/startcursor.md): The starting cursor position.

### Initializers

- [init(startCursor:)](avsamplebufferrequest/init%28startcursor_%29.md)

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

## See Also

### Sample buffer generation

- [Playing custom audio with your own player](../avfaudio/playing-custom-audio-with-your-own-player.md): Construct an audio player to play your custom audio data, and optionally take advantage of the advanced features of AirPlay 2.
- [AVSampleBufferGenerator](avsamplebuffergenerator.md): An object that creates sample buffers.
- [AVSampleBufferGeneratorBatch](avsamplebuffergeneratorbatch.md): An object that generates sample buffers in a batch.

# AVSampleBufferRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that describes a sample buffer creation request.

## Declaration

```objectivec
@interface AVSampleBufferRequest : NSObject
```

## Topics

### Creating a request

- [initWithStartCursor:](avsamplebufferrequest/init%28start_%29.md): Creates a newly allocated sample buffer request with the specified sample cursor.

### Configuring sample buffer request parameters

- [direction](avsamplebufferrequest/direction-swift.property.md): The buffer sample direction.
- [AVSampleBufferRequestDirection](avsamplebufferrequest/direction-swift.enum.md): The modes that describe the buffer request direction.
- [limitCursor](avsamplebufferrequest/limitcursor.md): The limiting position for sample loading.
- [maxSampleCount](avsamplebufferrequest/maxsamplecount.md): The maximum number of samples to load.
- [mode](avsamplebufferrequest/mode-swift.property.md): The sample buffer request mode.
- [AVSampleBufferRequestMode](avsamplebufferrequest/mode-swift.enum.md): The modes in which a sample buffer generator processes a request.
- [overrideTime](avsamplebufferrequest/overridetime.md): The deadline for sample data and output PTS for the sample buffer.
- [preferredMinSampleCount](avsamplebufferrequest/preferredminsamplecount.md): The preferred minimum number of samples to load.
- [startCursor](avsamplebufferrequest/startcursor.md): The starting cursor position.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sample buffer generation

- [Playing custom audio with your own player](../avfaudio/playing-custom-audio-with-your-own-player.md): Construct an audio player to play your custom audio data, and optionally take advantage of the advanced features of AirPlay 2.
- [AVSampleBufferGenerator](avsamplebuffergenerator.md): An object that creates sample buffers.
- [AVSampleBufferGeneratorBatch](avsamplebuffergeneratorbatch.md): An object that generates sample buffers in a batch.
