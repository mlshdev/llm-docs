> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueenqueuebuffer(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueueenqueuebuffer(_:_:_:_:))

# AudioQueueEnqueueBuffer(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Adds a buffer to the buffer queue of a recording or playback audio queue.

## Declaration

```swift
func AudioQueueEnqueueBuffer(_ inAQ: AudioQueueRef, _ inBuffer: AudioQueueBufferRef, _ inNumPacketDescs: UInt32, _ inPacketDescs: UnsafePointer<AudioStreamPacketDescription>?) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue that owns the audio queue buffer.
- `inBuffer`: The audio queue buffer to add to the buffer queue.
- `inNumPacketDescs`: The number of packets of audio data in the `inBuffer` parameter. Use a value of `0` for any of the following situations:

  - When playing a constant bit rate (CBR) format.
  - When the audio queue is a recording (input) audio queue.
  - When the buffer you are reenqueuing was allocated with the [AudioQueueAllocateBufferWithPacketDescriptions(\_:\_:\_:\_:)](audioqueueallocatebufferwithpacketdescriptions%28________%29.md) function. In this case, your callback should describe the buffer’s packets in the buffer’s `mPacketDescriptions` and `mPacketDescriptionCount` fields.
- `inPacketDescs`: An array of packet descriptions. Use a value of `NULL` for any of the following situations:

  - When playing a constant bit rate (CBR) format.
  - When the audio queue is an input (recording) audio queue.
  - When the buffer you are reenqueuing was allocated with the [AudioQueueAllocateBufferWithPacketDescriptions(\_:\_:\_:\_:)](audioqueueallocatebufferwithpacketdescriptions%28________%29.md) function. In this case, your callback should describe the buffer’s packets in the buffer’s `mPacketDescriptions` and `mPacketDescriptionCount` fields.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Audio queue callbacks use this function to reenqueue buffers—placing them “last in line” in a buffer queue. A playback (or *output*) callback reenqueues a buffer after the buffer is filled with fresh audio data (typically from a file). A recording (or *input*) callback reenqueues a buffer after the buffer’s contents were written (typically to a file).

## See Also

### Handling Audio Queue Buffers

- [AudioQueueAllocateBuffer(\_:\_:\_:)](audioqueueallocatebuffer%28______%29.md): Asks an audio queue object to allocate an audio queue buffer.
- [AudioQueueAllocateBufferWithPacketDescriptions(\_:\_:\_:\_:)](audioqueueallocatebufferwithpacketdescriptions%28________%29.md): Asks an audio queue object to allocate an audio queue buffer with space for packet descriptions.
- [AudioQueueFreeBuffer(\_:\_:)](audioqueuefreebuffer%28____%29.md): Asks an audio queue to dispose of an audio queue buffer.
- [AudioQueueEnqueueBufferWithParameters(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audioqueueenqueuebufferwithparameters%28____________________%29.md): Adds a buffer to the buffer queue of a playback audio queue object, specifying start time and other settings.

# AudioQueueEnqueueBuffer (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Adds a buffer to the buffer queue of a recording or playback audio queue.

## Declaration

```objectivec
extern OSStatus AudioQueueEnqueueBuffer(AudioQueueRef inAQ, AudioQueueBufferRef inBuffer, UInt32 inNumPacketDescs, const AudioStreamPacketDescription *inPacketDescs);
```

## Parameters

- `inAQ`: The audio queue that owns the audio queue buffer.
- `inBuffer`: The audio queue buffer to add to the buffer queue.
- `inNumPacketDescs`: The number of packets of audio data in the `inBuffer` parameter. Use a value of `0` for any of the following situations:

  - When playing a constant bit rate (CBR) format.
  - When the audio queue is a recording (input) audio queue.
  - When the buffer you are reenqueuing was allocated with the [AudioQueueAllocateBufferWithPacketDescriptions](audioqueueallocatebufferwithpacketdescriptions%28________%29.md) function. In this case, your callback should describe the buffer’s packets in the buffer’s `mPacketDescriptions` and `mPacketDescriptionCount` fields.
- `inPacketDescs`: An array of packet descriptions. Use a value of `NULL` for any of the following situations:

  - When playing a constant bit rate (CBR) format.
  - When the audio queue is an input (recording) audio queue.
  - When the buffer you are reenqueuing was allocated with the [AudioQueueAllocateBufferWithPacketDescriptions](audioqueueallocatebufferwithpacketdescriptions%28________%29.md) function. In this case, your callback should describe the buffer’s packets in the buffer’s `mPacketDescriptions` and `mPacketDescriptionCount` fields.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Audio queue callbacks use this function to reenqueue buffers—placing them “last in line” in a buffer queue. A playback (or *output*) callback reenqueues a buffer after the buffer is filled with fresh audio data (typically from a file). A recording (or *input*) callback reenqueues a buffer after the buffer’s contents were written (typically to a file).

## See Also

### Handling Audio Queue Buffers

- [AudioQueueAllocateBuffer](audioqueueallocatebuffer%28______%29.md): Asks an audio queue object to allocate an audio queue buffer.
- [AudioQueueAllocateBufferWithPacketDescriptions](audioqueueallocatebufferwithpacketdescriptions%28________%29.md): Asks an audio queue object to allocate an audio queue buffer with space for packet descriptions.
- [AudioQueueFreeBuffer](audioqueuefreebuffer%28____%29.md): Asks an audio queue to dispose of an audio queue buffer.
- [AudioQueueEnqueueBufferWithParameters](audioqueueenqueuebufferwithparameters%28____________________%29.md): Adds a buffer to the buffer queue of a playback audio queue object, specifying start time and other settings.
