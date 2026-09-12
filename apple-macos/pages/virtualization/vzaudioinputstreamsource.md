> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzaudioinputstreamsource](https://developer.apple.com/documentation/virtualization/vzaudioinputstreamsource)

# VZAudioInputStreamSource (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for an audio input stream source.

## Declaration

```swift
class VZAudioInputStreamSource
```

<a id="overview"></a>

## Overview

An audio input stream source defines how th guest produces audio input data on the host system.

Don’t instantiate `VZAudioInputStreamSource` directly, use one of its subclasses such as [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md)

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
- [VZAudioOutputStreamSink](vzaudiooutputstreamsink.md): The base class for an audio output stream sink.

# VZAudioInputStreamSource (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for an audio input stream source.

## Declaration

```objectivec
@interface VZAudioInputStreamSource : NSObject
```

<a id="overview"></a>

## Overview

An audio input stream source defines how th guest produces audio input data on the host system.

Don’t instantiate `VZAudioInputStreamSource` directly, use one of its subclasses such as [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md)

## See Also

### Audio streams

- [VZHostAudioOutputStreamSink](vzhostaudiooutputstreamsink.md): Host audio output stream sink plays audio to the host system’s default output device.
- [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md): The host audio input stream source that provides audio from the host system’s default input device.
- [VZAudioOutputStreamSink](vzaudiooutputstreamsink.md): The base class for an audio output stream sink.
