> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuebuffer](https://developer.apple.com/documentation/audiotoolbox/audioqueuebuffer)

# AudioQueueBuffer (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Defines an audio queue buffer.

## Declaration

```swift
struct AudioQueueBuffer
```

<a id="overview"></a>

## Overview

Each audio queue has an associated set of audio queue buffers.  To allocate a buffer, call the [AudioQueueAllocateBuffer(\_:\_:\_:)](audioqueueallocatebuffer%28______%29.md) function. To dispose of a buffer, call the [AudioQueueFreeBuffer(\_:\_:)](audioqueuefreebuffer%28____%29.md) function.

If using a VBR compressed audio data format, you may want to instead use the `AudioQueueAllocateBufferWithPacketDescriptions` function. This function allocates a buffer with additional space for packet descriptions. The `mPacketDescriptionCapacity`, `mPacketDescriptions`, and `mPacketDescriptionCount` fields may only be used with buffers allocated with `AudioQueueAllocateBufferWithPacketDescriptions`.

## Topics

### Initializers

- [init(mAudioDataBytesCapacity:mAudioData:mAudioDataByteSize:mUserData:mPacketDescriptionCapacity:mPacketDescriptions:mPacketDescriptionCount:)](audioqueuebuffer/init%28maudiodatabytescapacity_maudiodata_maudiodatabytesize_muserdata_mpacketdescriptioncapacity_mpacketdescriptions_mpacketdescriptioncount_%29.md)

### Instance Properties

- [mAudioData](audioqueuebuffer/maudiodata.md): The audio data owned the audio queue buffer. The buffer address cannot be changed.
- [mAudioDataByteSize](audioqueuebuffer/maudiodatabytesize.md): The number of bytes of valid audio data in the audio queue buffer’s `mAudioData` field, initially set to `0`. Your callback must set this value for a playback audio queue; for recording, the recording audio queue sets the value.
- [mAudioDataBytesCapacity](audioqueuebuffer/maudiodatabytescapacity.md): The size of the audio queue buffer, in bytes. This size is set when a buffer is allocated and cannot be changed.
- [mPacketDescriptionCapacity](audioqueuebuffer/mpacketdescriptioncapacity.md): The maximum number of packet descriptions that can be stored in the `mPacketDescriptions` field.
- [mPacketDescriptionCount](audioqueuebuffer/mpacketdescriptioncount.md): The number of valid packet descriptions in the buffer. You set this value when providing buffers for playback. The audio queue sets this value when returning buffers from a recording queue.
- [mPacketDescriptions](audioqueuebuffer/mpacketdescriptions.md): An array of `AudioStreamPacketDescription` structures for the buffer.
- [mUserData](audioqueuebuffer/muserdata.md): The custom data structure you specify, for use by your callback function, when creating a recording or playback audio queue.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md): Specifies the current level metering information for one channel of an audio queue.
- [AudioQueueParameterEvent](audioqueueparameterevent.md): Specifies an audio queue parameter and associated value.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapCallback](audioqueueprocessingtapcallback.md)
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)

# AudioQueueBuffer (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Defines an audio queue buffer.

## Declaration

```objectivec
typedef struct AudioQueueBuffer { ... } AudioQueueBuffer;
```

<a id="overview"></a>

## Overview

Each audio queue has an associated set of audio queue buffers.  To allocate a buffer, call the [AudioQueueAllocateBuffer](audioqueueallocatebuffer%28______%29.md) function. To dispose of a buffer, call the [AudioQueueFreeBuffer](audioqueuefreebuffer%28____%29.md) function.

If using a VBR compressed audio data format, you may want to instead use the `AudioQueueAllocateBufferWithPacketDescriptions` function. This function allocates a buffer with additional space for packet descriptions. The `mPacketDescriptionCapacity`, `mPacketDescriptions`, and `mPacketDescriptionCount` fields may only be used with buffers allocated with `AudioQueueAllocateBufferWithPacketDescriptions`.

## Topics

### Instance Properties

- [mAudioData](audioqueuebuffer/maudiodata.md): The audio data owned the audio queue buffer. The buffer address cannot be changed.
- [mAudioDataByteSize](audioqueuebuffer/maudiodatabytesize.md): The number of bytes of valid audio data in the audio queue buffer’s `mAudioData` field, initially set to `0`. Your callback must set this value for a playback audio queue; for recording, the recording audio queue sets the value.
- [mAudioDataBytesCapacity](audioqueuebuffer/maudiodatabytescapacity.md): The size of the audio queue buffer, in bytes. This size is set when a buffer is allocated and cannot be changed.
- [mPacketDescriptionCapacity](audioqueuebuffer/mpacketdescriptioncapacity.md): The maximum number of packet descriptions that can be stored in the `mPacketDescriptions` field.
- [mPacketDescriptionCount](audioqueuebuffer/mpacketdescriptioncount.md): The number of valid packet descriptions in the buffer. You set this value when providing buffers for playback. The audio queue sets this value when returning buffers from a recording queue.
- [mPacketDescriptions](audioqueuebuffer/mpacketdescriptions.md): An array of `AudioStreamPacketDescription` structures for the buffer.
- [mUserData](audioqueuebuffer/muserdata.md): The custom data structure you specify, for use by your callback function, when creating a recording or playback audio queue.

## See Also

### Data Types

- [AudioQueueChannelAssignment](audioqueuechannelassignment.md)
- [AudioQueueProcessingTapFlags](audioqueueprocessingtapflags.md)
- [AudioQueueBufferRef](audioqueuebufferref.md): A pointer to an audio queue buffer.
- [AudioQueueLevelMeterState](audioqueuelevelmeterstate.md): Specifies the current level metering information for one channel of an audio queue.
- [AudioQueueParameterEvent](audioqueueparameterevent.md): Specifies an audio queue parameter and associated value.
- [AudioQueueParameterID](audioqueueparameterid.md): A `UInt32` value that uniquely identifies an audio queue parameter.
- [AudioQueueParameterValue](audioqueueparametervalue.md): A `Float32` value for an audio queue parameter.
- [AudioQueueProcessingTapCallback](audioqueueprocessingtapcallback.md)
- [AudioQueueProcessingTapRef](audioqueueprocessingtapref.md)
