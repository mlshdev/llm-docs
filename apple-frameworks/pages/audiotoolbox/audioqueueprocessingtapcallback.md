> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueprocessingtapcallback](https://developer.apple.com/documentation/audiotoolbox/audioqueueprocessingtapcallback)

# AudioQueueProcessingTapCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias AudioQueueProcessingTapCallback = (UnsafeMutableRawPointer, AudioQueueProcessingTapRef, UInt32, UnsafeMutablePointer<AudioTimeStamp>, UnsafeMutablePointer<AudioQueueProcessingTapFlags>, UnsafeMutablePointer<UInt32>, UnsafeMutablePointer<AudioBufferList>) -> Void
```

## See Also

### Data Types

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [AudioQueueBuffer](audioqueuebuffer.md): Defines an audio queue buffer.
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md): Specifies the current level metering information for one channel of an audio queue.
- [AudioQueueParameterEvent](audioqueueparameterevent.md): Specifies an audio queue parameter and associated value.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)

# AudioQueueProcessingTapCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef void (*)(void *, struct OpaqueAudioQueueProcessingTap *, unsigned int, struct AudioTimeStamp *, enum AudioQueueProcessingTapFlags *, unsigned int *, struct AudioBufferList *) AudioQueueProcessingTapCallback;
```

## See Also

### Data Types

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [AudioQueueBuffer](audioqueuebuffer.md): Defines an audio queue buffer.
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md): Specifies the current level metering information for one channel of an audio queue.
- [AudioQueueParameterEvent](audioqueueparameterevent.md): Specifies an audio queue parameter and associated value.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)
