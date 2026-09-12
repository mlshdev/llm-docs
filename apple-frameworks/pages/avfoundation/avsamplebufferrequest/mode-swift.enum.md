> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrequest/mode-swift.enum](https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/mode-swift.enum)

# AVSampleBufferRequest.Mode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes in which a sample buffer generator processes a request.

## Declaration

```swift
enum Mode
```

## Topics

### Mode scheduling

- [AVSampleBufferRequest.Mode.immediate](mode-swift.enum/immediate.md): A mode that indicates that sample buffer creation requests load data as soon as possible.
- [AVSampleBufferRequest.Mode.scheduled](mode-swift.enum/scheduled.md): A mode that indicates that sample buffer creation requests load data according to a scheduled deadline.
- [AVSampleBufferRequest.Mode.opportunistic](mode-swift.enum/opportunistic.md): A mode that indicates that opportunistic sample buffer creation requests load data as soon as possible.

### Initializers

- [init(rawValue:)](mode-swift.enum/init%28rawvalue_%29.md)

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
- [AVSampleBufferRequest.Direction](direction-swift.enum.md): The modes that describe the buffer request direction.
- [limitCursor](limitcursor.md): The limiting position for sample loading.
- [maxSampleCount](maxsamplecount.md): The maximum number of samples to load.
- [mode](mode-swift.property.md): The sample buffer request mode.
- [overrideTime](overridetime.md): The deadline for sample data and output PTS for the sample buffer.
- [preferredMinSampleCount](preferredminsamplecount.md): The preferred minimum number of samples to load.
- [startCursor](startcursor.md): The starting cursor position.

# AVSampleBufferRequestMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The modes in which a sample buffer generator processes a request.

## Declaration

```objectivec
enum AVSampleBufferRequestMode : NSInteger;
```

## Topics

### Mode scheduling

- [AVSampleBufferRequestModeImmediate](mode-swift.enum/immediate.md): A mode that indicates that sample buffer creation requests load data as soon as possible.
- [AVSampleBufferRequestModeScheduled](mode-swift.enum/scheduled.md): A mode that indicates that sample buffer creation requests load data according to a scheduled deadline.
- [AVSampleBufferRequestModeOpportunistic](mode-swift.enum/opportunistic.md): A mode that indicates that opportunistic sample buffer creation requests load data as soon as possible.

## See Also

### Configuring sample buffer request parameters

- [direction](direction-swift.property.md): The buffer sample direction.
- [AVSampleBufferRequestDirection](direction-swift.enum.md): The modes that describe the buffer request direction.
- [limitCursor](limitcursor.md): The limiting position for sample loading.
- [maxSampleCount](maxsamplecount.md): The maximum number of samples to load.
- [mode](mode-swift.property.md): The sample buffer request mode.
- [overrideTime](overridetime.md): The deadline for sample data and output PTS for the sample buffer.
- [preferredMinSampleCount](preferredminsamplecount.md): The preferred minimum number of samples to load.
- [startCursor](startcursor.md): The starting cursor position.
