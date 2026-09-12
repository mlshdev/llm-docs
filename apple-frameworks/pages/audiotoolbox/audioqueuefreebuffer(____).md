> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioqueuefreebuffer(_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuefreebuffer(_:_:))

# AudioQueueFreeBuffer(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Asks an audio queue to dispose of an audio queue buffer.

## Declaration

```swift
func AudioQueueFreeBuffer(_ inAQ: AudioQueueRef, _ inBuffer: AudioQueueBufferRef) -> OSStatus
```

## Parameters

- `inAQ`: The audio queue that owns the audio queue buffer you want to dispose of.
- `inBuffer`: The buffer to dispose of.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Disposing of an audio queue also disposes of its buffers. Call this function only if you want to dispose of a particular buffer while continuing to use an audio queue. You can dispose of a buffer only when the audio queue that owns it is stopped (that is, not processing audio data).

## See Also

### Related Documentation

- [AudioQueueDispose(\_:\_:)](audioqueuedispose%28____%29.md): Disposes of an audio queue.

### Handling Audio Queue Buffers

- [AudioQueueAllocateBuffer(\_:\_:\_:)](audioqueueallocatebuffer%28______%29.md): Asks an audio queue object to allocate an audio queue buffer.
- [AudioQueueAllocateBufferWithPacketDescriptions(\_:\_:\_:\_:)](audioqueueallocatebufferwithpacketdescriptions%28________%29.md): Asks an audio queue object to allocate an audio queue buffer with space for packet descriptions.
- [AudioQueueEnqueueBuffer(\_:\_:\_:\_:)](audioqueueenqueuebuffer%28________%29.md): Adds a buffer to the buffer queue of a recording or playback audio queue.
- [AudioQueueEnqueueBufferWithParameters(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audioqueueenqueuebufferwithparameters%28____________________%29.md): Adds a buffer to the buffer queue of a playback audio queue object, specifying start time and other settings.

# AudioQueueFreeBuffer (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Asks an audio queue to dispose of an audio queue buffer.

## Declaration

```objectivec
extern OSStatus AudioQueueFreeBuffer(AudioQueueRef inAQ, AudioQueueBufferRef inBuffer);
```

## Parameters

- `inAQ`: The audio queue that owns the audio queue buffer you want to dispose of.
- `inBuffer`: The buffer to dispose of.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Disposing of an audio queue also disposes of its buffers. Call this function only if you want to dispose of a particular buffer while continuing to use an audio queue. You can dispose of a buffer only when the audio queue that owns it is stopped (that is, not processing audio data).

## See Also

### Related Documentation

- [AudioQueueDispose](audioqueuedispose%28____%29.md): Disposes of an audio queue.

### Handling Audio Queue Buffers

- [AudioQueueAllocateBuffer](audioqueueallocatebuffer%28______%29.md): Asks an audio queue object to allocate an audio queue buffer.
- [AudioQueueAllocateBufferWithPacketDescriptions](audioqueueallocatebufferwithpacketdescriptions%28________%29.md): Asks an audio queue object to allocate an audio queue buffer with space for packet descriptions.
- [AudioQueueEnqueueBuffer](audioqueueenqueuebuffer%28________%29.md): Adds a buffer to the buffer queue of a recording or playback audio queue.
- [AudioQueueEnqueueBufferWithParameters](audioqueueenqueuebufferwithparameters%28____________________%29.md): Adds a buffer to the buffer queue of a playback audio queue object, specifying start time and other settings.
