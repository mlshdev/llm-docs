> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiopcmbuffer/withunsafeaudiobufferlist(_:)](https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/withunsafeaudiobufferlist(_:))

# withUnsafeAudioBufferList(\_:)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Provides scoped read-only access to the audio buffer list.

## Declaration

```swift
func withUnsafeAudioBufferList<R>(_ body: (UnsafePointer<AudioBufferList>) throws -> R) rethrows -> R
```

## Parameters

- `body`: A closure that receives a pointer to the audio buffer list.

<a id="return-value"></a>

## Return Value

The value returned by the closure.

## See Also

### Accessing PCM Buffer Data

- [channelData(\_:)](channeldata%28__%29.md): Returns read-only access to a specific channel’s data.
- [mutableChannelData(\_:)](mutablechanneldata%28__%29.md): Returns mutable access to a specific channel’s data.
- [floatChannelData](floatchanneldata.md): The buffer’s audio samples as floating point values.
- [frameCapacity](framecapacity.md): The buffer’s capacity, in audio sample frames.
- [int16ChannelData](int16channeldata.md): The buffer’s 16-bit integer audio samples.
- [int32ChannelData](int32channeldata.md): The buffer’s 32-bit integer audio samples.
- [stride](stride.md): The buffer’s number of interleaved channels.
- [AVAudioPCMBuffer.ChannelData](channeldata.md): Represents read-only channel data.
- [AVAudioPCMBuffer.MutableChannelData](mutablechanneldata.md): Represents mutable channel data.
