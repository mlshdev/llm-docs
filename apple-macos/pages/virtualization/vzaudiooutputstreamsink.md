> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzaudiooutputstreamsink](https://developer.apple.com/documentation/virtualization/vzaudiooutputstreamsink)

# VZAudioOutputStreamSink (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for an audio output stream sink.

## Declaration

```swift
class VZAudioOutputStreamSink
```

<a id="overview"></a>

## Overview

An audio output stream sink defines how the host system consumes audio data from a guest.

Don’t instantiate `VZAudioOutputStreamSink` directly, use one of its subclasses, such as [VZHostAudioOutputStreamSink](vzhostaudiooutputstreamsink.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZHostAudioOutputStreamSink](vzhostaudiooutputstreamsink.md)

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
- [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md): The host audio input stream source that provides audio from the host system’s default input device.
- [VZAudioInputStreamSource](vzaudioinputstreamsource.md): The base class for an audio input stream source.

# VZAudioOutputStreamSink (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for an audio output stream sink.

## Declaration

```objectivec
@interface VZAudioOutputStreamSink : NSObject
```

<a id="overview"></a>

## Overview

An audio output stream sink defines how the host system consumes audio data from a guest.

Don’t instantiate `VZAudioOutputStreamSink` directly, use one of its subclasses, such as [VZHostAudioOutputStreamSink](vzhostaudiooutputstreamsink.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZHostAudioOutputStreamSink](vzhostaudiooutputstreamsink.md)

## See Also

### Audio streams

- [VZHostAudioOutputStreamSink](vzhostaudiooutputstreamsink.md): Host audio output stream sink plays audio to the host system’s default output device.
- [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md): The host audio input stream source that provides audio from the host system’s default input device.
- [VZAudioInputStreamSource](vzaudioinputstreamsource.md): The base class for an audio input stream source.
