> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiodevicespecificconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtiodevicespecificconfiguration)

# VZVirtioDeviceSpecificConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

The device-specific configuration for a Virtio device

## Declaration

```swift
class VZVirtioDeviceSpecificConfiguration
```

<a id="overview"></a>

## Overview

This class represents a Virtio device’s device-specific configuration.

For more details about device-specific configuration for different Virtio devices, see the [Virtio specification](https://docs.oasis-open.org/virtio/virtio/v1.3/csd01/virtio-v1.3-csd01.html).

Serialize any device-specific configuration structure into an [NSData](https://developer.apple.com/documentation/foundation/nsdata) object, and instantiate a [VZVirtioDeviceSpecificConfiguration](vzvirtiodevicespecificconfiguration.md) object with it, and set this object on the [deviceSpecificConfiguration](vzcustomvirtiodeviceconfiguration/devicespecificconfiguration.md) property.

## Topics

### Initializers

- [init(configurationData:)](vzvirtiodevicespecificconfiguration/init%28configurationdata_%29.md): Initializes a Virtio device specific configuration object with the configuration data you provide

### Instance Properties

- [configurationData](vzvirtiodevicespecificconfiguration/configurationdata.md): The serialized device-specific configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating and configuring Virtio drivers

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZCustomVirtioDeviceConfiguration](vzcustomvirtiodeviceconfiguration.md): An object that defines a custom Virtio Device configuration.

# VZVirtioDeviceSpecificConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

The device-specific configuration for a Virtio device

## Declaration

```objectivec
@interface VZVirtioDeviceSpecificConfiguration : NSObject
```

<a id="overview"></a>

## Overview

This class represents a Virtio device’s device-specific configuration.

For more details about device-specific configuration for different Virtio devices, see the [Virtio specification](https://docs.oasis-open.org/virtio/virtio/v1.3/csd01/virtio-v1.3-csd01.html).

Serialize any device-specific configuration structure into an [NSData](https://developer.apple.com/documentation/foundation/nsdata) object, and instantiate a [VZVirtioDeviceSpecificConfiguration](vzvirtiodevicespecificconfiguration.md) object with it, and set this object on the [deviceSpecificConfiguration](vzcustomvirtiodeviceconfiguration/devicespecificconfiguration.md) property.

## Topics

### Instance Properties

- [configurationData](vzvirtiodevicespecificconfiguration/configurationdata.md): The serialized device-specific configuration.

### Instance Methods

- [initWithConfigurationData:](vzvirtiodevicespecificconfiguration/init%28configurationdata_%29.md): Initializes a Virtio device specific configuration object with the configuration data you provide

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Creating and configuring Virtio drivers

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZCustomVirtioDeviceConfiguration](vzcustomvirtiodeviceconfiguration.md): An object that defines a custom Virtio Device configuration.
