> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzaudiodeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzaudiodeviceconfiguration)

# VZAudioDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for an audio device configuration.

## Declaration

```swift
class VZAudioDeviceConfiguration
```

<a id="overview"></a>

## Overview

Don’t instantiate this abstract class directly. Instead, instantiate one of its subclasses such as [VZVirtioSoundDeviceConfiguration](vzvirtiosounddeviceconfiguration.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioSoundDeviceConfiguration](vzvirtiosounddeviceconfiguration.md)

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
- [VZVirtioSoundDeviceInputStreamConfiguration](vzvirtiosounddeviceinputstreamconfiguration.md): A PCM stream of input audio data, such as from a microphone.
- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md): An object that defines a Virtio sound device stream configuration.

# VZAudioDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for an audio device configuration.

## Declaration

```objectivec
@interface VZAudioDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate this abstract class directly. Instead, instantiate one of its subclasses such as [VZVirtioSoundDeviceConfiguration](vzvirtiosounddeviceconfiguration.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioSoundDeviceConfiguration](vzvirtiosounddeviceconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZVirtioSoundDeviceConfiguration](vzvirtiosounddeviceconfiguration.md): An object that defines a Virtio sound device configuration.
- [VZVirtioSoundDeviceOutputStreamConfiguration](vzvirtiosounddeviceoutputstreamconfiguration.md): An object that defines a Virtio sound device output stream configuration.
- [VZVirtioSoundDeviceInputStreamConfiguration](vzvirtiosounddeviceinputstreamconfiguration.md): A PCM stream of input audio data, such as from a microphone.
- [VZVirtioSoundDeviceStreamConfiguration](vzvirtiosounddevicestreamconfiguration.md): An object that defines a Virtio sound device stream configuration.
