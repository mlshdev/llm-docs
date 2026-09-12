> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuelevelmeterstate](https://developer.apple.com/documentation/audiotoolbox/audioqueuelevelmeterstate)

# AudioQueueLevelMeterState (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies the current level metering information for one channel of an audio queue.

## Declaration

```swift
struct AudioQueueLevelMeterState
```

## Topics

### Initializers

- [init()](audioqueuelevelmeterstate/init%28%29.md)
- [init(mAveragePower:mPeakPower:)](audioqueuelevelmeterstate/init%28maveragepower_mpeakpower_%29.md)

### Instance Properties

- [mAveragePower](audioqueuelevelmeterstate/maveragepower.md): The audio channel’s average RMS power.
- [mPeakPower](audioqueuelevelmeterstate/mpeakpower.md): The audio channel’s peak RMS power.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [AudioQueueBuffer](audioqueuebuffer.md): Defines an audio queue buffer.
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueParameterEvent](audioqueueparameterevent.md): Specifies an audio queue parameter and associated value.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapCallback](audioqueueprocessingtapcallback.md)
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)

# AudioQueueLevelMeterState (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies the current level metering information for one channel of an audio queue.

## Declaration

```objectivec
typedef struct AudioQueueLevelMeterState { ... } AudioQueueLevelMeterState;
```

## Topics

### Instance Properties

- [mAveragePower](audioqueuelevelmeterstate/maveragepower.md): The audio channel’s average RMS power.
- [mPeakPower](audioqueuelevelmeterstate/mpeakpower.md): The audio channel’s peak RMS power.

## See Also

### Data Types

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [AudioQueueBuffer](audioqueuebuffer.md): Defines an audio queue buffer.
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueParameterEvent](audioqueueparameterevent.md): Specifies an audio queue parameter and associated value.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapCallback](audioqueueprocessingtapcallback.md)
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)
