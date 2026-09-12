> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzhostaudioinputstreamsource](https://developer.apple.com/documentation/virtualization/vzhostaudioinputstreamsource)

# VZHostAudioInputStreamSource (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The host audio input stream source that provides audio from the host system’s default input device.

## Declaration

```swift
class VZHostAudioInputStreamSource
```

<a id="overview"></a>

## Overview

The host input data comes from the same device that [AudioQueueNewInput(\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuenewinput%28_:_:_:_:_:_:_:%29) uses.

## Topics

### Creating the audio input stream source

- [init()](vzhostaudioinputstreamsource/init%28%29.md): Creates a new audio input stream source.

## Relationships

### Inherits From

- [VZAudioInputStreamSource](vzaudioinputstreamsource.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Audio streams

- [VZHostAudioOutputStreamSink](vzhostaudiooutputstreamsink.md): Host audio output stream sink plays audio to the host system’s default output device.
- [VZAudioOutputStreamSink](vzaudiooutputstreamsink.md): The base class for an audio output stream sink.
- [VZAudioInputStreamSource](vzaudioinputstreamsource.md): The base class for an audio input stream source.

# VZHostAudioInputStreamSource (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The host audio input stream source that provides audio from the host system’s default input device.

## Declaration

```objectivec
@interface VZHostAudioInputStreamSource : VZAudioInputStreamSource
```

<a id="overview"></a>

## Overview

The host input data comes from the same device that [AudioQueueNewInput](https://developer.apple.com/documentation/audiotoolbox/audioqueuenewinput%28_:_:_:_:_:_:_:%29) uses.

## Topics

### Creating the audio input stream source

- [init](vzhostaudioinputstreamsource/init%28%29.md): Creates a new audio input stream source.

## Relationships

### Inherits From

- [VZAudioInputStreamSource](vzaudioinputstreamsource.md)

## See Also

### Audio streams

- [VZHostAudioOutputStreamSink](vzhostaudiooutputstreamsink.md): Host audio output stream sink plays audio to the host system’s default output device.
- [VZAudioOutputStreamSink](vzaudiooutputstreamsink.md): The base class for an audio output stream sink.
- [VZAudioInputStreamSource](vzaudioinputstreamsource.md): The base class for an audio input stream source.
