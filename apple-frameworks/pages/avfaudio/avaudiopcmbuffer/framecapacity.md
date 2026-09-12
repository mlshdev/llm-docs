> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiopcmbuffer/framecapacity](https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/framecapacity)

# frameCapacity (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The buffer’s capacity, in audio sample frames.

## Declaration

```swift
var frameCapacity: AVAudioFrameCount { get }
```

## See Also

### Accessing PCM Buffer Data

- [channelData(\_:)](channeldata%28__%29.md): Returns read-only access to a specific channel’s data.
- [mutableChannelData(\_:)](mutablechanneldata%28__%29.md): Returns mutable access to a specific channel’s data.
- [withUnsafeAudioBufferList(\_:)](withunsafeaudiobufferlist%28__%29.md): Provides scoped read-only access to the audio buffer list.
- [floatChannelData](floatchanneldata.md): The buffer’s audio samples as floating point values.
- [int16ChannelData](int16channeldata.md): The buffer’s 16-bit integer audio samples.
- [int32ChannelData](int32channeldata.md): The buffer’s 32-bit integer audio samples.
- [stride](stride.md): The buffer’s number of interleaved channels.
- [AVAudioPCMBuffer.ChannelData](channeldata.md): Represents read-only channel data.
- [AVAudioPCMBuffer.MutableChannelData](mutablechanneldata.md): Represents mutable channel data.

# frameCapacity (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The buffer’s capacity, in audio sample frames.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioFrameCount frameCapacity;
```

## See Also

### Accessing PCM Buffer Data

- [floatChannelData](floatchanneldata.md): The buffer’s audio samples as floating point values.
- [int16ChannelData](int16channeldata.md): The buffer’s 16-bit integer audio samples.
- [int32ChannelData](int32channeldata.md): The buffer’s 32-bit integer audio samples.
- [stride](stride.md): The buffer’s number of interleaved channels.
