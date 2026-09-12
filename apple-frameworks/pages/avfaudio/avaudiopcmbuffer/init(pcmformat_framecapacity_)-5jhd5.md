> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiopcmbuffer/init(pcmformat:framecapacity:)-5jhd5](https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/init(pcmformat:framecapacity:)-5jhd5)

# init(pcmFormat:frameCapacity:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a PCM audio buffer instance for PCM audio data.

## Declaration

```swift
init?(pcmFormat format: AVAudioFormat, frameCapacity: AVAudioFrameCount)
```

## Parameters

- `format`: The format of the PCM audio the buffer contains.
- `frameCapacity`: The capacity of the buffer in PCM sample frames.

<a id="return-value"></a>

## Return Value

A new [AVAudioPCMBuffer](../avaudiopcmbuffer.md) instance, or `nil` if it’s not possible.

<a id="Discussion"></a>

## Discussion

The method returns `nil` due to the following reasons:

- The format has zero bytes per frame.
- The system can’t represent the buffer byte capacity as an unsigned 32-bit integer.

## See Also

### Related Documentation

- [frameLength](framelength.md): The current number of valid sample frames in the buffer.
- [frameCapacity](framecapacity.md): The buffer’s capacity, in audio sample frames.

### Creating a PCM Audio Buffer

- [init(pcmFormat:bufferListNoCopy:deallocator:)](init%28pcmformat_bufferlistnocopy_deallocator_%29-9iwe7.md): Creates a PCM audio buffer instance without copying samples, for PCM audio data, with a specified buffer list and a deallocator closure.

# initWithPCMFormat:frameCapacity: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a PCM audio buffer instance for PCM audio data.

## Declaration

```objectivec
- (instancetype) initWithPCMFormat:(AVAudioFormat *) format frameCapacity:(AVAudioFrameCount) frameCapacity;
```

## Parameters

- `format`: The format of the PCM audio the buffer contains.
- `frameCapacity`: The capacity of the buffer in PCM sample frames.

<a id="return-value"></a>

## Return Value

A new [AVAudioPCMBuffer](../avaudiopcmbuffer.md) instance, or `nil` if it’s not possible.

<a id="Discussion"></a>

## Discussion

The method returns `nil` due to the following reasons:

- The format has zero bytes per frame.
- The system can’t represent the buffer byte capacity as an unsigned 32-bit integer.

## See Also

### Related Documentation

- [frameLength](framelength.md): The current number of valid sample frames in the buffer.
- [frameCapacity](framecapacity.md): The buffer’s capacity, in audio sample frames.

### Creating a PCM Audio Buffer

- [initWithPCMFormat:bufferListNoCopy:deallocator:](init%28pcmformat_bufferlistnocopy_deallocator_%29-9iwe7.md): Creates a PCM audio buffer instance without copying samples, for PCM audio data, with a specified buffer list and a deallocator closure.
