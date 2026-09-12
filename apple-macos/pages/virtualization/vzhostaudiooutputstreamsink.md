> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzhostaudiooutputstreamsink](https://developer.apple.com/documentation/virtualization/vzhostaudiooutputstreamsink)

# VZHostAudioOutputStreamSink (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

Host audio output stream sink plays audio to the host system’s default output device.

## Declaration

```swift
class VZHostAudioOutputStreamSink
```

<a id="overview"></a>

## Overview

Host output data goes to the same device that [AudioQueueNewOutput(\_:\_:\_:\_:\_:\_:\_:)](https://developer.apple.com/documentation/audiotoolbox/audioqueuenewoutput%28_:_:_:_:_:_:_:%29) uses.

## Topics

### Creating the audio output stream sink

- [init()](vzhostaudiooutputstreamsink/init%28%29.md): Creates a new host audio output stream sink instance.

## Relationships

### Inherits From

- [VZAudioOutputStreamSink](vzaudiooutputstreamsink.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZVirtioSoundDeviceInputStreamConfiguration](vzvirtiosounddeviceinputstreamconfiguration.md): A PCM stream of input audio data, such as from a microphone.

### Audio streams

- [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md): The host audio input stream source that provides audio from the host system’s default input device.
- [VZAudioOutputStreamSink](vzaudiooutputstreamsink.md): The base class for an audio output stream sink.
- [VZAudioInputStreamSource](vzaudioinputstreamsource.md): The base class for an audio input stream source.

# VZHostAudioOutputStreamSink (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

Host audio output stream sink plays audio to the host system’s default output device.

## Declaration

```objectivec
@interface VZHostAudioOutputStreamSink : VZAudioOutputStreamSink
```

<a id="overview"></a>

## Overview

Host output data goes to the same device that [AudioQueueNewOutput](https://developer.apple.com/documentation/audiotoolbox/audioqueuenewoutput%28_:_:_:_:_:_:_:%29) uses.

## Topics

### Creating the audio output stream sink

- [init](vzhostaudiooutputstreamsink/init%28%29.md): Creates a new host audio output stream sink instance.

## Relationships

### Inherits From

- [VZAudioOutputStreamSink](vzaudiooutputstreamsink.md)

## See Also

### Related Documentation

- [VZVirtioSoundDeviceInputStreamConfiguration](vzvirtiosounddeviceinputstreamconfiguration.md): A PCM stream of input audio data, such as from a microphone.

### Audio streams

- [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md): The host audio input stream source that provides audio from the host system’s default input device.
- [VZAudioOutputStreamSink](vzaudiooutputstreamsink.md): The base class for an audio output stream sink.
- [VZAudioInputStreamSource](vzaudioinputstreamsource.md): The base class for an audio input stream source.
