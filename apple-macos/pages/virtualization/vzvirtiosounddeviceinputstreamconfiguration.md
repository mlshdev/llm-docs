> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosounddeviceinputstreamconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtiosounddeviceinputstreamconfiguration)

# VZVirtioSoundDeviceInputStreamConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A PCM stream of input audio data, such as from a microphone.

## Declaration

```swift
class VZVirtioSoundDeviceInputStreamConfiguration
```

<a id="overview"></a>

## Overview

This device represents a PCM stream of audio data. Don’t instantiate `VZVirtioSoundDeviceStreamConfiguration` directly. Instead, use one of its subclasses such as [VZVirtioSoundDeviceInputStreamConfiguration](vzvirtiosounddeviceinputstreamconfiguration.md) or [VZVirtioSoundDeviceOutputStreamConfiguration](vzvirtiosounddeviceoutputstreamconfiguration.md).

## Topics

### Creating an input stream configuration

- [init()](vzvirtiosounddeviceinputstreamconfiguration/init%28%29.md): Creates a new sound device input stream configuration.

### Accessing the sound source

- [source](vzvirtiosounddeviceinputstreamconfiguration/source.md): An audio stream source that defines how the host supplies audio data for the guest.

### Input source

- [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md): The host audio input stream source that provides audio from the host system’s default input device.
- [VZAudioInputStreamSource](vzaudioinputstreamsource.md): The base class for an audio input stream source.

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
- [VZVirtioSoundDeviceOutputStreamConfiguration](vzvirtiosounddeviceoutputstreamconfiguration.md): An object that defines a Virtio sound device output stream configuration.
- [VZAudioDeviceConfiguration](vzaudiodeviceconfiguration.md): The base class for an audio device configuration.
- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md): An object that defines a Virtio sound device stream configuration.

# VZVirtioSoundDeviceInputStreamConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A PCM stream of input audio data, such as from a microphone.

## Declaration

```objectivec
@interface VZVirtioSoundDeviceInputStreamConfiguration : VZVirtioSoundDeviceStreamConfiguration
```

<a id="overview"></a>

## Overview

This device represents a PCM stream of audio data. Don’t instantiate `VZVirtioSoundDeviceStreamConfiguration` directly. Instead, use one of its subclasses such as [VZVirtioSoundDeviceInputStreamConfiguration](vzvirtiosounddeviceinputstreamconfiguration.md) or [VZVirtioSoundDeviceOutputStreamConfiguration](vzvirtiosounddeviceoutputstreamconfiguration.md).

## Topics

### Creating an input stream configuration

- [init](vzvirtiosounddeviceinputstreamconfiguration/init%28%29.md): Creates a new sound device input stream configuration.

### Accessing the sound source

- [source](vzvirtiosounddeviceinputstreamconfiguration/source.md): An audio stream source that defines how the host supplies audio data for the guest.

### Input source

- [VZHostAudioInputStreamSource](vzhostaudioinputstreamsource.md): The host audio input stream source that provides audio from the host system’s default input device.
- [VZAudioInputStreamSource](vzaudioinputstreamsource.md): The base class for an audio input stream source.

## Relationships

### Inherits From

- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md)

## See Also

### Configurations

- [VZVirtioSoundDeviceConfiguration](vzvirtiosounddeviceconfiguration.md): An object that defines a Virtio sound device configuration.
- [VZVirtioSoundDeviceOutputStreamConfiguration](vzvirtiosounddeviceoutputstreamconfiguration.md): An object that defines a Virtio sound device output stream configuration.
- [VZAudioDeviceConfiguration](vzaudiodeviceconfiguration.md): The base class for an audio device configuration.
- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md): An object that defines a Virtio sound device stream configuration.
