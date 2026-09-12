> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiobuffer](https://developer.apple.com/documentation/avfaudio/avaudiobuffer)

# AVAudioBuffer (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a buffer of audio data with a format.

## Declaration

```swift
class AVAudioBuffer
```

## Topics

### Getting the Buffer Format

- [format](avaudiobuffer/format.md): The format of the audio in the buffer.

### Getting the Audio Buffers

- [audioBufferList](avaudiobuffer/audiobufferlist.md): The buffer’s underlying audio buffer list.
- [mutableAudioBufferList](avaudiobuffer/mutableaudiobufferlist.md): A mutable version of the buffer’s underlying audio buffer list.

### Specialized Audio Buffers

- [AVAudioCompressedBuffer](avaudiocompressedbuffer.md): An object that represents an audio buffer that you use for compressed audio formats.
- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAudioCompressedBuffer](avaudiocompressedbuffer.md)
- [AVAudioPCMBuffer](avaudiopcmbuffer.md)

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

- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.
- [AVReadOnlyAudioPCMBuffer](avreadonlyaudiopcmbuffer.md): A read-only, Sendable audio buffer for safe concurrent access.
- [AVAudioFile](avaudiofile.md): An object that represents an audio file that the system can open for reading or writing.
- [AVAudioTime](avaudiotime.md): An object you use to represent a moment in time.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.

# AVAudioBuffer (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that represents a buffer of audio data with a format.

## Declaration

```objectivec
@interface AVAudioBuffer : NSObject
```

## Topics

### Getting the Buffer Format

- [format](avaudiobuffer/format.md): The format of the audio in the buffer.

### Getting the Audio Buffers

- [audioBufferList](avaudiobuffer/audiobufferlist.md): The buffer’s underlying audio buffer list.
- [mutableAudioBufferList](avaudiobuffer/mutableaudiobufferlist.md): A mutable version of the buffer’s underlying audio buffer list.

### Specialized Audio Buffers

- [AVAudioCompressedBuffer](avaudiocompressedbuffer.md): An object that represents an audio buffer that you use for compressed audio formats.
- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVAudioCompressedBuffer](avaudiocompressedbuffer.md)
- [AVAudioPCMBuffer](avaudiopcmbuffer.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Supporting data types

- [AVAudioPCMBuffer](avaudiopcmbuffer.md): An object that represents an audio buffer you use with PCM audio formats.
- [AVAudioFile](avaudiofile.md): An object that represents an audio file that the system can open for reading or writing.
- [AVAudioTime](avaudiotime.md): An object you use to represent a moment in time.
- [Audio settings](audio-settings.md): Configure audio processing settings using standard key and value constants.
