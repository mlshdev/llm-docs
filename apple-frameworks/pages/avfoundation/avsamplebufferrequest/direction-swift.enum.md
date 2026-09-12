> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrequest/direction-swift.enum](https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/direction-swift.enum)

# AVSampleBufferRequest.Direction (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes that describe the buffer request direction.

## Declaration

```swift
enum Direction
```

## Topics

### Buffer direction

- [AVSampleBufferRequest.Direction.forward](direction-swift.enum/forward.md): The number of following samples may be zero or greater.
- [AVSampleBufferRequest.Direction.none](direction-swift.enum/none.md): A single sample will be loaded.
- [AVSampleBufferRequest.Direction.reverse](direction-swift.enum/reverse.md): The number of previous samples may be zero or greater.

### Initializers

- [init(rawValue:)](direction-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring sample buffer request parameters

- [direction](direction-swift.property.md): The buffer sample direction.
- [limitCursor](limitcursor.md): The limiting position for sample loading.
- [maxSampleCount](maxsamplecount.md): The maximum number of samples to load.
- [mode](mode-swift.property.md): The sample buffer request mode.
- [AVSampleBufferRequest.Mode](mode-swift.enum.md): The modes in which a sample buffer generator processes a request.
- [overrideTime](overridetime.md): The deadline for sample data and output PTS for the sample buffer.
- [preferredMinSampleCount](preferredminsamplecount.md): The preferred minimum number of samples to load.
- [startCursor](startcursor.md): The starting cursor position.

# AVSampleBufferRequestDirection (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes that describe the buffer request direction.

## Declaration

```objectivec
enum AVSampleBufferRequestDirection : NSInteger;
```

## Topics

### Buffer direction

- [AVSampleBufferRequestDirectionForward](direction-swift.enum/forward.md): The number of following samples may be zero or greater.
- [AVSampleBufferRequestDirectionNone](direction-swift.enum/none.md): A single sample will be loaded.
- [AVSampleBufferRequestDirectionReverse](direction-swift.enum/reverse.md): The number of previous samples may be zero or greater.

## See Also

### Configuring sample buffer request parameters

- [direction](direction-swift.property.md): The buffer sample direction.
- [limitCursor](limitcursor.md): The limiting position for sample loading.
- [maxSampleCount](maxsamplecount.md): The maximum number of samples to load.
- [mode](mode-swift.property.md): The sample buffer request mode.
- [AVSampleBufferRequestMode](mode-swift.enum.md): The modes in which a sample buffer generator processes a request.
- [overrideTime](overridetime.md): The deadline for sample data and output PTS for the sample buffer.
- [preferredMinSampleCount](preferredminsamplecount.md): The preferred minimum number of samples to load.
- [startCursor](startcursor.md): The starting cursor position.
