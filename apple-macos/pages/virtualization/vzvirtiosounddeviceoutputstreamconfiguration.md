> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosounddeviceoutputstreamconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtiosounddeviceoutputstreamconfiguration)

# VZVirtioSoundDeviceOutputStreamConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that defines a Virtio sound device output stream configuration.

## Declaration

```swift
class VZVirtioSoundDeviceOutputStreamConfiguration
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)

<a id="overview"></a>

## Overview

A PCM stream of output audio data, such as to a speaker.

## Topics

### Creating an output stream configuration

- [init()](vzvirtiosounddeviceoutputstreamconfiguration/init%28%29.md): Creates a new sounds device output stream configuration.

### Accessing the sound sink

- [sink](vzvirtiosounddeviceoutputstreamconfiguration/sink.md): An audio stream sink that defines how the host handles audio data produced by the guest.

### Output sink

- [VZHostAudioOutputStreamSink](vzhostaudiooutputstreamsink.md): Host audio output stream sink plays audio to the host system’s default output device.
- [VZAudioOutputStreamSink](vzaudiooutputstreamsink.md): The base class for an audio output stream sink.

## Relationships

### Inherits From

- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configurations

- [VZVirtioSoundDeviceConfiguration](vzvirtiosounddeviceconfiguration.md): An object that defines a Virtio sound device configuration.
- [VZVirtioSoundDeviceInputStreamConfiguration](vzvirtiosounddeviceinputstreamconfiguration.md): A PCM stream of input audio data, such as from a microphone.
- [VZAudioDeviceConfiguration](vzaudiodeviceconfiguration.md): The base class for an audio device configuration.
- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md): An object that defines a Virtio sound device stream configuration.

# VZVirtioSoundDeviceOutputStreamConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that defines a Virtio sound device output stream configuration.

## Declaration

```objectivec
@interface VZVirtioSoundDeviceOutputStreamConfiguration : VZVirtioSoundDeviceStreamConfiguration
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)

<a id="overview"></a>

## Overview

A PCM stream of output audio data, such as to a speaker.

## Topics

### Creating an output stream configuration

- [init](vzvirtiosounddeviceoutputstreamconfiguration/init%28%29.md): Creates a new sounds device output stream configuration.

### Accessing the sound sink

- [sink](vzvirtiosounddeviceoutputstreamconfiguration/sink.md): An audio stream sink that defines how the host handles audio data produced by the guest.

### Output sink

- [VZHostAudioOutputStreamSink](vzhostaudiooutputstreamsink.md): Host audio output stream sink plays audio to the host system’s default output device.
- [VZAudioOutputStreamSink](vzaudiooutputstreamsink.md): The base class for an audio output stream sink.

## Relationships

### Inherits From

- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md)

## See Also

### Configurations

- [VZVirtioSoundDeviceConfiguration](vzvirtiosounddeviceconfiguration.md): An object that defines a Virtio sound device configuration.
- [VZVirtioSoundDeviceInputStreamConfiguration](vzvirtiosounddeviceinputstreamconfiguration.md): A PCM stream of input audio data, such as from a microphone.
- [VZAudioDeviceConfiguration](vzaudiodeviceconfiguration.md): The base class for an audio device configuration.
- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md): An object that defines a Virtio sound device stream configuration.
