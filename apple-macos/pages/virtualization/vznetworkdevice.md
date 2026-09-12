> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkdevice](https://developer.apple.com/documentation/virtualization/vznetworkdevice)

# VZNetworkDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A base class that represents a network device in a virtual machine.

## Declaration

```swift
class VZNetworkDevice
```

<a id="overview"></a>

## Overview

Don’t instantiate a [VZNetworkDevice](vznetworkdevice.md) directly. When you create a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) instance with a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) the system creates the number of network devices based on the number of [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) objects you specify in the VM configuration. Before initializing the virtual machine (VM), validate the configuration using [validate()](vzvirtualmachineconfiguration/validate%28%29.md) to ensure the user’s computer supports the number of network and other devices you’ve specified.  

For many purposes, a single network that uses a Network Address Translation (NAT) attachment and connects the VM to the host computer’s network is sufficient. You can use additional network interfaces for purposes of your own design, such as:

- Bridging several physical interfaces to connect to multiple networks.
- Using the file descriptor attachment to create specialized connections for different purposes.

You access the network devices through the `VZVirtualMachine`.[networkDevices](vzvirtualmachine/networkdevices.md) property. The network devices map to their respective configurations in a one to one relationship, where index `i` of `VZVirtualMachine.networkDevices` corresponds to the network device configuration at index `i` set on `VZVirtualMachineConfiguration`.[networkDevices](vzvirtualmachineconfiguration/networkdevices.md).

## Topics

### Getting the network attachment point

- [attachment](vznetworkdevice/attachment.md): The network attachment that’s connected to this network device.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md): The common configuration traits for network devices.
- [vmnet](../vmnet.md): Connect with network interfaces to read and write packets on guest operating systems.

# VZNetworkDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A base class that represents a network device in a virtual machine.

## Declaration

```objectivec
@interface VZNetworkDevice : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate a [VZNetworkDevice](vznetworkdevice.md) directly. When you create a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) instance with a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) the system creates the number of network devices based on the number of [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md) objects you specify in the VM configuration. Before initializing the virtual machine (VM), validate the configuration using [validateWithError:](vzvirtualmachineconfiguration/validate%28%29.md) to ensure the user’s computer supports the number of network and other devices you’ve specified.  

For many purposes, a single network that uses a Network Address Translation (NAT) attachment and connects the VM to the host computer’s network is sufficient. You can use additional network interfaces for purposes of your own design, such as:

- Bridging several physical interfaces to connect to multiple networks.
- Using the file descriptor attachment to create specialized connections for different purposes.

You access the network devices through the `VZVirtualMachine`.[networkDevices](vzvirtualmachine/networkdevices.md) property. The network devices map to their respective configurations in a one to one relationship, where index `i` of `VZVirtualMachine.networkDevices` corresponds to the network device configuration at index `i` set on `VZVirtualMachineConfiguration`.[networkDevices](vzvirtualmachineconfiguration/networkdevices.md).

## Topics

### Getting the network attachment point

- [attachment](vznetworkdevice/attachment.md): The network attachment that’s connected to this network device.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md): The common configuration traits for network devices.
- [vmnet](../vmnet.md): Connect with network interfaces to read and write packets on guest operating systems.
