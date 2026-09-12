> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosounddeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtiosounddeviceconfiguration)

# VZVirtioSoundDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that defines a Virtio sound device configuration.

## Declaration

```swift
class VZVirtioSoundDeviceConfiguration
```

<a id="overview"></a>

## Overview

Use a `VZVirtioSoundDeviceConfiguration` object to configure an audio device for your VM. After creating this object, assign appropriate values to the [streams](vzvirtiosounddeviceconfiguration/streams.md) array property which defines the behaviors of the underlying audio streams for this audio device.

After creating and configuring a `VZVirtioSoundDeviceConfiguration` object, assign it to the [audioDevices](vzvirtualmachineconfiguration/audiodevices.md) property of your VM’s configuration.

## Topics

### Creating a sound device configuration

- [init()](vzvirtiosounddeviceconfiguration/init%28%29.md): Creates a new sound device configuration.

### Accessing the sound streams

- [streams](vzvirtiosounddeviceconfiguration/streams.md): List of audio streams exposed by this device.

## Relationships

### Inherits From

- [VZAudioDeviceConfiguration](vzaudiodeviceconfiguration.md)

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

- [VZVirtioSoundDeviceOutputStreamConfiguration](vzvirtiosounddeviceoutputstreamconfiguration.md): An object that defines a Virtio sound device output stream configuration.
- [VZVirtioSoundDeviceInputStreamConfiguration](vzvirtiosounddeviceinputstreamconfiguration.md): A PCM stream of input audio data, such as from a microphone.
- [VZAudioDeviceConfiguration](vzaudiodeviceconfiguration.md): The base class for an audio device configuration.
- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md): An object that defines a Virtio sound device stream configuration.

# VZVirtioSoundDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that defines a Virtio sound device configuration.

## Declaration

```objectivec
@interface VZVirtioSoundDeviceConfiguration : VZAudioDeviceConfiguration
```

<a id="overview"></a>

## Overview

Use a `VZVirtioSoundDeviceConfiguration` object to configure an audio device for your VM. After creating this object, assign appropriate values to the [streams](vzvirtiosounddeviceconfiguration/streams.md) array property which defines the behaviors of the underlying audio streams for this audio device.

After creating and configuring a `VZVirtioSoundDeviceConfiguration` object, assign it to the [audioDevices](vzvirtualmachineconfiguration/audiodevices.md) property of your VM’s configuration.

## Topics

### Creating a sound device configuration

- [init](vzvirtiosounddeviceconfiguration/init%28%29.md): Creates a new sound device configuration.

### Accessing the sound streams

- [streams](vzvirtiosounddeviceconfiguration/streams.md): List of audio streams exposed by this device.

## Relationships

### Inherits From

- [VZAudioDeviceConfiguration](vzaudiodeviceconfiguration.md)

## See Also

### Configurations

- [VZVirtioSoundDeviceOutputStreamConfiguration](vzvirtiosounddeviceoutputstreamconfiguration.md): An object that defines a Virtio sound device output stream configuration.
- [VZVirtioSoundDeviceInputStreamConfiguration](vzvirtiosounddeviceinputstreamconfiguration.md): A PCM stream of input audio data, such as from a microphone.
- [VZAudioDeviceConfiguration](vzaudiodeviceconfiguration.md): The base class for an audio device configuration.
- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md): An object that defines a Virtio sound device stream configuration.
