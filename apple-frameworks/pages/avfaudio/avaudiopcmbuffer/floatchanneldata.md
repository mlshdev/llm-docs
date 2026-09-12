> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiopcmbuffer/floatchanneldata](https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/floatchanneldata)

# floatChannelData (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The buffer’s audio samples as floating point values.

## Declaration

```swift
var floatChannelData: UnsafePointer<UnsafeMutablePointer<Float>>? { get }
```

<a id="Discussion"></a>

## Discussion

The `floatChannelData` property returns pointers to the buffer’s audio samples if the buffer’s format is 32-bit float. It returns `nil` if it’s another format.

The returned pointer is to `format.channelCount` pointers to float. Each of these pointers is to [frameLength](framelength.md) valid samples, which the class spaces by [stride](stride.md) samples.

If the format isn’t interleaved, as with the standard deinterleaved float format, the pointers point to separate chunks of memory, and the [stride](stride.md) property value is `1`.

When the format is in an interleaved state, the pointers refer to the same buffer of interleaved samples, each offset by `1` frame, and the [stride](stride.md) property value is the number of interleaved channels.

## See Also

### Accessing PCM Buffer Data

- [channelData(\_:)](channeldata%28__%29.md): Returns read-only access to a specific channel’s data.
- [mutableChannelData(\_:)](mutablechanneldata%28__%29.md): Returns mutable access to a specific channel’s data.
- [withUnsafeAudioBufferList(\_:)](withunsafeaudiobufferlist%28__%29.md): Provides scoped read-only access to the audio buffer list.
- [frameCapacity](framecapacity.md): The buffer’s capacity, in audio sample frames.
- [int16ChannelData](int16channeldata.md): The buffer’s 16-bit integer audio samples.
- [int32ChannelData](int32channeldata.md): The buffer’s 32-bit integer audio samples.
- [stride](stride.md): The buffer’s number of interleaved channels.
- [AVAudioPCMBuffer.ChannelData](channeldata.md): Represents read-only channel data.
- [AVAudioPCMBuffer.MutableChannelData](mutablechanneldata.md): Represents mutable channel data.

# floatChannelData (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The buffer’s audio samples as floating point values.

## Declaration

```objectivec
@property (nonatomic, readonly) float * const* floatChannelData;
```

<a id="Discussion"></a>

## Discussion

The `floatChannelData` property returns pointers to the buffer’s audio samples if the buffer’s format is 32-bit float. It returns `nil` if it’s another format.

The returned pointer is to `format.channelCount` pointers to float. Each of these pointers is to [frameLength](framelength.md) valid samples, which the class spaces by [stride](stride.md) samples.

If the format isn’t interleaved, as with the standard deinterleaved float format, the pointers point to separate chunks of memory, and the [stride](stride.md) property value is `1`.

When the format is in an interleaved state, the pointers refer to the same buffer of interleaved samples, each offset by `1` frame, and the [stride](stride.md) property value is the number of interleaved channels.

## See Also

### Accessing PCM Buffer Data

- [frameCapacity](framecapacity.md): The buffer’s capacity, in audio sample frames.
- [int16ChannelData](int16channeldata.md): The buffer’s 16-bit integer audio samples.
- [int32ChannelData](int32channeldata.md): The buffer’s 32-bit integer audio samples.
- [stride](stride.md): The buffer’s number of interleaved channels.
