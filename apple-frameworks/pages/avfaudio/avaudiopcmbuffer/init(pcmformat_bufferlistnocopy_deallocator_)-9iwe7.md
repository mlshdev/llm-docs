> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiopcmbuffer/init(pcmformat:bufferlistnocopy:deallocator:)-9iwe7](https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/init(pcmformat:bufferlistnocopy:deallocator:)-9iwe7)

# init(pcmFormat:bufferListNoCopy:deallocator:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a PCM audio buffer instance without copying samples, for PCM audio data, with a specified buffer list and a deallocator closure.

## Declaration

```swift
init?(pcmFormat format: AVAudioFormat, bufferListNoCopy bufferList: UnsafePointer<AudioBufferList>, deallocator: ((UnsafePointer<AudioBufferList>) -> Void)? = nil)
```

## Parameters

- `format`: The format of the PCM audio the buffer contains.
- `bufferList`: The buffer list with the memory to contain the PCM audio data.
- `deallocator`: The closure the method invokes when the resulting PCM buffer object deallocates.

<a id="return-value"></a>

## Return Value

A new [AVAudioPCMBuffer](../avaudiopcmbuffer.md) instance, or `nil` if it’s not possible.

<a id="Discussion"></a>

## Discussion

Use the deallocator parameter to define your own deallocation behavior for the audio buffer list’s underlying memory. The buffer list sent to the deallocator is identical to the one you specify, in term of buffer count and each buffer’s [mData](../../coreaudiotypes/audiobuffer/mdata.md) and [mDataByteSize](../../coreaudiotypes/audiobuffer/mdatabytesize.md) members.

The method returns `nil` due to the following reasons:

- The format has zero bytes per frame.
- The buffer you specify has zero number of buffers.
- The buffer list’s pointer to the buffer of audio data is in a `nil` state.
- Each of the buffer’s data byte size aren’t equal, or if any of the buffers’ data byte size is zero.
- There’s a mismatch between the format’s number of buffers and the buffer list’s size (1 if interleaved, [mChannelsPerFrame](../../coreaudiotypes/audiostreambasicdescription/mchannelsperframe.md) if deinterleaved).

## See Also

### Creating a PCM Audio Buffer

- [init(pcmFormat:frameCapacity:)](init%28pcmformat_framecapacity_%29-5jhd5.md): Creates a PCM audio buffer instance for PCM audio data.

# initWithPCMFormat:bufferListNoCopy:deallocator: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a PCM audio buffer instance without copying samples, for PCM audio data, with a specified buffer list and a deallocator closure.

## Declaration

```objectivec
- (instancetype) initWithPCMFormat:(AVAudioFormat *) format bufferListNoCopy:(const AudioBufferList *) bufferList deallocator:(void (^)(const AudioBufferList *)) deallocator;
```

## Parameters

- `format`: The format of the PCM audio the buffer contains.
- `bufferList`: The buffer list with the memory to contain the PCM audio data.
- `deallocator`: The closure the method invokes when the resulting PCM buffer object deallocates.

<a id="return-value"></a>

## Return Value

A new [AVAudioPCMBuffer](../avaudiopcmbuffer.md) instance, or `nil` if it’s not possible.

<a id="Discussion"></a>

## Discussion

Use the deallocator parameter to define your own deallocation behavior for the audio buffer list’s underlying memory. The buffer list sent to the deallocator is identical to the one you specify, in term of buffer count and each buffer’s [mData](../../coreaudiotypes/audiobuffer/mdata.md) and [mDataByteSize](../../coreaudiotypes/audiobuffer/mdatabytesize.md) members.

The method returns `nil` due to the following reasons:

- The format has zero bytes per frame.
- The buffer you specify has zero number of buffers.
- The buffer list’s pointer to the buffer of audio data is in a `nil` state.
- Each of the buffer’s data byte size aren’t equal, or if any of the buffers’ data byte size is zero.
- There’s a mismatch between the format’s number of buffers and the buffer list’s size (1 if interleaved, [mChannelsPerFrame](../../coreaudiotypes/audiostreambasicdescription/mchannelsperframe.md) if deinterleaved).

## See Also

### Creating a PCM Audio Buffer

- [initWithPCMFormat:frameCapacity:](init%28pcmformat_framecapacity_%29-5jhd5.md): Creates a PCM audio buffer instance for PCM audio data.
