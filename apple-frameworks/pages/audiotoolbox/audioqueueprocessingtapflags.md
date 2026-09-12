> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueprocessingtapflags](https://developer.apple.com/documentation/audiotoolbox/audioqueueprocessingtapflags)

# AudioQueueProcessingTapFlags (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct AudioQueueProcessingTapFlags
```

## Topics

### Constants

- [endOfStream](audioqueueprocessingtapflags/endofstream.md)
- [postEffects](audioqueueprocessingtapflags/posteffects.md)
- [preEffects](audioqueueprocessingtapflags/preeffects.md)
- [siphon](audioqueueprocessingtapflags/siphon.md)
- [startOfStream](audioqueueprocessingtapflags/startofstream.md)

### Initializers

- [init(rawValue:)](audioqueueprocessingtapflags/init%28rawvalue_%29.md)

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

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueBuffer](audioqueuebuffer.md): Defines an audio queue buffer.
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md): Specifies the current level metering information for one channel of an audio queue.
- [AudioQueueParameterEvent](audioqueueparameterevent.md): Specifies an audio queue parameter and associated value.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapCallback](audioqueueprocessingtapcallback.md)
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)

# AudioQueueProcessingTapFlags (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
enum AudioQueueProcessingTapFlags : UInt32;
```

## Topics

### Constants

- [kAudioQueueProcessingTap_EndOfStream](audioqueueprocessingtapflags/endofstream.md)
- [kAudioQueueProcessingTap_PostEffects](audioqueueprocessingtapflags/posteffects.md)
- [kAudioQueueProcessingTap_PreEffects](audioqueueprocessingtapflags/preeffects.md)
- [kAudioQueueProcessingTap_Siphon](audioqueueprocessingtapflags/siphon.md)
- [kAudioQueueProcessingTap_StartOfStream](audioqueueprocessingtapflags/startofstream.md)

## See Also

### Data Types

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueBuffer](audioqueuebuffer.md): Defines an audio queue buffer.
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md): Specifies the current level metering information for one channel of an audio queue.
- [AudioQueueParameterEvent](audioqueueparameterevent.md): Specifies an audio queue parameter and associated value.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapCallback](audioqueueprocessingtapcallback.md)
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)
