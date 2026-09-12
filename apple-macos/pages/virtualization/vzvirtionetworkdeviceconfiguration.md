> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtionetworkdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtionetworkdeviceconfiguration)

# VZVirtioNetworkDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A configuration object that requests the creation of a network device for the guest system.

## Declaration

```swift
class VZVirtioNetworkDeviceConfiguration
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)

<a id="overview"></a>

## Overview

Use a [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object to configure one network interface of your virtual machine. After creating this object, assign an appropriate value to its inherited [attachment](vznetworkdeviceconfiguration/attachment.md) property to define the type of network interface you want. You can also assign a specific MAC address, or let the system generate a random address for you.

After creating and configuring a [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object, assign it to the [networkDevices](vzvirtualmachineconfiguration/networkdevices.md) property of your virtual machine’s configuration.

## Topics

### Creating the configuration object

- [init()](vzvirtionetworkdeviceconfiguration/init%28%29.md): Creates a network device configuration object for you to configure.

## Relationships

### Inherits From

- [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md)

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

- [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md): The common configuration traits for network devices.
- [VZMACAddress](vzmacaddress.md): The media access control (MAC) address for a network interface in your virtual machine.

# VZVirtioNetworkDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A configuration object that requests the creation of a network device for the guest system.

## Declaration

```objectivec
@interface VZVirtioNetworkDeviceConfiguration : VZNetworkDeviceConfiguration
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)

<a id="overview"></a>

## Overview

Use a [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object to configure one network interface of your virtual machine. After creating this object, assign an appropriate value to its inherited [attachment](vznetworkdeviceconfiguration/attachment.md) property to define the type of network interface you want. You can also assign a specific MAC address, or let the system generate a random address for you.

After creating and configuring a [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) object, assign it to the [networkDevices](vzvirtualmachineconfiguration/networkdevices.md) property of your virtual machine’s configuration.

## Topics

### Creating the configuration object

- [init](vzvirtionetworkdeviceconfiguration/init%28%29.md): Creates a network device configuration object for you to configure.

## Relationships

### Inherits From

- [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md)

## See Also

### Configurations

- [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md): The common configuration traits for network devices.
- [VZMACAddress](vzmacaddress.md): The media access control (MAC) address for a network interface in your virtual machine.
