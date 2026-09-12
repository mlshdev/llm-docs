> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiopcmbuffer](https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer)

# AVAudioPCMBuffer (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents an audio buffer you use with PCM audio formats.

## Declaration

```swift
class AVAudioPCMBuffer
```

<a id="overview"></a>

## Overview

The PCM buffer class provides methods that are useful for manipulating buffers of audio in PCM format.

## Topics

### Creating a PCM Audio Buffer

- [init(pcmFormat:frameCapacity:)](avaudiopcmbuffer/init%28pcmformat_framecapacity_%29-5jhd5.md): Creates a PCM audio buffer instance for PCM audio data.
- [init(pcmFormat:bufferListNoCopy:deallocator:)](avaudiopcmbuffer/init%28pcmformat_bufferlistnocopy_deallocator_%29-9iwe7.md): Creates a PCM audio buffer instance without copying samples, for PCM audio data, with a specified buffer list and a deallocator closure.

### Getting and Setting the Frame Length

- [frameLength](avaudiopcmbuffer/framelength.md): The current number of valid sample frames in the buffer.

### Accessing PCM Buffer Data

- [channelData(\_:)](avaudiopcmbuffer/channeldata%28__%29.md): Returns read-only access to a specific channel’s data.
- [mutableChannelData(\_:)](avaudiopcmbuffer/mutablechanneldata%28__%29.md): Returns mutable access to a specific channel’s data.
- [withUnsafeAudioBufferList(\_:)](avaudiopcmbuffer/withunsafeaudiobufferlist%28__%29.md): Provides scoped read-only access to the audio buffer list.
- [floatChannelData](avaudiopcmbuffer/floatchanneldata.md): The buffer’s audio samples as floating point values.
- [frameCapacity](avaudiopcmbuffer/framecapacity.md): The buffer’s capacity, in audio sample frames.
- [int16ChannelData](avaudiopcmbuffer/int16channeldata.md): The buffer’s 16-bit integer audio samples.
- [int32ChannelData](avaudiopcmbuffer/int32channeldata.md): The buffer’s 32-bit integer audio samples.
- [stride](avaudiopcmbuffer/stride.md): The buffer’s number of interleaved channels.
- [AVAudioPCMBuffer.ChannelData](avaudiopcmbuffer/channeldata.md): Represents read-only channel data.
- [AVAudioPCMBuffer.MutableChannelData](avaudiopcmbuffer/mutablechanneldata.md): Represents mutable channel data.

### Initializers

- [init(PCMFormat:bufferListNoCopy:deallocator:)](avaudiopcmbuffer/init%28pcmformat_bufferlistnocopy_deallocator_%29-2ms1j.md)
- [init(PCMFormat:frameCapacity:)](avaudiopcmbuffer/init%28pcmformat_framecapacity_%29-7scyk.md)
- [init(copying:)](avaudiopcmbuffer/init%28copying_%29-68es5.md): Creates a mutable buffer by copying another PCM buffer’s audio data.
- [init(copying:)](avaudiopcmbuffer/init%28copying_%29-875xm.md): Creates a mutable buffer by copying a read-only buffer’s audio data.

## Relationships

### Inherits From

- [AVAudioBuffer](avaudiobuffer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Supporting data types

- [AVAudioBuffer](avaudiobuffer.md): An object that represents a buffer of audio data with a format.
- [AVReadOnlyAudioPCMBuffer](avreadonlyaudiopcmbuffer.md): A read-only, Sendable audio buffer for safe concurrent access.
- [AVAudioFile](avaudiofile.md): An object that represents an audio file that the system can open for reading or writing.
- [AVAudioTime](avaudiotime.md): An object you use to represent a moment in time.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.

# AVAudioPCMBuffer (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents an audio buffer you use with PCM audio formats.

## Declaration

```objectivec
@interface AVAudioPCMBuffer : AVAudioBuffer
```

<a id="overview"></a>

## Overview

The PCM buffer class provides methods that are useful for manipulating buffers of audio in PCM format.

## Topics

### Creating a PCM Audio Buffer

- [initWithPCMFormat:frameCapacity:](avaudiopcmbuffer/init%28pcmformat_framecapacity_%29-5jhd5.md): Creates a PCM audio buffer instance for PCM audio data.
- [initWithPCMFormat:bufferListNoCopy:deallocator:](avaudiopcmbuffer/init%28pcmformat_bufferlistnocopy_deallocator_%29-9iwe7.md): Creates a PCM audio buffer instance without copying samples, for PCM audio data, with a specified buffer list and a deallocator closure.

### Getting and Setting the Frame Length

- [frameLength](avaudiopcmbuffer/framelength.md): The current number of valid sample frames in the buffer.

### Accessing PCM Buffer Data

- [floatChannelData](avaudiopcmbuffer/floatchanneldata.md): The buffer’s audio samples as floating point values.
- [frameCapacity](avaudiopcmbuffer/framecapacity.md): The buffer’s capacity, in audio sample frames.
- [int16ChannelData](avaudiopcmbuffer/int16channeldata.md): The buffer’s 16-bit integer audio samples.
- [int32ChannelData](avaudiopcmbuffer/int32channeldata.md): The buffer’s 32-bit integer audio samples.
- [stride](avaudiopcmbuffer/stride.md): The buffer’s number of interleaved channels.

## Relationships

### Inherits From

- [AVAudioBuffer](avaudiobuffer.md)

## See Also

### Supporting data types

- [AVAudioBuffer](avaudiobuffer.md): An object that represents a buffer of audio data with a format.
- [AVAudioFile](avaudiofile.md): An object that represents an audio file that the system can open for reading or writing.
- [AVAudioTime](avaudiotime.md): An object you use to represent a moment in time.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.
