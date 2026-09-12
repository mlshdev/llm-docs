> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueparameterevent](https://developer.apple.com/documentation/audiotoolbox/audioqueueparameterevent)

# AudioQueueParameterEvent (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies an audio queue parameter and associated value.

## Declaration

```swift
struct AudioQueueParameterEvent
```

<a id="overview"></a>

## Overview

You use this structure with the [AudioQueueEnqueueBufferWithParameters(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audioqueueenqueuebufferwithparameters%28____________________%29.md) function. See that function, and [Audio Queue Parameters](1552626-audio-queue-parameters.md), for more information.

## Topics

### Initializers

- [init()](audioqueueparameterevent/init%28%29.md)
- [init(mID:mValue:)](audioqueueparameterevent/init%28mid_mvalue_%29.md)

### Instance Properties

- [mID](audioqueueparameterevent/mid.md): The parameter.
- [mValue](audioqueueparameterevent/mvalue.md): The value of the specified parameter.

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
- [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md): Specifies the current level metering information for one channel of an audio queue.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapCallback](audioqueueprocessingtapcallback.md)
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)

# AudioQueueParameterEvent (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies an audio queue parameter and associated value.

## Declaration

```objectivec
struct AudioQueueParameterEvent;
```

<a id="overview"></a>

## Overview

You use this structure with the [AudioQueueEnqueueBufferWithParameters](audioqueueenqueuebufferwithparameters%28____________________%29.md) function. See that function, and [Audio Queue Parameters](1552626-audio-queue-parameters.md), for more information.

## Topics

### Instance Properties

- [mID](audioqueueparameterevent/mid.md): The parameter.
- [mValue](audioqueueparameterevent/mvalue.md): The value of the specified parameter.

## See Also

### Data Types

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [AudioQueueBuffer](audioqueuebuffer.md): Defines an audio queue buffer.
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md): Specifies the current level metering information for one channel of an audio queue.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapCallback](audioqueueprocessingtapcallback.md)
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)
