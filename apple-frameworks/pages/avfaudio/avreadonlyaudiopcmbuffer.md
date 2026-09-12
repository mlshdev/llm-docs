> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avreadonlyaudiopcmbuffer](https://developer.apple.com/documentation/avfaudio/avreadonlyaudiopcmbuffer)

# AVReadOnlyAudioPCMBuffer

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A read-only, Sendable audio buffer for safe concurrent access.

## Declaration

```swift
struct AVReadOnlyAudioPCMBuffer
```

## Topics

### Creating a read-only buffer

- [init(copying:)](avreadonlyaudiopcmbuffer/init%28copying_%29.md): Creates a read-only buffer by copying audio data from an existing PCM buffer.
- [init(format:frameCapacity:initializingWith:)](avreadonlyaudiopcmbuffer/init%28format_framecapacity_initializingwith_%29.md): Creates a read-only buffer by allocating and initializing audio data via closure.
- [init(unsafeRetaining:)](avreadonlyaudiopcmbuffer/init%28unsaferetaining_%29.md): Creates a read-only buffer by retaining the existing PCM buffer without copying.

### Getting buffer properties

- [format](avreadonlyaudiopcmbuffer/format.md)
- [frameCapacity](avreadonlyaudiopcmbuffer/framecapacity.md)
- [frameLength](avreadonlyaudiopcmbuffer/framelength.md)
- [stride](avreadonlyaudiopcmbuffer/stride.md)

### Accessing channel data

- [channelData(\_:)](avreadonlyaudiopcmbuffer/channeldata%28__%29.md): Returns read-only access to a specific channel’s data.
- [withUnsafeAudioBufferList(\_:)](avreadonlyaudiopcmbuffer/withunsafeaudiobufferlist%28__%29.md): Provides scoped read-only access to the audio buffer list.
- [AVReadOnlyAudioPCMBuffer.ChannelData](avreadonlyaudiopcmbuffer/channeldata.md): Represents read-only channel data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting data types

- [AVAudioBuffer](avaudiobuffer.md): An object that represents a buffer of audio data with a format.
- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.
- [AVAudioFile](avaudiofile.md): An object that represents an audio file that the system can open for reading or writing.
- [AVAudioTime](avaudiotime.md): An object you use to represent a moment in time.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.
