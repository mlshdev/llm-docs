> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueueallocatebuffer(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueueallocatebuffer(_:_:_:))

# AudioQueueAllocateBuffer(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Asks an audio queue object to allocate an audio queue buffer.

## Declaration

```swift
func AudioQueueAllocateBuffer(_ inAQ: AudioQueueRef, _ inBufferByteSize: UInt32, _ outBuffer: UnsafeMutablePointer<AudioQueueBufferRef?>) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue you want to allocate a buffer.
- `inBufferByteSize`: The desired capacity of the new buffer, in bytes. Appropriate capacity depends on the processing you will perform on the data as well as on the audio data format.
- `outBuffer`: On output, points to the newly allocated audio queue buffer.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Once allocated, the pointer to the audio queue buffer and the buffer’s capacity cannot be changed. The buffer’s size field, `mAudioDataByteSize`, which indicates the amount of valid data, is initially set to 0.

## See Also

### Handling Audio Queue Buffers

- [AudioQueueAllocateBufferWithPacketDescriptions(\_:\_:\_:\_:)](audioqueueallocatebufferwithpacketdescriptions%28________%29.md): Asks an audio queue object to allocate an audio queue buffer with space for packet descriptions.
- [AudioQueueFreeBuffer(\_:\_:)](audioqueuefreebuffer%28____%29.md): Asks an audio queue to dispose of an audio queue buffer.
- [AudioQueueEnqueueBuffer(\_:\_:\_:\_:)](audioqueueenqueuebuffer%28________%29.md): Adds a buffer to the buffer queue of a recording or playback audio queue.
- [AudioQueueEnqueueBufferWithParameters(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audioqueueenqueuebufferwithparameters%28____________________%29.md): Adds a buffer to the buffer queue of a playback audio queue object, specifying start time and other settings.

# AudioQueueAllocateBuffer (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Asks an audio queue object to allocate an audio queue buffer.

## Declaration

```objectivec
extern OSStatus AudioQueueAllocateBuffer(AudioQueueRef inAQ, UInt32 inBufferByteSize, AudioQueueBufferRef*outBuffer);
```

## Parameters

- `inAQ`: The audio queue you want to allocate a buffer.
- `inBufferByteSize`: The desired capacity of the new buffer, in bytes. Appropriate capacity depends on the processing you will perform on the data as well as on the audio data format.
- `outBuffer`: On output, points to the newly allocated audio queue buffer.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Once allocated, the pointer to the audio queue buffer and the buffer’s capacity cannot be changed. The buffer’s size field, `mAudioDataByteSize`, which indicates the amount of valid data, is initially set to 0.

## See Also

### Handling Audio Queue Buffers

- [AudioQueueAllocateBufferWithPacketDescriptions](audioqueueallocatebufferwithpacketdescriptions%28________%29.md): Asks an audio queue object to allocate an audio queue buffer with space for packet descriptions.
- [AudioQueueFreeBuffer](audioqueuefreebuffer%28____%29.md): Asks an audio queue to dispose of an audio queue buffer.
- [AudioQueueEnqueueBuffer](audioqueueenqueuebuffer%28________%29.md): Adds a buffer to the buffer queue of a recording or playback audio queue.
- [AudioQueueEnqueueBufferWithParameters](audioqueueenqueuebufferwithparameters%28____________________%29.md): Adds a buffer to the buffer queue of a playback audio queue object, specifying start time and other settings.
