> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioentropydeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtioentropydeviceconfiguration)

# VZVirtioEntropyDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A source of entropy for the guest’s random number generator.

## Declaration

```swift
class VZVirtioEntropyDeviceConfiguration
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)

<a id="overview"></a>

## Overview

Use a [VZVirtioEntropyDeviceConfiguration](vzvirtioentropydeviceconfiguration.md) object to expose a source of entropy for the guest operating system’s random-number generator. When you create this object and add it to your virtual machine’s configuration, the virtual machine configures a Virtio-compliant entropy device. The guest operating system uses this device as a seed to generate random numbers.

Create a [VZVirtioEntropyDeviceConfiguration](vzvirtioentropydeviceconfiguration.md) object and add it to the [entropyDevices](vzvirtualmachineconfiguration/entropydevices.md) property of your virtual machine’s configuration.

## Topics

### Creating the configuration object

- [init()](vzvirtioentropydeviceconfiguration/init%28%29.md): Creates an entropy device configuration object.

## Relationships

### Inherits From

- [VZEntropyDeviceConfiguration](vzentropydeviceconfiguration.md)

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

- [VZEntropyDeviceConfiguration](vzentropydeviceconfiguration.md): The common configuration traits for entropy devices.

# VZVirtioEntropyDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A source of entropy for the guest’s random number generator.

## Declaration

```objectivec
@interface VZVirtioEntropyDeviceConfiguration : VZEntropyDeviceConfiguration
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)

<a id="overview"></a>

## Overview

Use a [VZVirtioEntropyDeviceConfiguration](vzvirtioentropydeviceconfiguration.md) object to expose a source of entropy for the guest operating system’s random-number generator. When you create this object and add it to your virtual machine’s configuration, the virtual machine configures a Virtio-compliant entropy device. The guest operating system uses this device as a seed to generate random numbers.

Create a [VZVirtioEntropyDeviceConfiguration](vzvirtioentropydeviceconfiguration.md) object and add it to the [entropyDevices](vzvirtualmachineconfiguration/entropydevices.md) property of your virtual machine’s configuration.

## Topics

### Creating the configuration object

- [init](vzvirtioentropydeviceconfiguration/init%28%29.md): Creates an entropy device configuration object.

## Relationships

### Inherits From

- [VZEntropyDeviceConfiguration](vzentropydeviceconfiguration.md)

## See Also

### Configurations

- [VZEntropyDeviceConfiguration](vzentropydeviceconfiguration.md): The common configuration traits for entropy devices.
